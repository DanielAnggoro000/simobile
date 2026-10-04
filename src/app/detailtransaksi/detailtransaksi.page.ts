import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../transaksi';
import { Product } from '../product';

@Component({
  selector: 'app-detailtransaksi',
  templateUrl: './detailtransaksi.page.html',
  styleUrls: ['./detailtransaksi.page.scss'],
  standalone: false,
})
export class DetailtransaksiPage implements OnInit {
  index = 0
  transaksi: any
  products: any[] = []

  constructor(private route: ActivatedRoute, private transaksiservice: TransactionService,
              private productservice: Product) { }

  ngOnInit() {
    this.products = this.productservice.products
    this.route.params.subscribe(params => {
      this.index = params['index'];
      this.transaksi = this.transaksiservice.getDetailTransaksi(this.index);
    });
  }

  formatTanggal(d: Date): string {
    const arrayOfMonths = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    return d.getDate() + ' ' + arrayOfMonths[d.getMonth()] + ' ' + d.getFullYear();
  }
}