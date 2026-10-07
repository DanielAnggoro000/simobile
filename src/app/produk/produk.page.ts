import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Keranjang } from '../keranjang';
import { AnimationController } from '@ionic/angular';
import { TransactionService } from '../transaksi';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {
  products: any[] = [];
  hasil: any[] = [];
  baris: any[][] = [];
  keyword: string = '';
  tab: string = 'produk'

  constructor(private productservice: Product, private keranjangservice: Keranjang,
    private transaksiservice: TransactionService, private animationCtrl: AnimationController,
    private router: Router) {

  }

  ngOnInit() {
    this.products = this.productservice.products;
    this.cari();
  }

  refresh() {
    this.products = this.productservice.products;
    this.cari();
  }

  ionViewWillEnter() {
    this.cari();
  }

  cari() {
    let kata = (this.keyword || '').toLowerCase().trim();
    this.hasil = [];
    for (let i = 0; i < this.products.length; i++) {
      let nama = (this.products[i].name || '').toLowerCase();
      let kategori = (this.products[i].category || '').toLowerCase();
      if (nama.includes(kata) || kategori.includes(kata)) {
        this.hasil.push(this.products[i]);
      }

    }
    this.baris = this.chunkArray(this.hasil, 2);
  }

  getIndex(product: any) {
    return product.index;
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

  animasiTombol(event: any) {
    this.animationCtrl
      .create()
      .addElement(event.currentTarget)
      .duration(300)
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.3)' },
        { offset: 1, transform: 'scale(1)' }
      ])
      .play();
  }

  keranjangCount(): number {
    return this.keranjangservice.getCount();
  }

  jumlahDiKeranjang(produkIndex: number): number {
    let indexInCart: number = this.keranjangservice.findInCart(produkIndex);
    if (indexInCart == -1)
      return 0;
    return this.keranjangservice.isikeranjang[indexInCart].jumlah;
  }

  // METHOD KERANJANG
  getIsi() {
    return this.keranjangservice.isikeranjang;
  }

  getTotal() {
    return this.keranjangservice.getTotalPrice();
  }

  kosongkan() {
    this.keranjangservice.clearCart();
  }

  konfirmasi() {
    this.transaksiservice.konfirmasiTransaksi();
    this.router.navigate(['/transaksi']);
  }

  getCount(): number {
    return this.keranjangservice.isikeranjang.length;
  }
}