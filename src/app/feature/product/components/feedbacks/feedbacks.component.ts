import { Component, OnInit } from '@angular/core';
import { ProductFeedbackService } from '../../service/products-feedback.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {
  feedbacks: string[];

  constructor(public feedbacksService: ProductFeedbackService,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('prodID');
    this.feedbacks = this.feedbacksService.getProductFeedback(id);

  }

}
