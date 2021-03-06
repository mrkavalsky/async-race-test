import { BaseButton } from '../base-button/base-button';
import { BaseComponent } from '../base-component';

export class BasePageWrapper extends BaseComponent {
  private pageNumberTitle: BaseComponent = new BaseComponent(
    this.node,
    'h3',
    '',
    'Page #1',
  );

  public readonly prevPage: BaseButton = new BaseButton(this.node, 'prev');

  public readonly nextPage: BaseButton = new BaseButton(this.node, 'next');

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'page-wrapper');
  }

  setPageNumberTitle(pageNumber: number): void {
    this.pageNumberTitle.node.innerText = `Page #${pageNumber}`;
  }

  toggleNavButtonsMode(isEnable = true): void {
    this.prevPage.toggleButtonMode(isEnable);
    this.nextPage.toggleButtonMode(isEnable);
  }
}
