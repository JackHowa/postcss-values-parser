/*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
import colors from 'color-name';
import isUrl from 'is-url-superb';

import { Node, NodeOptions } from './Node';

const hexRegex = /^#(.+)/;
const colorRegex = /^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
const colorNames = Object.keys(colors);

export interface WordOptions extends NodeOptions {
  variables: { prefixes: string[] };
}

export class Word extends Node {
  readonly isColor: boolean;
  readonly isHex: boolean;
  readonly isUrl: boolean;
  readonly isVariable: boolean;
  private readonly options: WordOptions;

  constructor(options: WordOptions) {
    super(options);

    this.options = options;

    const { node } = options;

    this.type = 'word';

    let value = '';

    switch (node.type) {
      case 'Hash':
        ({ value } = node);
        break;
      case 'Identifier':
        value = node.name;
        break;
      default:
    }

    (this as any).value = value;

    this.isColor = colorRegex.test(value) || colorNames.includes(value.toLowerCase());
    this.isHex = hexRegex.test(value);
    this.isUrl = value.startsWith('//') ? isUrl(`http:${value}`) : isUrl(value);
    this.isVariable = this.testVariable();
  }

  testVariable() {
    if (!this.options.variables) return false;

    const { prefixes } = this.options.variables;
    const varRegex = new RegExp(`^(${prefixes.join('|')})`);

    return varRegex.test(this.value);
  }
}