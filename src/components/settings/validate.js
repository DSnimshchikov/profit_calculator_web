export const required = value => (value ? undefined : 'Обязательно');
export const number = value =>
  value && isNaN(Number(value)) ? 'Должно быть числом' : undefined;


const minValue = min => value =>
  value && value < min ? `Должно больше ${min-1}` : undefined;

const maxValue = max => value =>
  value && value > max ? `Должно меньше ${max}` : undefined;

export const minValue1 = minValue(1)
export const minValue91 = minValue(91)
export const maxValue1831 = maxValue(1831)
