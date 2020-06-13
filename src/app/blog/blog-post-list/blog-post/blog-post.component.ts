import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../../../blog-post';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  @Input() blogPost: BlogPost;

  constructor() { }

  ngOnInit(): void { console.log(this.blogPost); }

}
