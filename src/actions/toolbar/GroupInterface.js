// @flow

import type { VariantInterface } from './VariantInterface';

export interface GroupInterface {
  getVariants(): VariantInterface[];
  isApplied(el: HTMLElement, alignment: VariantInterface): boolean;
  clear(el: HTMLElement): void;
}
