import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceholderService } from '../../shared/services/placeholder.service';
import { IPost, Post, IComments } from '../../shared/models/post.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public post: IPost = new Post();
  public comments: Array<IComments> = [];
  public lastComment: Date;

  constructor(
    private router: ActivatedRoute,
    private placeholderService: PlaceholderService
  ) { }

  ngOnInit() {
    this.router.params.subscribe((param: any) => {
      this.getDetailPost(param['id']);
    });
  }

  /**
   * emitComments
   */
  public emitComments(e: Date) {
    this.lastComment = e;
  }

  private getDetailPost(id: number) {
    this.placeholderService.getDetailPost(id).then((response: IPost)  =>  {
      this.post = response;
      this.getComments(this.post.id);
    }).catch((error) =>  {
      console.log('error', error);
    });
  }

  private getComments(id: number) {
    this.placeholderService.getCommentPost(id).then((response: Array<IComments>) =>  {
      this.comments = response;
    }).catch((error)  =>  {
      console.log('error', error);
    });
  }

}
