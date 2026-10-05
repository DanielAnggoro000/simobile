import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Product {
    products = [
        {
            name: "Beras Premium Ramos 5kg",
            category: "Sembako",
            buyPrice: 65000,
            sellPrice: 70000,
            stock: 25,
            imgurl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500"
        },
        {
            name: "Minyak Goreng Bimoli 2L",
            category: "Sembako",
            buyPrice: 34000,
            sellPrice: 38000,
            stock: 30,
            imgurl: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500"
        },
        {
            name: "Gula Pasir Putih 1kg",
            category: "Sembako",
            buyPrice: 15500,
            sellPrice: 17500,
            stock: 40,
            imgurl: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=500"
        },
        {
            name: "Indomie Goreng Original",
            category: "Makanan Instan",
            buyPrice: 2800,
            sellPrice: 3500,
            stock: 120,
            imgurl: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=500"
        },
        {
            name: "Sunlight Sabun Pencuci Piring 755ml",
            category: "Kebersihan",
            buyPrice: 15000,
            sellPrice: 18000,
            stock: 25,
            imgurl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500"
        },
        {
            name: "Gas Elpiji 3kg",
            category: "Rumah Tangga",
            buyPrice: 18000,
            sellPrice: 21000,
            stock: 10,
            imgurl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500"
        },
        {
            name: "Kecap Manis Bango 550ml",
            category: "Bumbu",
            buyPrice: 22000,
            sellPrice: 25500,
            stock: 18,
            imgurl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500"
        },
        {
            name: "Tolak Angin Cair (1 Kotak isi 12)",
            category: "Kesehatan",
            buyPrice: 38000,
            sellPrice: 44000,
            stock: 12,
            imgurl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500"
        },
        {
            name: "Molto Pewangi Pakaian 780ml",
            category: "Kebersihan",
            buyPrice: 14000,
            sellPrice: 17000,
            stock: 22,
            imgurl: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=500"
        },
        {
            name: "Roma Kelapa Biskuit 300g",
            category: "Snack",
            buyPrice: 8500,
            sellPrice: 10500,
            stock: 30,
            imgurl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500"
        }
    ];


    addProduk(p_name: string, p_category: string, p_buyPrice: number, p_sellPrice: number, p_stock: number, p_imgurl: string) {
        this.products.push({
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