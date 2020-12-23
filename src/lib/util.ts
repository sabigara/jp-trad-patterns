import { PatternName } from '@/lib/interfaces';

export const enToJa: { [en in PatternName]: string } = {
  yagasuri: '矢絣',
  seigaiha: '青海波',
  hishiseigaiha: '菱青海波',
};

export function toFirstUpperCase(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}
