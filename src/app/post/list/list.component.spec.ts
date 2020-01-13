import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { PlaceholderService } from 'src/app/shared/services/placeholder.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { resolve } from 'url';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


class MockService { 
  public getAllPost(): Promise<any> {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve, reject)  => {
      resolve(null);
    });
  }


  public getDetailPost(): Promise<any> {
    return new Promise((resolve, reject)  => {
      resolve(null);
    });
  }

  public getCommentPost(): Promise<any> {
    return new Promise((resolve, reject)  => {
      resolve(null);
    });
  }
}

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule,
        FlexLayoutModule,
        MatIconModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: PlaceholderService,
          useClass: MockService
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
