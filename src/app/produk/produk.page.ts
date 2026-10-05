import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Keranjang } from '../keranjang';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {
  products: any[] = [];
  constructor(private productservice: Product, private keranjangservice: Keranjang) {

  }

  ngOnInit() {
    this.products = this.productservice.products;
  }

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  tambahKeranjang(index: number) {
    this.keranjangservice.tambahKeKeranjang(index, 1);
  }
}