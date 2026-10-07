import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Product } from '../product';
import { TransactionService } from '../transaksi';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {

  jumlahProduk: number = 0;
  jumlahTransaksiHariIni: number = 0;
  totalTransaksiHariIni: number = 0;
  produkTerlaris: string = '-';
  qtyTerlaris: number = 0;

  constructor(private productservice: Product, private transaksiservice: TransactionService, private animationCtrl: AnimationController) { }

  ngOnInit() {
    this.hitungRingkasan();
  }

  refresh() {
    this.hitungRingkasan();
  }
  
  // dipanggil tiap halaman dashboard dibuka lagi supaya angkanya selalu update
  ionViewWillEnter() {
    this.hitungRingkasan();
  }
  ionViewDidEnter() {
    this.animationKartu();
  }

  hitungRingkasan() {
    this.jumlahProduk = this.productservice.getJumlahProduk();
    this.jumlahTransaksiHariIni = this.transaksiservice.getJumlahTransaksiHariIni();
    this.totalTransaksiHariIni = this.transaksiservice.getTotalTransaksiHariIni();

    let terlaris = this.transaksiservice.getProdukTerlaris();
    this.produkTerlaris = terlaris.nama;
    this.qtyTerlaris = terlaris.jumlah;
  }

  animationKartu() {
    this.animationCtrl
      .create()
      .addElement(document.querySelectorAll('.kartu-dashboard'))
      .duration(700)
      .easing('ease-out')
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateY(40px)', 'translateY(0)')
      .play();
  }
}
