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

    // POIN 7: Tombol "Konfirmasi Transaksi"
    konfirmasiTransaksi() {
        let isiKeranjang = this.keranjangService.isikeranjang;
        let totalBayar = this.keranjangService.getTotalPrice();

        // ngurangin stock
        for (let i = 0; i < isiKeranjang.length; i++) {
            let item = isiKeranjang[i];
            this.productService.updateStock(-item.jumlah, item.indexProduk);
        }
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
}