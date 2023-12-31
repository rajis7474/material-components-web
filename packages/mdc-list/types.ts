/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

export interface MDCListActionEventDetail {
  /**
   * Index of the list item that was activated.
   */
  index: number;
}

export interface MDCListActionEvent extends Event {
  detail: MDCListActionEventDetail;
}


export interface MDCListSelectionChangeDetail {
  /** Indices of the list items for which the selection changed. */
  changedIndices: number[];
}

export interface MDCListSelectionChangeEvent extends Event {
  detail: MDCListSelectionChangeDetail;
}

export type MDCListIndex = number|number[];

/**
 * Type used by the typeahead mechanism to keep track of the index associated
 * with list item text.
 */
export interface MDCListTextAndIndex {
  text: string;
  index: number;
}
