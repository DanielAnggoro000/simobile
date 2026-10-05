import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
    providedIn: 'root'
}
export class Keranjang {


    constructor(private productservice: Product) { }
    isikeranjang: any[] = [];

    tambahKeKeranjang(indexProduk: number, jumlah: number = 1) {
        let ketemu = false;
        for (let i = 0; i < this.isikeranjang.length; i++) {
            if (this.isikeranjang[i].indexProduk == indexProduk) {
                this.isikeranjang[i].jumlah += jumlah;
                ketemu = true;
                break;
            }
        }
        // cek hasil ketemu kalok misal ga nemu ya berarti blom pernah ada jadi dipush
        if (ketemu === false) {
            this.isikeranjang.push({ indexProduk: indexProduk, jumlah: jumlah });
        }
    }
    // ngitung total transaksi
    getTotalPrice() {
        let total = 0;
        for (let i = 0; i < this.isikeranjang.length; i++) {
            let item = this.isikeranjang[i];
            let produk = this.productservice.products[item.indexProduk];
            total += produk.sellPrice * item.jumlah;
        }
        return total;
    }
    // reset cartnya supaya kosong
    clearCart() {
        this.isikeranjang = [];
    }
}