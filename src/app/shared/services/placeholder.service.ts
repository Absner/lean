import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  constructor(private http: HttpClient) { }

  /**
   * getAllPost
   */
  public getAllPost(): Promise<any> {
    return this.http.get<any[]>(environment.api_url + '/posts').toPromise();
  }

  /**
   * getDetailPost
   * @param idPost identificador unico del post a consultar
   */
  public getDetailPost(idPost: number): Promise<any> {
    return this.http.get<any[]>(environment.api_url + '/posts/' + idPost).toPromise();
  }

  /**
   * getCommentPost
   */
  public getCommentPost(idPost: number): Promise<any> {
    return this.http.get<any[]>(environment.api_url + '/comments?postId=' + idPost).toPromise();
  }

}
