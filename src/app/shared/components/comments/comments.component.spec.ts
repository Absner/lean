import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsComponent } from './comments.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommentsComponent],
      imports: [
        MatCardModule,
        MatButtonModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.comments = [
      {
        id: 1,
        postId: 1,
        name: 'absner',
        email: 'asada',
        body: 'bodadadas'
      }
    ]
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
