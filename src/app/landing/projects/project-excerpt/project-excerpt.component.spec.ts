import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectExcerptComponent } from './project-excerpt.component';

describe('ProjectExcerptComponent', () => {
  let component: ProjectExcerptComponent;
  let fixture: ComponentFixture<ProjectExcerptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectExcerptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectExcerptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
