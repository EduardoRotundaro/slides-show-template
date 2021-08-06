type ColorTypes = 'black' | 'white';

type AlignTypes = 'center' | 'left' | 'right' | 'justify';

type WeightTypes = 'lighter' | 'regular' | 'bold' | 'bolder' | 'heavy';

type FontTypes = 'primary' | 'secondary';

export type ElementPropsType = {
  color?: ColorTypes,
  align?: AlignTypes,
  weight?: WeightTypes,
  font?: FontTypes,
};

export type ComponentPropsType = {
  children: string,
  className?: string,
  color?: ColorTypes,
  align?: AlignTypes,
  weight?: WeightTypes,
  font?: FontTypes,
};
