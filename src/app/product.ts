import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Product {
    products = [
        {
            index: 0,
            name: "Beras Premium Ramos 5kg",
            category: "Sembako",
            buyPrice: 65000,
            sellPrice: 70000,
            stock: 25,
            imgurl: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/100/MTA-184823821/setra_ramos_beras_premium_befood_setra_ramos_5_kg_full01_nuf51wld.webp"
        },
        {
            index: 1,
            name: "Minyak Goreng Bimoli 2L",
            category: "Sembako",
            buyPrice: 34000,
            sellPrice: 38000,
            stock: 30,
            imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXn7ji0qd8Kb90oURdtpyKDpxXCF7GF2XEG1K_zk9rr3XB9SFNcRUxFQL8&s=10"
        },
        {
            index: 2,
            name: "Gula Pasir Putih 1kg",
            category: "Sembako",
            buyPrice: 15500,
            sellPrice: 17500,
            stock: 40,
            imgurl: "https://coreimages.lottemart.co.id/ord/06/0e962f7f-ce6e-4122-be5f-b83367916812.jpeg"
        },
        {
            index: 3,
            name: "Indomie Goreng Original",
            category: "Makanan Instan",
            buyPrice: 2800,
            sellPrice: 3500,
            stock: 120,
            imgurl: "https://www.indomie.co.id/Content/Product/Category/indomie-goreng.jpg"
        },
        {
            index: 4,
            name: "Sunlight Sabun Pencuci Piring 755ml",
            category: "Kebersihan",
            buyPrice: 15000,
            sellPrice: 18000,
            stock: 25,
            imgurl: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//102/MTA-47285229/unilever_sunlight_755ml_full00.jpg"
        },
        {
            index: 5,
            name: "Gas Elpiji 3kg",
            category: "Rumah Tangga",
            buyPrice: 18000,
            sellPrice: 21000,
            stock: 10,
            imgurl: "https://siplah.blibli.com/data/images/SMMB-0005-00113/71c73d90-31b2-43d0-a292-ef71f51c7dbf.jpeg"
        },
        {
            index: 6,
            name: "Kecap Manis Bango 550ml",
            category: "Bumbu",
            buyPrice: 22000,
            sellPrice: 25500,
            stock: 18,
            imgurl: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-5851719/bango_bango-ref-kecap---550-ml--_full01.jpg"
        },
        {
            index: 7,
            name: "Tolak Angin Cair (1 Kotak isi 12)",
            category: "Kesehatan",
            buyPrice: 38000,
            sellPrice: 44000,
            stock: 12,
            imgurl: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-7753544/sidomuncul_sidomuncul_tolak_angin_-1_box-_full01_qnqrjbtn.jpg"
        },
        {
            index: 8,
            name: "Molto Pewangi Pakaian 780ml",
            category: "Kebersihan",
            buyPrice: 14000,
            sellPrice: 17000,
            stock: 22,
            imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmgKr6yeLamsd0dNocBW-Fyy9JH34nS_ap9wYdPZX8dRitELbzrAnSJdm&s=10"
        },
        {
            index: 9,
            name: "Roma Kelapa Biskuit 300g",
            category: "Snack",
            buyPrice: 8500,
            sellPrice: 10500,
            stock: 30,
            imgurl: "https://c.alfagift.id/product/1/1_A10160000601_20220317102027482_base.jpg"
        }
    ];


    addProduk(p_name: string, p_category: string, p_buyPrice: number, p_sellPrice: number, p_stock: number, p_imgurl: string) {
        this.products.push({
            index: this.products.length,
            name: p_name,
            category: p_category,
            buyPrice: p_buyPrice,
            sellPrice: p_sellPrice,
            stock: p_stock,
            imgurl: p_imgurl
        })
    }
    updateStock(jumlah: number, index: number) {
        this.products[index].stock += jumlah;
    }
    getJumlahProduk() {
        return this.products.length;
    }
}