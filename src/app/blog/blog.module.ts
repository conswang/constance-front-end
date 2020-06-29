import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogPostComponent } from './blog-post-list/blog-post/blog-post.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { ConvertDatePipe } from './convert-date.pipe';

@NgModule({
  declarations: [
    BlogComponent,
    BlogPostComponent,
    BlogPostListComponent,
    ConvertDatePipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BlogComponent,
    BlogPostComponent,
    BlogPostListComponent,
  ]
})
export class BlogModule { }
