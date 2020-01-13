import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommentsModule } from 'src/app/shared/components/comments/comments.module';
import { PlaceholderService } from 'src/app/shared/services/placeholder.service';
import { RouterTestingModule } from '@angular/router/testing';

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

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailComponent],
      imports: [
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        CommentsModule,
        RouterTestingModule
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
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.comments = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
