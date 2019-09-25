import { Size } from './Size.enum';

export interface IProduct {
     id:number,
     name: string;
     description: string;
     price: number;
     category: Size;
     count: number
}
