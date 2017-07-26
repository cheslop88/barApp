import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Review } from '../models/review';
import 'rxjs/add/operator/map';

@Injectable()
export class ReviewService {

  constructor(private http: Http) { }

  getReviews() {
    return this.http.get('assets/reviews.json')
      .map(response => <Review[]>response.json().reviewsData);
  }
}

