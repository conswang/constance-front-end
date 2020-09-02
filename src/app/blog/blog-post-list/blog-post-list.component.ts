import { Component, OnInit } from '@angular/core';
import { BlogPost } from './blog-post';
import { WordpressApiService } from '../wordpress-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.scss']
})
export class BlogPostListComponent implements OnInit {
  blogPosts$: Observable<BlogPost[]>;

  constructor(private wordpressApiService: WordpressApiService) { }

  ngOnInit(): void {
    this.blogPosts$ = this.wordpressApiService.getBlogPosts();
    this.blogPosts$.subscribe(ans => console.log(ans));
  }

}
