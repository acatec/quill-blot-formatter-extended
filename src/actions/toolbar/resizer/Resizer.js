// @flow

import type { AlignOptions } from '../../../Options';
import type { GroupInterface } from '../GroupInterface';
import type { VariantInterface } from '../VariantInterface';

const LEFT_ALIGN = 'left';
const CENTER_ALIGN = 'center';
const RIGHT_ALIGN = 'right';
const INLINE = 'inline';
const REMOVE = 'remove';
const SIZE_25 = 'size25';
const SIZE_50 = 'size50';
const SIZE_100 = 'size100';

export default class Resizer implements GroupInterface {
  variants: { [string]: VariantInterface };
  alignAttribute: string;
  applyStyle: boolean;

  constructor(options: AlignOptions) {
    this.applyStyle = options.aligner.applyStyle;
    this.alignAttribute = 'size';
    // this.alignAttribute = options.attribute;
    this.variants = {
      [SIZE_25]: {
        name: SIZE_25,
        icon: options.icons.size25,
        apply: (el: HTMLElement) => {
          this.setVariant(el, SIZE_25);
          this.setAnyStyle(el, {
            width: 'calc(25% - 20px)',
            'min-height': 'calc((25vw - 20px) * 0.45)',
            // width: '25%',
            // 'min-height': '18.75%',
            'max-height': '',
            height: '',
          });
        },
      },
      [SIZE_50]: {
        name: SIZE_50,
        icon: options.icons.size50,
        apply: (el: HTMLElement) => {
          this.setVariant(el, SIZE_50);
          this.setAnyStyle(el, {
            width: 'calc(50% - 20px)',
            'min-height': 'calc((50vw - 20px) * 0.45)',
            'max-height': '',
            height: '',
          });
        },
      },
      [SIZE_100]: {
        name: SIZE_100,
        icon: options.icons.size100,
        apply: (el: HTMLElement) => {
          this.setVariant(el, SIZE_100);
          this.setAnyStyle(el, {
            width: 'calc(100% - 20px)',
            'min-height': 'calc((100vw - 20px) * 0.45)',
            'max-height': '',
            height: '',
          });
        },
      },
    };
  }

  getVariants(): VariantInterface[] {
    return Object.keys(this.variants).map(k => this.variants[k]);
  }

  clear(el: HTMLElement): void {
    el.removeAttribute(this.alignAttribute);
    this.setAnyStyle(el, {
      width: '',
      'min-height': '',
    });
  }

  isApplied(el: HTMLElement, alignment: VariantInterface): boolean {
    return el.getAttribute(this.alignAttribute) === alignment.name;
  }

  setVariant(el: HTMLElement, value: string) {
    el.setAttribute(this.alignAttribute, value);
  }

  setAnyStyle(el: HTMLElement, options: { [string]: string }) {
    if (this.applyStyle) {
      for (const prop in options) {
        el.style.setProperty(prop, options[prop]);
      }
    }
  }
}
