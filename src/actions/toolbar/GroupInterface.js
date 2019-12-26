// @flow

import type { VariantInterface } from './VariantInterface';

export interface GroupInterface {
  getName(): string;
  getTitle(): string;
  getVariants(): VariantInterface[];
  isApplied(el: HTMLElement, alignment: VariantInterface): boolean;
  clear(el: HTMLElement): void;
}
