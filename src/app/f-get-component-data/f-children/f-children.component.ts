import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-f-children',
  templateUrl: './f-children.component.html',
  styleUrls: ['./f-children.component.scss']
})
export class FChildrenComponent implements OnInit {
  //@Input() varChildren: {name: string, sName:string};
  @Input('varChildren') varC: {name: string, sName:string};

  @ContentChild('nestedBlock', {static: false}) nestedBlock: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.nestedBlock);
  }

}
