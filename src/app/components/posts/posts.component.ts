import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnChanges {

  @Input() posts : Array<any> = [];
  @Output() sendPostData = new EventEmitter();

  ngOnChanges() {
    console.log('Child component data: ', this.posts)
  }

  send(post: any) {
    this.sendPostData.emit(post)
  }

}
