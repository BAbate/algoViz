import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAssesmentComponent } from './post-assesment.component';

describe('PostAssesmentComponent', () => {
  let component: PostAssesmentComponent;
  let fixture: ComponentFixture<PostAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAssesmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
