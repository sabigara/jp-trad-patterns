import React from 'react';

import { PatternName } from '@/lib/interfaces';
import Slider from '@/components/Slider';
import ColorPicker from '@/components/ColorPicker';
import PatternPicker, {
  getByName as getPatternByName,
} from '@/components/PatternPicker';

import styles from '@/components/Editor.module.scss';

type Props = unknown;

const Editor: React.FC<Props> = () => {
  const [svg, setSvg] = React.useState<SVGSVGElement>();
  const [svgURL, setSvgURL] = React.useState('');
  const [size, setSize] = React.useState(1);
  const [primary, setPrimary] = React.useState<string>('#3a71a0');
  const [secondary, setSecondary] = React.useState<string>('white');
  const [patternName, setPatternName] = React.useState<PatternName | null>(
    null,
  );

  const handleSelectedChange = React.useCallback((name: PatternName) => {
    setPatternName(name);
  }, []);

  const Pattern = React.useMemo(() => {
    if (patternName === null) return null;
    return getPatternByName(patternName);
  }, [patternName]);

  React.useEffect(() => {
    if (svg == null) return;
    setSvgURL(btoa(new XMLSerializer().serializeToString(svg)));
  }, [svg, size, primary, secondary]);

  return (
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
        <div
          className={styles.preview}
          style={{
            backgroundImage: `url(data:image/svg+xml;base64,${svgURL})`,
          }}
        />
        <div className={styles.params}>
          <PatternPicker onChange={handleSelectedChange} />
          <Slider
            value={size}
            onChange={setSize}
            min={0.1}
            max={2}
            step={0.05}
          />
          <ColorPicker
            color={primary ?? 'white'}
            onChange={(color) => setPrimary(color)}
          />
          <ColorPicker
            color={secondary ?? 'white'}
            onChange={(color) => setSecondary(color)}
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
