import { Compra } from '../modelo/compra';
export class Pedido {

    constructor(public pedido: Compra[],
                public data: string){
                }
}
