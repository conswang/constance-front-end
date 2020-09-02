import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';

import { LandingComponent } from './landing.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectExcerptComponent } from './projects/project-excerpt/project-excerpt.component';

@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ProjectExcerptComponent,
  ],
  imports: [
    CommonModule,
    InlineSVGModule.forRoot(),
  ]
})
export class LandingModule { }
