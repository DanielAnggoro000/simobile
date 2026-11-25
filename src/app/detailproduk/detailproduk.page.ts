import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { Keranjang } from '../keranjang';

@Component({
  selector: 'app-detailproduk',
  templateUrl: './detailproduk.page.html',
  styleUrls: ['./detailproduk.page.scss'],
  standalone: false,
})
export class DetailprodukPage implements OnInit {
  index = 0
  product: any

  constructor(private route: ActivatedRoute, private productservice: Product,
    private keranjangservice: Keranjang, private cdr: ChangeDetectorRef,private router:Router) { }

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct() {
    this.route.params.subscribe(params => {
      // this.index = params['index'];
      this.productservice.productDetail(params['index']).subscribe(
        (data) => {
          this.product = data
          this.cdr.markForCheck();
        }
      )
    });
  }

  tambahKeranjang() {
    this.keranjangservice.tambahKeKeranjang(this.index, 1);
  }

  jumlahDiKeranjang(): number {
    let indexInCart: number = this.keranjangservice.findInCart(this.index);
    if (indexInCart == -1)
      return 0;
    return this.keranjangservice.isikeranjang[indexInCart].jumlah;
  }
  deleteProduct(id: any) {
    this.productservice.deleteProduct(id).subscribe((response: any) => {
      if (response.result === 'success') {
        alert("success")
        this.router.navigate(['/produk'])
      }
      else {
        alert(response.message)
      }
    });
  }
}