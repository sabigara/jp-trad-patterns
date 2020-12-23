import React from 'react';

import styles from '@/components/Editor.module.scss';
import Slider from '@/components/Slider';
import ColorPicker from '@/components/ColorPicker';
import Yagasuri from '@/patterns/yagasuri';

type Props = unknown;

const Editor: React.FC<Props> = () => {
  const [svg, setSvg] = React.useState<SVGSVGElement>();
  const [svgURL, setSvgURL] = React.useState('');
  const [size, setSize] = React.useState(1);
  const [primary, setPrimary] = React.useState<string | null>(null);
  const [secondary, setSecondary] = React.useState<string | null>(null);
  console.log(primary);

  React.useEffect(() => {
    if (svg == null) return;
    setSvgURL(btoa(new XMLSerializer().serializeToString(svg)));
  }, [svg, size, primary, secondary]);

  return (
    <div className={styles.container}>
      <div style={{ display: 'none' }}>
        <Yagasuri
          innerRef={setSvg}
          size={size}
          primary={primary}
          secondary={secondary}
        />
      </div>
      <div className={styles.inner}>
        <div
          className={styles.preview}
          style={{
            backgroundImage: `url(data:image/svg+xml;base64,${svgURL})`,
          }}
        />
        <div className={styles.params}>
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
