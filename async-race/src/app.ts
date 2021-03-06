import './app.css';
import { Header } from './components/header';
import { Garage } from './pages/garage/garage';
import { Winners } from './pages/winners/winners';
import { BasePage } from './shared/base-page';

export class App {
  private garagePage = new Garage();

  private winnersPage = new Winners();

  constructor(private rootElement: HTMLElement) {
    const header: Header = new Header(rootElement);
    rootElement.append(this.garagePage.node);
    header.garageButton.node.addEventListener('click', () =>
      this.changePage(this.garagePage),
    );
    header.winnersButton.node.addEventListener('click', () => {
      this.changePage(this.winnersPage);
      this.winnersPage.refreshTotalCount();
      this.winnersPage.refreshPage();
    });
  }

  changePage(page: BasePage): void {
    this.rootElement.lastElementChild?.remove();
    this.rootElement.append(page.node);
  }
}
