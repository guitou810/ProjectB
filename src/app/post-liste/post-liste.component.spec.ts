import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListeComponent } from './post-liste.component';

describe('PostListeComponent', () => {
  let component: PostListeComponent;
  let fixture: ComponentFixture<PostListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
