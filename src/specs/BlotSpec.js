// @flow

import BlotFormatter from '../BlotFormatter';
import Action from '../actions/Action';
import AlignAction from '../actions/toolbar/aligner/AlignAction';
// import ResizeAction from '../actions/ResizeAction';
import DeleteAction from '../actions/DeleteAction';
import ResizeAction from '../actions/toolbar/resizer/ResizeAction';

export default class BlotSpec {
  formatter: BlotFormatter;

  constructor(formatter: BlotFormatter) {
    this.formatter = formatter;
  }

  init(): void {}

  getActions(): Class<Action>[] {
    return [AlignAction, DeleteAction, ResizeAction];
    // return [AlignAction, ResizeAction, DeleteAction];
  }

  getTargetElement(): ?HTMLElement {
    return null;
  }

  getOverlayElement(): ?HTMLElement {
    return this.getTargetElement();
  }

  setSelection(): void {
    this.formatter.quill.setSelection(null);
  }

  onHide() {}
}
