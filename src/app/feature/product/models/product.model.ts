import { Size } from './Size.enum';
import { IProduct } from './product.interface';

export class ProductModel implements IProduct{
   /* name: string;
    description: string;
    price: number;
    category?: Size;
    isAvailable?: boolean;    */
    
      constructor(   
        public name: string ,
        public description: string ,
        public  price: number,
        public  category: Size = Size.unknown,
        public isAvailable: boolean = false ){            
      
        }
}