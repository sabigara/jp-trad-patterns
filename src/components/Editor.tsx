import React from 'react';
import download from 'downloadjs';
import { toSvg, toPng } from 'html-to-image';

import { PatternName } from '@/lib/interfaces';
import Slider from '@/components/Slider';
import ColorPicker from '@/components/ColorPicker';
import Button from '@/components/Button';
import Radio from '@/components/Radio';
import Modal from '@/components/Modal';
import PatternPicker, {
  getByName as getPatternByName,
} from '@/components/PatternPicker';

import styles from '@/components/Editor.module.scss';

type Props = unknown;

const Editor: React.FC<Props> = () => {
  const [svg, setSvg] = React.useState<SVGSVGElement>();
  const [preview, setPreview] = React.useState<HTMLDivElement>();
  const [svgData, setSvgData] = React.useState('');
  const [size, setSize] = React.useState(1);
  const [primary, setPrimary] = React.useState<string>('#3a71a0');
  const [secondary, setSecondary] = React.useState<string>('white');
  const [patternName, setPatternName] = React.useState<PatternName>('yagasuri');
  const [exportOpen, setExportOpen] = React.useState(false);

  const handleSelectedChange = React.useCallback((name: PatternName) => {
    setPatternName(name);
  }, []);

  const handleExport = React.useCallback(() => {
    setExportOpen(true);
  }, []);

  const Pattern = React.useMemo(() => {
    if (patternName === null) return null;
    return getPatternByName(patternName);
  }, [patternName]);

  React.useEffect(() => {
    if (svg == null) return;
    setSvgData(btoa(new XMLSerializer().serializeToString(svg)));
  }, [svg, size, primary, secondary]);

  return (
    <>
      <div className={styles.container}>
        <div style={{ display: 'none' }}>
          {patternName === null ? null : (
            <Pattern
              innerRef={setSvg}
              size={size}
              primary={primary}
              secondary={secondary}
            />
          )}
        </div>
        <div className={styles.inner}>
          <div className={styles.preview}>
            <div
              ref={(elm) => {
                setPreview(elm);
              }}
              style={{
                backgroundImage: `url(data:image/svg+xml;base64,${svgData})`,
              }}
            />
          </div>
          <div className={styles.params}>
            <PatternPicker onChange={handleSelectedChange} />
            <div className={styles.paramsRow}>
              <span>Size</span>
              <Slider
                value={size}
                onChange={setSize}
                min={0.1}
                max={2}
                step={0.05}
              />
            </div>
            <div className={styles.paramsRow}>
              <span>Primary</span>
              <ColorPicker
                color={primary ?? 'white'}
                onChange={(color) => setPrimary(color)}
              />
            </div>
            <div className={styles.paramsRow}>
              <span>Secondary</span>
              <ColorPicker
                color={secondary ?? 'white'}
                onChange={(color) => setSecondary(color)}
              />
            </div>
            <div className={styles.paramsRow}>
              <Button onClick={handleExport}>Export</Button>
            </div>
          </div>
        </div>
      </div>
      <Export
        svg={svg}
        preview={preview}
        patternName={patternName}
        isOpen={exportOpen}
        close={() => setExportOpen(false)}
      />
    </>
  );
};

type ExportProps = {
  svg: SVGSVGElement;
  preview: HTMLDivElement;
  patternName: PatternName;
  isOpen: boolean;
  close: () => void;
};

type ExportFormat = 'svg' | 'png';
type ExportType = 'pattern' | 'whole';

const Export: React.FC<ExportProps> = ({
  svg,
  preview,
  patternName,
  isOpen,
  close,
}) => {
  const [format, setFormat] = React.useState<ExportFormat>('svg');
  const [size, setSize] = React.useState<ExportType>('pattern');

  const handleFormatChange = React.useCallback((val: string) => {
    setFormat(val as ExportFormat);
  }, []);

  const handleSizeChange = React.useCallback((val: string) => {
    setSize(val as ExportType);
  }, []);

  const downloadSVG = React.useCallback(async () => {
    if (svg == null || preview == null) return;
    let data: string;
    if (size === 'pattern') {
      data = svg.outerHTML;
    } else {
      data = await toSvg(preview);
    }
    download(data, `${patternName}.svg`);
  }, [patternName, preview, size, svg]);

  const downloadPNG = React.useCallback(async () => {
    if (preview == null) return;
    let data: string;
    if (size === 'pattern') {
      const div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.top = '0';
      div.style.zIndex = '-1';
      div.style.display = 'inline-block';
      div.appendChild(svg.cloneNode(true));
      document.body.appendChild(div);
      data = await toPng(div);
      document.body.removeChild(div);
    } else {
      data = await toPng(preview);
    }
    download(data, `${patternName}.png`);
  }, [patternName, preview, size, svg]);

  const handleDownloadClick = React.useCallback(() => {
    switch (format) {
      case 'svg':
        downloadSVG();
        break;
      case 'png':
        downloadPNG();
        break;
      default:
        throw new Error('Invalid format');
    }
  }, [downloadPNG, downloadSVG, format]);

  return (
    <Modal isOpen={isOpen} close={close}>
      <div className={styles.radioGroup}>
        <Radio
          label="svg"
          id="svg"
          selected={format === 'svg'}
          value="svg"
          group="format"
          onChange={handleFormatChange}
        />
        <Radio
          label="png"
          id="png"
          selected={format === 'png'}
          value="png"
          group="format"
          onChange={handleFormatChange}
        />
      </div>
      <div className={styles.radioGroup}>
        <Radio
          label="pattern"
          id="pattern"
          selected={size === 'pattern'}
          value="pattern"
          group="size"
          onChange={handleSizeChange}
        />
        <Radio
          label="whole"
          id="whole"
          selected={size === 'whole'}
          value="whole"
          group="size"
          onChange={handleSizeChange}
        />
      </div>
      <div>
        <Button onClick={handleDownloadClick}>Download</Button>
      </div>
    </Modal>
  );
};

export default Editor;
