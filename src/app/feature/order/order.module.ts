import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderFormComponent } from '../order/components/order-form/order-form.component';
import { OrderService } from './services/order.service';
import { CoreModule } from 'src/app/core/core.module';
@NgModule({
    imports: [CommonModule, FormsModule, SharedModule, CoreModule],
    declarations: [OrderFormComponent],
    providers: [OrderService],
    exports: [OrderFormComponent]
})
export class OrderModule { }
