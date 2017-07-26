import { Component, OnInit } from '@angular/core';
import { Review } from '../../models/review';
import { ReviewService } from '../../services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[];
  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService.getReviews().subscribe(reviewsData => this.reviews = reviewsData);
  }
}
