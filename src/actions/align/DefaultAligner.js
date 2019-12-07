// @flow

import {Aligner} from './Aligner';
import type {Alignment} from './Alignment';
import type {AlignOptions} from '../../Options';

const LEFT_ALIGN = 'left';
const CENTER_ALIGN = 'center';
const RIGHT_ALIGN = 'right';
const INLINE = 'inline';
const REMOVE = 'remove';
const SIZE_100 = 'size100';
const SIZE_50 = 'size50';
const SIZE_25 = 'size25';

export default class DefaultAligner implements Aligner {
  alignments: { [string]: Alignment };
  alignAttribute: string;
  applyStyle: boolean;

  constructor(options: AlignOptions) {
    this.applyStyle = options.aligner.applyStyle;
    this.alignAttribute = options.attribute;
    this.alignments = {
      [LEFT_ALIGN]: {
        name: LEFT_ALIGN,
        icon: options.icons.left,
        apply: (el: HTMLElement) => {
          this.setAlignment(el, LEFT_ALIGN);
          this.setAnyStyle(el, {
            'max-height': '',
            float: 'left',
            display: 'inline',
            margin: '0 1em 1em 0',
          });
        },
      },
      [CENTER_ALIGN]: {
        name: CENTER_ALIGN,
        icon: options.icons.center,
        apply: (el: HTMLElement) => {
          this.setAlignment(el, CENTER_ALIGN);
          this.setAnyStyle(el, {
            'max-height': '',
            float: '',
            display: 'block',
            margin: 'auto',
          });
        },
      },
      [RIGHT_ALIGN]: {
        name: RIGHT_ALIGN,
        icon: options.icons.right,
        apply: (el: HTMLElement) => {
          this.setAlignment(el, RIGHT_ALIGN);
          this.setAnyStyle(el, {
            'max-height': '',
            float: 'right',
            display: 'inline',
            margin: '0 0 1em 1em',
          });
        },
      },
      [INLINE]: {
        name: INLINE,
        icon: options.icons.inline,
        apply: (el: HTMLElement) => {
          this.setAlignment(el, INLINE);
          this.setAnyStyle(el, {
            'max-height': '3em',
            float: '',
            display: 'inline',
            margin: '0 .4em 0 .4em',
          });
        },
      },
      [REMOVE]: {
        name: REMOVE,
        icon: options.icons.remove,
        apply: (el: HTMLElement) => {
          this.setAlignment(el, REMOVE);
          this.setAnyStyle(el, {
            'max-height': '',
            float: '',
            display: '',
            margin: '0 .4em 0 .4em',
          });
        },
      },
    };
  }

  getAlignments(): Alignment[] {
    return Object.keys(this.alignments).map(k => this.alignments[k]);
  }

  clear(el: HTMLElement): void {
    el.removeAttribute(this.alignAttribute);
    this.setAnyStyle(el, {
      display: '',
      float: '',
      margin: '',
      'max-height': '',
    });
  }

  isAligned(el: HTMLElement, alignment: Alignment): boolean {
    return el.getAttribute(this.alignAttribute) === alignment.name;
  }

  setAlignment(el: HTMLElement, value: string) {
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
