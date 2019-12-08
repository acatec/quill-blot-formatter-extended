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
    this.alignAttribute = options.attribute;
    this.variants = {
      [SIZE_25]: {
        name: SIZE_25,
        icon: '25%',
        apply: (el: HTMLElement) => {
          this.setVariant(el, SIZE_25);
          this.setAnyStyle(el, {
            width: '25%',
            'max-height': '',
          });
        },
      },
      [SIZE_50]: {
        name: SIZE_50,
        icon: '50%',
        apply: (el: HTMLElement) => {
          this.setVariant(el, SIZE_50);
          this.setAnyStyle(el, {
            width: '50%',
            'max-height': '',
          });
        },
      },
      [SIZE_100]: {
        name: SIZE_100,
        icon: '100%',
        apply: (el: HTMLElement) => {
          this.setVariant(el, RIGHT_ALIGN);
          this.setAnyStyle(el, {
            width: '100%',
            'max-height': '',
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
    });
  }

  isApplied(el: HTMLElement, alignment: VariantInterface): boolean {
    return el.getAttribute(this.alignAttribute) === alignment.name;
  }

  setVariant(el: HTMLElement, value: string) {
    el.setAttribute(this.alignAttribute, value);
  }

  setStyle(el: HTMLElement, display: ?string, float: ?string, margin: ?string) {
    if (this.applyStyle) {
      el.style.setProperty('display', display);
      el.style.setProperty('float', float);
      el.style.setProperty('margin', margin);
    }
  }

  setAnyStyle(el: HTMLElement, options: { [string]: string }) {
    if (this.applyStyle) {
      for (const prop in options) {
        el.style.setProperty(prop, options[prop]);
      }
    }
  }
}
