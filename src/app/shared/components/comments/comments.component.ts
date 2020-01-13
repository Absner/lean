import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() comments: Array<any> = []; 
  @Output()  dateNow = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * submit
   */
  public submit() {
    this.dateNow.emit(new Date());
  }

}
