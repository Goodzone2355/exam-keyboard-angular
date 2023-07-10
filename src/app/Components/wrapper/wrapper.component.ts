import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
})
export class WrapperComponent {
  @Input() stroke: any;
  @Input() green: any;
  @Input() red: any;
}
