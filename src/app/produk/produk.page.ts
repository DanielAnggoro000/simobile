import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Keranjang } from '../keranjang';
import { AnimationController } from '@ionic/angular';

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

  constructor(private productservice: Product, private keranjangservice: Keranjang, private animationCtrl: AnimationController) {

  }

  ngOnInit() {
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
      this.baris = this.chunkArray(this.hasil, 2);
    }
  }

  getIndex(product: any) {
    return this.products.indexOf(product);
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
}