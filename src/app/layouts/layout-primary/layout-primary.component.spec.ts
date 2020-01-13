import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPrimaryComponent } from './layout-primary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LayoutPrimaryComponent', () => {
  let component: LayoutPrimaryComponent;
  let fixture: ComponentFixture<LayoutPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPrimaryComponent ],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
