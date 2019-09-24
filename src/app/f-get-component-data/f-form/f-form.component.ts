import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-f-form',
  templateUrl: './f-form.component.html',
  styleUrls: ['./f-form.component.scss']
})
export class FFormComponent implements OnInit {
  nameUser: string = 'Billy';
  sNameUser: string = 'Bons';

  //@Output() onAddUser = new EventEmitter<{name: string; sName: string}>();
  @Output('onAddUser') onEmitter = new EventEmitter<{name: string; sName: string}>();

  @ViewChild('linkChildInput', {static: false}) linkChildInput;

  constructor() { }

  ngOnInit() {
  }


  add() {
    //this.onAddUser.emit({
    this.onEmitter.emit({
      name: this.nameUser,
      sName: this.sNameUser
    });
    this.nameUser = '';
    this.sNameUser = '';
  }

  addInput(linkInput: HTMLInputElement) {
    console.log(linkInput.value);
    this.onEmitter.emit({
      name: linkInput.value,
      sName: this.linkChildInput.nativeElement.value
    });
    linkInput.value = '';
    this.linkChildInput.nativeElement.value = '';

  }

}
