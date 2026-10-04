import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaksi';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {
  history: any[] = [];

  constructor(private transaksiservice: TransactionService) { }

  ngOnInit() {
    this.history = this.transaksiservice.history;
  }

  formatTanggal(d: Date): string {
    const arrayOfMonths = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    return d.getDate() + ' ' + arrayOfMonths[d.getMonth()] + ' ' + d.getFullYear();
  }
}


