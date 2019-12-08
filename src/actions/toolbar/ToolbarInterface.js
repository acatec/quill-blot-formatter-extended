// @flow

// import { Aligner } from './Aligner';
import BlotFormatter from '../../BlotFormatter';
// import Action from '../Action';
// import type {GroupInterface} from "./GroupInterface";

export interface ToolbarInterface {
  create(formatter: BlotFormatter): HTMLElement;
  destroy(): void;
  getElement(): ?HTMLElement;
  // addAction(action: Action): void;

  // addButtons(toolbar: HTMLElement, aligner: GroupInterface);
}
