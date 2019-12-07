// @flow

import BlotSpec from './BlotSpec';
import BlotFormatter from '../BlotFormatter';

export default class ImageSpec extends BlotSpec {
  img: ?HTMLElement;

  constructor(formatter: BlotFormatter) {
    super(formatter);
    this.img = null;
  }

  init() {
    this.formatter.quill.root.addEventListener('click', this.onClick);
    document.addEventListener('drop', this.onDrop());
  }

  getTargetElement(): ?HTMLElement {
    return this.img;
  }

  onHide() {
    this.img = null;
  }

  onClick = (event: MouseEvent) => {
    const el = event.target;
    if (!(el instanceof HTMLElement) || el.tagName !== 'IMG') {
      return;
    }

    this.img = el;
    this.formatter.show(this);
  };

  onDrop = () => {
    this.formatter.hide();
  };
}
