import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-a-children',
  templateUrl: './a-children.component.html',
  styleUrls: ['./a-children.component.scss']
})
export class AChildrenComponent implements OnInit {

  @Input() varChildren: {name: string, sName:string};
  //@Input('varChildren') varC: {name: string, sName:string};

  constructor() { }

  ngOnInit() {
  }

}
