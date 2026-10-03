import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editproduk',
  templateUrl: './editproduk.page.html',
  styleUrls: ['./editproduk.page.scss'],
  standalone: false,
})
export class EditprodukPage implements OnInit {

  constructor(private route: ActivatedRoute, private productservice: Product, private router: Router) { }
  index = 0;
  products: any[] = [];

  edit_name: string = "";
  edit_buyPrice: number = 0;
  edit_sellPrice: number = 0;
  edit_stock: number = 0;
  edit_imgurl: string = "";

  err_name: string = '';
  err_buyPrice: string = '';
  err_sellPrice: string = '';
  err_stock: string = '';
  valid: string = 'valid';
  
  ngOnInit() {
    this.products = this.productservice.products;
    this.route.params.subscribe(params => {
    this.index = params['index'];
    this.edit_name = this.products[this.index].name;
    this.edit_buyPrice = this.products[this.index].buyPrice;
    this.edit_sellPrice = this.products[this.index].sellPrice;
    this.edit_stock = this.products[this.index].stock;
    this.edit_imgurl = this.products[this.index].imgurl;
      
    });
  }

  cekValid() {
    this.err_name = '';
    this.err_buyPrice = '';
    this.err_sellPrice = '';
    this.err_stock = '';
    this.valid = 'valid';

    if (this.edit_name === "") {
      this.err_name = 'Nama produk harus diisi';
      this.valid = 'invalid';
    }
    if (this.edit_buyPrice <= 0) {
      this.err_buyPrice = 'Harga beli harus lebih dari 0';
      this.valid = 'invalid';
    }
    if (this.edit_sellPrice <= 0) {
      this.err_sellPrice = 'Harga jual harus lebih dari 0';
      this.valid = 'invalid';
    }
    if (this.edit_stock <= 0) {
      this.err_stock = 'Stok harus lebih dari 0';
      this.valid = 'invalid';
    }
  }

  editProduk() {
    this.cekValid();
    if (this.valid === "valid") {
      this.products[this.index].name = this.edit_name;
      this.products[this.index].buyPrice = this.edit_buyPrice;
      this.products[this.index].sellPrice = this.edit_sellPrice;
      this.products[this.index].stock = this.edit_stock;
      this.products[this.index].imgurl = this.edit_imgurl;

      this.router.navigate(['/produk']);
    }
  }
}
