import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderFormComponent } from '../order/components/order-form/order-form.component';
@NgModule({
    imports: [CommonModule, FormsModule, SharedModule],
    declarations: [OrderFormComponent],
    providers: [],
    exports: [OrderFormComponent]
})
export class OrderModule { }
