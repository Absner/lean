import { Component, OnInit, ViewChild } from '@angular/core';
import { PlaceholderService } from '../../shared/services/placeholder.service';
import { IPost } from '../../shared/models/post.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public dataSource = new MatTableDataSource([]);
  public displayedColumns: string[] = [
    'id',
    'title',
    'action'
  ];
  @ViewChild(MatSort, { static: false }) set matSort(ms: MatSort) {
    this.dataSource.sort = ms;
  }
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private placeholderService: PlaceholderService) { }

  ngOnInit() {
    this.getPost();
    
  }

  private getPost() {
    this.placeholderService.getAllPost().then((response: Array<IPost>) => {
      console.log('post', response);
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
    }).catch((error: any) =>  {
      console.log('error', error);
    });
  }

}
