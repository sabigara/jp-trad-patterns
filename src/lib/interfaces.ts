export type PatternProps = {
  innerRef?: (elm: SVGSVGElement) => void;
  primary?: string;
  secondary?: string;
  size?: number;
};

export const PATTERN_NAMES = [
  'yagasuri',
  'seigaiha',
  'hishiseigaiha',
  'ichimatsu',
  'shichihou',
  'matsukawabishi',
  'urokomon',
  'kagome',
] as const;

export type PatternName = typeof PATTERN_NAMES[number];
