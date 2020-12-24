export type PatternProps = {
  innerRef?: (elm: SVGSVGElement) => void;
  primary?: string;
  secondary?: string;
  size?: number;
};

export type PatternName =
  | 'yagasuri'
  | 'seigaiha'
  | 'hishiseigaiha'
  | 'ichimatsu'
  | 'shichihou'
  | 'matsukawabishi'
  | 'urokomon'
  | 'kagome';
