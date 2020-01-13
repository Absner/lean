import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceholderService } from '../../shared/services/placeholder.service';
import { IPost, Post } from '../../shared/models/post.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public post: IPost = new Post();

  constructor(
    private router: ActivatedRoute,
    private placeholderService: PlaceholderService
  ) { }

  ngOnInit() {
    this.router.params.subscribe((param: any) => {
      console.log('id route', param['id']);
      this.getDetailPost(param['id']);
    });
  }

  private getDetailPost(id: number) {
    this.placeholderService.getDetailPost(id).then((response: IPost)  =>  {
      console.log('response detail', response);
      this.post = response;
    }).catch((error) =>  {
      console.log('error', error);
    });
  }

}
