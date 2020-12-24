import { PatternName } from '@/lib/interfaces';

export const enToJa: { [en in PatternName]: string } = {
  yagasuri: '矢絣',
  seigaiha: '青海波',
  hishiseigaiha: '菱青海波',
  ichimatsu: '市松',
  kagome: '籠目',
  matsukawabishi: '松皮菱',
  shichihou: '七宝',
  urokomon: '鱗文',
};

export function toFirstUpperCase(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}
