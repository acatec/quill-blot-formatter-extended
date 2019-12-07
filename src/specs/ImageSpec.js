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
    document.addEventListener('drop', this.onDrop);
    document.addEventListener('dragstart', this.onDragStart);
  }

  getTargetElement(): ?HTMLElement {
    return this.img;
  }

  onHide() {
    this.img.style.setProperty('border', '');
    this.img = null;
  }

  onClick = (event: MouseEvent) => {
    const el = event.target;
    if (!(el instanceof HTMLElement) || el.tagName !== 'IMG') {
      return;
    }

    this.img = el; // todo draw border
    this.img.style.setProperty('border', '1px dashed #ccc');
    this.formatter.show(this);
  };

  onDrop = (event: DragEvent) => {
    const childImages = event.srcElement.getElementsByTagName('img');
    console.log('onDrop')
    console.log(childImages)
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < childImages.length; i++) {
      childImages[i].style.setProperty('font-size', '');
    }
    this.formatter.hide(); // todo remove img style fontsize
  };

  onDragStart = (event: DragEvent) => {
    const el = event.srcElement;
    if (!(el instanceof HTMLElement) || el.tagName !== 'IMG') {
      return;
    }
    el.style.setProperty('border', '');
    el.style.setProperty('font-size', '');
    console.log('onDragStart');
    console.log(event.srcElement);
  };
}
