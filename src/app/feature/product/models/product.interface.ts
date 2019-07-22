import { Size } from './Size.enum';

export interface IProduct {
     name: string;
     description: string;
     price: number;
     category?: Size;
}