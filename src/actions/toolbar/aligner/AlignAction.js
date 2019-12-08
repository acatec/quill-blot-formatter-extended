// @flow

import Action from '../../Action';
import BlotFormatter from '../../../BlotFormatter';
import DefaultAligner from './DefaultAligner';
import { Aligner } from './../GroupInterface';
import { Toolbar } from '../ToolbarInterface';
import type { ToolbarInterface } from '../ToolbarInterface';
// import DefaultToolbar from './DefaultToolbar';

export default class AlignAction extends Action {
  toolbar: Toolbar;
  aligner: Aligner;

  constructor(formatter: BlotFormatter, toolbar: ToolbarInterface) {
    super(formatter);
    this.aligner = new DefaultAligner(formatter.options.align);
    this.toolbar = toolbar;
    // this.addButtons(formatter, toolbar, aligner);

    // this.toolbar = new DefaultToolbar();
  }

  onCreate() {
    // const toolbar = this.toolbar.create(this.formatter, this.aligner);
    // this.formatter.overlay.appendChild(toolbar);
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
