import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tambah-produk',
  templateUrl: './tambah-produk.page.html',
  styleUrls: ['./tambah-produk.page.scss'],
  standalone: false,
})
export class TambahProdukPage implements OnInit {

  new_name: string = "";
  new_category: string = "";
  new_buyPrice: number = 0;
  new_sellPrice: number = 0;
  new_stock: number = 0;
  new_imgurl: string = "";


  err_name: string = '';
  err_category: string = '';
  err_buyPrice: string = '';
  err_sellPrice: string = '';
  err_stock: string = '';
  valid: string = 'valid';

  constructor(private productservice: Product, private router: Router) { }

  ngOnInit() {
  }

  cekValid() {
    this.err_name = '';
    this.err_category = '';
    this.err_buyPrice = '';
    this.err_sellPrice = '';
    this.err_stock = '';
    this.valid = 'valid';

    if (this.new_name === "") {
      this.err_name = 'Nama produk harus diisi';
      this.valid = 'invalid';
    }
    if (this.new_category === "") {
      this.err_category = 'Kategori harus diisi';
      this.valid = 'invalid';
    }
    if (this.new_buyPrice <= 0) {
      this.err_buyPrice = 'Harga beli harus lebih dari 0';
      this.valid = 'invalid';
    }
    if (this.new_sellPrice <= 0) {
      this.err_sellPrice = 'Harga jual harus lebih dari 0';
      this.valid = 'invalid';
    }
    if (this.new_stock <= 0) {
      this.err_stock = 'Stok harus lebih dari 0';
      this.valid = 'invalid';
    }
  }

  submitProduk() {
    this.cekValid();

    if (this.valid === "valid") {
      this.productservice.addProduk(this.new_name, this.new_category, this.new_buyPrice, this.new_sellPrice, this.new_stock, this.new_imgurl);
      this.router.navigate(['/produk']);
    }

  }

}