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
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    let hourString = d.getHours().toString();
    let minuteString = d.getMinutes().toString();
    let secondString = d.getSeconds().toString();
    if (hourString.length < 2)
      hourString = "0" + hourString;
    if (minuteString.length < 2)
      minuteString = "0" + minuteString;
    if (secondString.length < 2)
      secondString = "0" + secondString;
    return d.getDate() + ' ' + arrayOfMonths[d.getMonth()] + ' ' + d.getFullYear() + " " + hourString + ":" + minuteString + ":" + secondString;
  }

  refresh() {
    this.history = this.transaksiservice.history;
  }
}