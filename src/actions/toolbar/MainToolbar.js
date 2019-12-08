// @flow

import { GroupInterface } from './GroupInterface';
import type { VariantInterface } from './VariantInterface';
import BlotFormatter from '../../BlotFormatter';
import type { ToolbarInterface } from './ToolbarInterface';
import Action from "../Action";

export default class MainToolbar implements ToolbarInterface {
  formatter: ?BlotFormatter;
  toolbar: ?HTMLElement;
  buttons: HTMLElement[];

  constructor() {
    this.toolbar = null;
    this.buttons = [];
  }

  // addAction(action: Action): void { // todo не надо
  //   // action.
  // }

  create(formatter: BlotFormatter): HTMLElement {
    this.formatter = formatter;
    const toolbar = document.createElement('div');
    toolbar.classList.add(formatter.options.align.toolbar.mainClassName);
    this.addToolbarStyle(formatter, toolbar);
    const actions = formatter.getActions()

    actions.map((action: Action) => {
      this.addButtons(toolbar, action.getGroup());
      return true;
    });
    // this.addButtons(formatter, toolbar, aligner);

    this.toolbar = toolbar;

    return this.toolbar;
  }

  destroy() {
    this.toolbar = null;
    this.buttons = [];
  }

  getElement() {
    return this.toolbar;
  }

  addToolbarStyle(formatter: BlotFormatter, toolbar: HTMLElement) {
    if (formatter.options.align.toolbar.mainStyle) {
      Object.assign(toolbar.style, formatter.options.align.toolbar.mainStyle);
    }
  }

  addButtonStyle(button: HTMLElement, index: number, formatter: BlotFormatter) {
    if (formatter.options.align.toolbar.buttonStyle) {
      Object.assign(button.style, formatter.options.align.toolbar.buttonStyle);
      if (index > 0) {
        button.style.borderLeftWidth = '0'; // eslint-disable-line no-param-reassign
      }
    }

    if (formatter.options.align.toolbar.svgStyle) {
      Object.assign(button.children[0].style, formatter.options.align.toolbar.svgStyle);
    }
  }

  addButtons(toolbar: HTMLElement, aligner: GroupInterface) {
    aligner.getVariants().forEach((alignment, i) => {
      const button = document.createElement('span');
      button.classList.add(this.formatter.options.align.toolbar.buttonClassName);
      button.innerHTML = alignment.icon;
      button.addEventListener('click', () => {
        this.onButtonClick(button, this.formatter, alignment, aligner);
      });
      this.preselectButton(button, alignment, this.formatter, aligner);
      this.addButtonStyle(button, i, this.formatter);
      this.buttons.push(button);
      this.toolbar.appendChild(button);
    });
  }

  preselectButton(
    button: HTMLElement,
    alignment: VariantInterface,
    formatter: BlotFormatter,
    aligner: GroupInterface,
  ) {
    if (!formatter.currentSpec) {
      return;
    }

    const target = formatter.currentSpec.getTargetElement();
    if (!target) {
      return;
    }

    if (aligner.isApplied(target, alignment)) {
      this.selectButton(formatter, button);
    }
  }

  onButtonClick(
    button: HTMLElement,
    formatter: BlotFormatter,
    alignment: VariantInterface,
    aligner: GroupInterface,
  ) {
    if (!formatter.currentSpec) {
      return;
    }

    const target = formatter.currentSpec.getTargetElement();
    if (!target) {
      return;
    }

    this.clickButton(button, target, formatter, alignment, aligner);
  }

  clickButton(
    button: HTMLElement,
    alignTarget: HTMLElement,
    formatter: BlotFormatter,
    alignment: VariantInterface,
    aligner: GroupInterface,
  ) {
    this.buttons.forEach((b) => { this.deselectButton(formatter, b); });
    if (aligner.isApplied(alignTarget, alignment)) {
      if (formatter.options.align.toolbar.allowDeselect) {
        aligner.clear(alignTarget);
      } else {
        this.selectButton(formatter, button);
      }
    } else {
      this.selectButton(formatter, button);
      alignment.apply(alignTarget);
    }

    formatter.update();
  }

  selectButton(formatter: BlotFormatter, button: HTMLElement) {
    button.classList.add('is-selected');
    if (formatter.options.align.toolbar.addButtonSelectStyle) {
      button.style.setProperty('filter', 'invert(20%)');
    }
  }

  deselectButton(formatter: BlotFormatter, button: HTMLElement) {
    button.classList.remove('is-selected');
    if (formatter.options.align.toolbar.addButtonSelectStyle) {
      button.style.removeProperty('filter');
    }
  }
}
