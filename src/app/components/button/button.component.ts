import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() color: string = 'blue';
  @Output() btnClick = new EventEmitter();

  onAdd() {
    this.btnClick.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
