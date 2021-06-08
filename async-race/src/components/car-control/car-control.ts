import { BaseButton } from '../../shared/base-button/base-button';
import { BaseComponent } from '../../shared/base-component';
import { ColorInput } from '../color-input/color-input';
import { TextInput } from '../text-input/text-input';
import './car-control.css';

export class CarControl extends BaseComponent {
  private textInput: TextInput = new TextInput(this.node);

  private colorInput: ColorInput = new ColorInput(this.node);

  public readonly submitButton: BaseButton;

  constructor(parentNode: HTMLElement, type: string) {
    super(parentNode, 'div', 'car-control');
    this.submitButton = new BaseButton(this.node, type);
  }
}