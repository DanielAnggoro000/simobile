import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-editproduk',
  templateUrl: './editproduk.page.html',
  styleUrls: ['./editproduk.page.scss'],
  standalone: false,
})
export class EditprodukPage implements OnInit {

  constructor(private route: ActivatedRoute, private productservice: Product, private router: Router, private cdr: ChangeDetectorRef) { }
  index = 0;
  products: any[] = [];

  edit_name: string = "";
  edit_category: string = "";
  edit_buyPrice: number = 0;
  edit_sellPrice: number = 0;
  edit_stock: number = 0;
  edit_imgurl: string = "";

  base64: any;
  imageType: string = 'URL';

  err_name: string = '';
  err_category: string = '';
  err_buyPrice: string = '';
  err_sellPrice: string = '';
  err_stock: string = '';
  valid: string = 'valid';

ngOnInit() {
    this.route.params.subscribe((params) => {
      // Pakai params['index'] karena route kamu di detailproduk memakai /editproduk/{{ index }}
      this.index = params['index'] ?? params['id'];
      this.productservice.productDetail(this.index).subscribe((data) => {
        this.edit_name = data.name;
        this.edit_category = data.category;
        this.edit_buyPrice = data.buyPrice;
        this.edit_sellPrice = data.sellPrice;
        this.edit_stock = data.stock;
        this.edit_imgurl = data.imgUrl;
        this.cdr.detectChanges();
      });
    });
  }

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 50,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });
    const base64Image = 'data:image/png;base64,' + image.base64String;
    this.base64 = base64Image;
    this.cdr.detectChanges();
  }

  cekValid() {
    this.err_name = '';
    this.err_category = '';
    this.err_buyPrice = '';
    this.err_sellPrice = '';
    this.err_stock = '';
    this.valid = 'valid';

    if (this.edit_name === "") {
      this.err_name = 'Nama produk harus diisi';
      this.valid = 'invalid';
    }
    if (this.edit_category === "") {
      this.err_category = 'Kategori harus diisi';
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
      if (this.imageType == 'Camera' && this.base64) {
        this.edit_imgurl ='https://ubaya.fun/hybrid/160424020/uas/images/' + this.edit_name + '.png';
        this.productservice.uploadImage(this.edit_name, this.base64)
          .subscribe((response: any) => {
            if (response.result === 'success') {
              alert('photo uploaded');
            }
          });
      }
     this.productservice.updateProduct(this.index, this.edit_name, this.edit_category, this.edit_buyPrice,
        this.edit_sellPrice, this.edit_stock, this.edit_imgurl).subscribe((response: any) => {
          if (response.result === 'success') {
            alert('success');
            this.router.navigate(['/produk']);
          } 
          else {
            alert(response.message);
          }
      });
    }
  }
}