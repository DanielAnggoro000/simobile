import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { Keranjang } from '../keranjang';

@Component({
  selector: 'app-detailproduk',
  templateUrl: './detailproduk.page.html',
  styleUrls: ['./detailproduk.page.scss'],
  standalone: false,
})
export class DetailprodukPage implements OnInit {
  index = 0
  products: any[] = []

  constructor(private route: ActivatedRoute, private productservice: Product,private keranjangservice: Keranjang) { }

  ngOnInit() {
    this.products = this.productservice.products
    this.route.params.subscribe(params => {
      this.index = params['index'];
    });
  }

  tambahKeranjang() {
    this.keranjangservice.tambahKeKeranjang(this.index, 1);
  }
}