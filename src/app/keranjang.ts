import { Service } from '@angular/core';
import { Product } from './product';

@Service()
export class Keranjang {


    constructor(private productservice: Product) { }
    products: any[] = this.productservice.products;
    isikeranjang: { indexProduk: number, jumlah: number }[] = [];

    tambahKeKeranjang(p_indexProduk: number, p_jumlah: number) {
        this.isikeranjang.push(
            {
                indexProduk: p_indexProduk,
                jumlah: p_jumlah
            }
        )
    }
}
