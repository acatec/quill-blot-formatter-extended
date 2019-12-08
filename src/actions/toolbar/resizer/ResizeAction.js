// @flow

import Action from '../../Action';
import BlotFormatter from '../../../BlotFormatter';
import Resizer from './Resizer';
// import { GroupInterface } from './../GroupInterface';
import { Toolbar } from '../ToolbarInterface';
import type { ToolbarInterface } from '../ToolbarInterface';
// import DefaultToolbar from './DefaultToolbar';

export default class ResizeAction extends Action {
  toolbar: Toolbar;

  constructor(formatter: BlotFormatter, toolbar: ToolbarInterface) {
    super(formatter);
    this.group = new Resizer(formatter.options.align);
    this.toolbar = toolbar;

    // this.addButtons(formatter, toolbar, aligner); // можно и тут
  }

  onCreate() {
  }

  onDestroy() {
    const toolbar = this.toolbar.getElement();
    if (!toolbar) {
      return;
    }

    this.formatter.overlay.removeChild(toolbar);
    this.toolbar.destroy();
  }


  isOnToolbar(): boolean {
    return true;
  }
}
