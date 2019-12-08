// @flow

import BlotFormatter from '../BlotFormatter';
import type { GroupInterface } from './toolbar/GroupInterface';

export default class Action {
  formatter: BlotFormatter;
  group: GroupInterface;

  constructor(formatter: BlotFormatter) {
    this.formatter = formatter;
  }

  getGroup(): GroupInterface {
    return this.group;
  }

  isOnToolbar(): boolean {}

  onCreate() {}

  onDestroy() {}

  onUpdate() {}
}
