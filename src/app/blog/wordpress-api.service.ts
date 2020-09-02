import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { BlogPost } from './blog-post-list/blog-post';

@Injectable({
  providedIn: 'root'
})
export class WordpressApiService {
  readonly ROOT_URL = 'http://constance-wordpress-heroku.herokuapp.com/wp-json/wp/v2';

  constructor(private http: HttpClient) { }

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${this.ROOT_URL}/posts`)
      .pipe(
        catchError(this.handleError<BlogPost[]>(`getBlogPosts`, undefined))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
