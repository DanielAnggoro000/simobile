import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Keranjang } from '../keranjang';
import { Product } from '../product';
import { TransactionService } from '../transaksi';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false,
})
export class KeranjangPage implements OnInit {
  products: any[] = [];
  items: any[] = [];
  constructor(private keranjangservice: Keranjang, private productservice: Product, private transaksiservice: TransactionService, private router: Router) { }

  ngOnInit() {
    this.products = this.productservice.products;
  }

  ionViewWillEnter() {
    this.items = this.keranjangservice.isikeranjang;
  }

  getIsi() {
    return this.keranjangservice.isikeranjang;
  }

  getTotal() {
    return this.keranjangservice.getTotalPrice();
  }

  kosongkan() {
    this.keranjangservice.clearCart();
    this.items = [];
  }

  konfirmasi() {
    this.transaksiservice.konfirmasiTransaksi();
    this.router.navigate(['/transaksi']);
  }

  getCount(): number {
    return this.items.length;
  }
}