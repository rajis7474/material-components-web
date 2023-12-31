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


import {SortValue} from './constants';
import {MDCDataTableRowSelectionChangedEventDetail, ProgressIndicatorStyles, RowClickEventData, SortActionEventDetail} from './types';

/**
 * Defines the shape of the adapter expected by the foundation.
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 */
export interface MDCDataTableAdapter {
  /**
   * Adds CSS class name to root element.
   *
   * @param className CSS class name to add to root element.
   */
  addClass(className: string): void;

  /**
   * Removes CSS class name from root element.
   *
   * @param className CSS class name to add to root element.
   */
  removeClass(className: string): void;

  /**
   * Adds a class name to row element at given row index excluding header row.
   *
   * @param rowIndex Index of row element excluding header row.
   * @param cssClasses CSS Class string to add.
   */
  addClassAtRowIndex(rowIndex: number, cssClasses: string): void;

  /**
   * @return Row count excluding header row.
   */
  getRowCount(): number;

  /**
   * @return Array of row elements excluding header row.
   */
  getRowElements(): HTMLElement[];

  /**
   * Returns row id of row element at given row index based on `data-row-id`
   * attribute on row element `tr`.
   *
   * @param rowIndex Index of row element.
   * @return Row id of row element, returns `null` in absence of `data-row-id`
   *     attribute on row element.
   */
  getRowIdAtIndex(rowIndex: number): string|null;

  /**
   * Returns index of row element that contains give child element. Returns -1
   * if element is not child of any row element.
   *
   * @param el Child element of row element.
   * @return Index of row element.
   */
  getRowIndexByChildElement(el: Element): number;

  /**
   * @return Selected row count.
   */
  getSelectedRowCount(): number;

  /**
   * @param rowIndex Index of row element.
   * @return True if row checkbox at given row index is checked.
   */
  isCheckboxAtRowIndexChecked(rowIndex: number): boolean;

  /**
   * @return True if header row checkbox is checked.
   */
  isHeaderRowCheckboxChecked(): boolean;

  /**
   * @return True if table rows are selectable.
   */
  isRowsSelectable(): boolean;

  /**
   * Notifies when row selection is changed.
   *
   * @param data Event detail data for row selection changed event.
   */
  notifyRowSelectionChanged(data: MDCDataTableRowSelectionChangedEventDetail):
      void;

  /**
   * Notifies when header row is checked.
   */
  notifySelectedAll(): void;

  /**
   * Notifies when header row is unchecked.
   */
  notifyUnselectedAll(): void;

  /**
   * Notifies when data row is clicked.
   */
  notifyRowClick(detail: RowClickEventData): void;

  /**
   * Initializes header row checkbox. Destroys previous header row checkbox
   * instance if any.
   * @return Can return Promise only if registering checkbox is asynchronous.
   */
  registerHeaderRowCheckbox(): Promise<void>|void;

  /**
   * Initializes all row checkboxes. Destroys previous row checkbox instances if
   * any. This is usually called when row checkboxes are added or removed from
   * table.
   * @return Can return Promise only if registering checkbox is asynchronous.
   */
  registerRowCheckboxes(): Promise<void>|void;

  /**
   * Removes class name from row element at give row index.
   *
   * @param rowIndex Index of row element excluding header row element.
   * @param cssClasses Class name string.
   */
  removeClassAtRowIndex(rowIndex: number, cssClasses: string): void;

  /**
   * Sets attribute to row element at given row index.
   *
   * @param rowIndex Index of row element excluding header row element.
   * @param attr Name of attribute.
   * @param value Value of attribute.
   */
  setAttributeAtRowIndex(rowIndex: number, attr: string, value: string): void;

  /**
   * Sets header row checkbox checked or unchecked.
   *
   * @param checked True to set header row checkbox checked.
   */
  setHeaderRowCheckboxChecked(checked: boolean): void;

  /**
   * Sets header row checkbox to indeterminate.
   *
   * @param indeterminate True to set header row checkbox indeterminate.
   */
  setHeaderRowCheckboxIndeterminate(indeterminate: boolean): void;

  /**
   * Sets row checkbox to checked or unchecked at given row index.
   *
   * @param rowIndex Index of row element excluding header row element.
   * @param checked True to set checked.
   */
  setRowCheckboxCheckedAtIndex(rowIndex: number, checked: boolean): void;

  /**
   * @return Total count of header cells.
   */
  getHeaderCellCount(): number;

  /**
   * @return Array of header cell elements.
   */
  getHeaderCellElements(): HTMLElement[];

  /**
   * @return Attribute value for given header cell index.
   */
  getAttributeByHeaderCellIndex(columnIndex: number, attribute: string): string
      |null;

  /**
   * Sets attribute of a header cell by index.
   */
  setAttributeByHeaderCellIndex(
      columnIndex: number, attribute: string, value: string): void;

  /**
   * Sets class name of a header cell by index.
   */
  setClassNameByHeaderCellIndex(columnIndex: number, className: string): void;

  /**
   * Removes a class name of a header cell by index.
   */
  removeClassNameByHeaderCellIndex(columnIndex: number, className: string):
      void;

  /**
   * Notifies when column is sorted.
   */
  notifySortAction(data: SortActionEventDetail): void;

  /**
   * @return Returns computed styles height of table container element.
   */
  getTableContainerHeight(): number;

  /**
   * @return Returns computed styles height of table's header element.
   */
  getTableHeaderHeight(): number;

  /**
   * Sets progress indicator CSS styles to position it on top of table body.
   */
  setProgressIndicatorStyles(styles: ProgressIndicatorStyles): void;

  /**
   * Sets appropriate sort status label by header cell index. Skips setting sort
   * status label if header cell is not sortable.
   *
   * Example status label to set for sortValue:
   *
   *   - `SortValue.ASCENDING`: 'Sorted in ascending order'
   *   - `SortValue.DESCENDING`: 'Sorted in descending order'
   *   - `SortValue.NONE`: '' (Empty string)
   */
  setSortStatusLabelByHeaderCellIndex(
      columnIndex: number, sortValue: SortValue): void;
}
