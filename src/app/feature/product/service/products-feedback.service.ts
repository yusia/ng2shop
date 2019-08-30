
import { Injectable } from '@angular/core';
import { ProductFeedbackModel } from '../models';

const feedbacksList = [
    new ProductFeedbackModel(0, ['A435315merican Shorthair Cat', "I6 think it is a really good caT"]),
    new ProductFeedbackModel(1, ['American S453415horthair Cat', "Way effect"]),
    new ProductFeedbackModel(2, ['Americ23531an Shorthair Cat', "Not bad, possible better"]),
    new ProductFeedbackModel(3, ['234American Shorthair Cat', "NORM"])
];

@Injectable()
export class ProductFeedbackService {
    private feedbacks;
    constructor() {
    }

    getProductFeedback(prodId: number): string[] {
        return feedbacksList.filter(feedback => feedback.id === prodId)[0].feedbacks;
    }
}
