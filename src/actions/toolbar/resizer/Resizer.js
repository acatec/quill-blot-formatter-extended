// @flow

import type { AlignOptions } from '../../../Options';
import type { GroupInterface } from '../GroupInterface';
import type { VariantInterface } from '../VariantInterface';

const NAME = 'Resizer';
const TITLE = 'Размер';
const LEFT_ALIGN = 'left';
const CENTER_ALIGN = 'center';
const RIGHT_ALIGN = 'right';
const INLINE = 'inline';
const REMOVE = 'remove';
const SIZE_ORIG = 'sizeOrig';
const SIZE_25 = 'size25';
const SIZE_30 = 'size30';
const SIZE_40 = 'size40';
const SIZE_50 = 'size50';
const SIZE_60 = 'size60';
const SIZE_70 = 'size70';
const SIZE_80 = 'size80';
const SIZE_90 = 'size90';
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
      [SIZE_ORIG]: {
        name: SIZE_ORIG,
        icon: options.icons.sizeOrig,
        apply: (el: HTMLElement) => {
          this.setVariant(el, SIZE_ORIG);
          this.setAnyStyle(el, {
            width: '', 'min-height': '', 'max-height': '', height: '',
          });
        },
      },
      [SIZE_25]: {
        name: SIZE_25,
        icon: options.icons.size25,
        apply: (el: HTMLElement) => {
          this.setVariant(el, SIZE_25);
          this.setAnyStyle(el, {
            width: '24%', 'min-height': '', 'max-height': '', height: '',
          });
        },
      },
      [SIZE_30]: {
        name: SIZE_30,
        icon: options.icons.size30,
        apply: (el: HTMLElement) => {
          this.setVariant(el, SIZE_30);
          this.setAnyStyle(el, {
            width: '29%', 'min-height': '', 'max-height': '', height: '',
          });
        },
      },
      [SIZE_40]: {
        name: SIZE_40,
        icon: options.icons.size40,
        apply: (el: HTMLElement) => {
          this.setVariant(el, SIZE_40);
          this.setAnyStyle(el, {
            width: '39%', 'min-height': '', 'max-height': '', height: '',
          });
        },
      },
      [SIZE_50]: {
        name: SIZE_50,
        icon: options.icons.size50,
        apply: (el: HTMLElement) => {
          this.setVariant(el, SIZE_50);
          this.setAnyStyle(el, {
            width: '49%', 'min-height': '', 'max-height': '', height: '',
          });
        },
      },
      [SIZE_60]: {
        name: SIZE_60,
        icon: options.icons.size60,
        apply: (el: HTMLElement) => {
          this.setVariant(el, SIZE_60);
          this.setAnyStyle(el, {
            width: '58%', 'min-height': '', 'max-height': '', height: '',
          });
        },
      },
      [SIZE_70]: {
        name: SIZE_70,
        icon: options.icons.size70,
        apply: (el: HTMLElement) => {
          this.setVariant(el, SIZE_70);
          this.setAnyStyle(el, {
            width: '68%', 'min-height': '', 'max-height': '', height: '',
          });
        },
      },
      [SIZE_80]: {
        name: SIZE_80,
        icon: options.icons.size80,
        apply: (el: HTMLElement) => {
          this.setVariant(el, SIZE_80);
          this.setAnyStyle(el, {
            width: '78%', 'min-height': '', 'max-height': '', height: '',
          });
        },
      },
      [SIZE_90]: {
        name: SIZE_90,
        icon: options.icons.size90,
        apply: (el: HTMLElement) => {
          this.setVariant(el, SIZE_90);
          this.setAnyStyle(el, {
            width: '88%', 'min-height': '', 'max-height': '', height: '',
          });
        },
      },
      [SIZE_100]: {
        name: SIZE_100,
        icon: options.icons.size100,
        apply: (el: HTMLElement) => {
          this.setVariant(el, SIZE_100);
          this.setAnyStyle(el, {
            width: '98%', 'min-height': '', 'max-height': '', height: '',
          });
        },
      },
    };
  }
  getName(): string {
    return NAME;
  }
  getTitle(): string {
    return TITLE;
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
