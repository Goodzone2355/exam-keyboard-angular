import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
})
export class KeyboardComponent {
  @Input() str: any;

  buttons: Array<String> = [
    'й',
    'ц',
    'у',
    'к',
    'е',
    'ё',
    'н',
    'г',
    'ш',
    'щ',
    'з',
    'х',
    'ъ',
    'ф',
    'ы',
    'в',
    'а',
    'п',
    'р',
    'о',
    'л',
    'д',
    'ж',
    'э',
    'я',
    'ч',
    'с',
    'м',
    'и',
    'т',
    'ь',
    'б',
    'ю',
    ' ',
  ];
  stroke: String = '';
  green: any = false;
  red: any = false;
  updateDisplay = (event: any): void => {
    if (
      this.str.toLowerCase().includes(event.target.value) &&
      this.str.toLowerCase() !== this.stroke &&
      this.red !== true
    ) {
      this.stroke += event.target.value;
      this.red = false;
      console.log(this.stroke);
    }

    if (
      this.str.toLowerCase().includes(event.target.value) === false &&
      this.str.toLowerCase() !== this.stroke
    ) {
      this.red = true;
    }

    if (this.str.toLowerCase() === this.stroke) {
      this.green = true;
      console.log(this.green);
    }
  };

  clear = (): void => {
    if (this.stroke !== '' && this.red === false) {
      this.stroke = this.stroke.slice(0, -1);
      this.green = false;
    } else {
      this.red = false;
    }
  };
}
