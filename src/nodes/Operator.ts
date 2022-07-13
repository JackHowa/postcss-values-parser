/*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
import { Operator as OperatorNode } from 'css-tree';

import { Node, NodeOptions } from './Node';

export class Operator extends Node {
  constructor(options: NodeOptions) {
    super(options);
    this.type = 'operator';
    (this as any).value = (options.node as OperatorNode).value;
  }
}