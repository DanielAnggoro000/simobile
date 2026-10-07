import { Injectable } from '@angular/core';
import { Product } from './product';
import { Keranjang } from './keranjang';

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    history: any[] = [];

    constructor(
        private productService: Product,
        private keranjangService: Keranjang
    ) { }

    konfirmasiTransaksi() {
        let isiKeranjang = this.keranjangService.isikeranjang;
        let totalBayar = this.keranjangService.getTotalPrice();

        // ngurangin stock
        // for (let i = 0; i < isiKeranjang.length; i++) {
        //     let item = isiKeranjang[i];
        //     this.productService.updateStock(-item.jumlah, item.indexProduk);
        // }
        let sakinanKeranjang = [];
        for (let i = 0; i < isiKeranjang.length; i++) {
            sakinanKeranjang.push({
                indexProduk: isiKeranjang[i].indexProduk,
                jumlah: isiKeranjang[i].jumlah
            });
        }
        // 3. Simpan ke riwayat transaksi pakai hasil salinan manual
        this.history.push({
            id: 'PX-' + Date.now(),
            tanggal: new Date(),
            totalPrice: totalBayar,
            items: sakinanKeranjang
        });

        // 4. Kosongkan keranjang
        this.keranjangService.clearCart();
    }
    getDetailTransaksi(index: number) {
        return this.history[index];
    }

    // ===== dashboard =====
    getTransaksiHariIni() {
        let hariIni = new Date().toDateString();
        let hasil = [];
        for (let i = 0; i < this.history.length; i++) {
            if (new Date(this.history[i].tanggal).toDateString() === hariIni) {
                hasil.push(this.history[i]);
            }
        }
        return hasil;
    }
    // banyaknya transaksi hari ini
    getJumlahTransaksiHariIni() {
        return this.getTransaksiHariIni().length;
    }

    // total uang (Rp) dari transaksi hari ini
    getTotalTransaksiHariIni() {
        let transaksi = this.getTransaksiHariIni();
        let total = 0;
        for (let i = 0; i < transaksi.length; i++) {
            total += transaksi[i].totalPrice;
        }
        return total;
    }

    // produk terlaris untuk mendapat total qty terjual paling banyak
    getProdukTerlaris() {
        let terjual: number[] = [];
        for (let i = 0; i < this.productService.products.length; i++) {
            terjual.push(0);
        }

        for (let i = 0; i < this.history.length; i++) {
            let items = this.history[i].items;
            for (let j = 0; j < items.length; j++) {
                terjual[items[j].indexProduk] += items[j].jumlah;
            }
        }
        let indexTerlaris = -1;
        let qtyTerbanyak = 0;
        for (let i = 0; i < terjual.length; i++) {
            if (terjual[i] > qtyTerbanyak) {
                qtyTerbanyak = terjual[i];
                indexTerlaris = i;
            }
        }

        // kalau belum ada transaksi sama sekali
        if (indexTerlaris === -1) {
            return { nama: '-', jumlah: 0 };
        }
        return {
            nama: this.productService.products[indexTerlaris].name,
            jumlah: qtyTerbanyak
        };
    }
}