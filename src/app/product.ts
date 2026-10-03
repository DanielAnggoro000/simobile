import { Service } from '@angular/core';

@Service()
export class Product {
    products = [
        {
            name: "Beras Premium Ramos 5kg",
            buyPrice: 65000,
            sellPrice: 70000,
            stock: 25,
            imgurl: "https://media.discordapp.net/attachments/1428716130176077867/1555523043487518821/image.png?backend=b2&ex=6ac17df9&is=6ac02c79&hm=35cf022be81104555b7ec36e7257f5b2af1dd0488af5847cc73f67346a1302e6&=&format=webp&quality=lossless"
        },
        {
            name: "Minyak Goreng Bimoli 2L",
            buyPrice: 34000,
            sellPrice: 38000,
            stock: 30,
            imgurl: "https://media.discordapp.net/attachments/1428716130176077867/1555523043487518821/image.png?backend=b2&ex=6ac17df9&is=6ac02c79&hm=35cf022be81104555b7ec36e7257f5b2af1dd0488af5847cc73f67346a1302e6&=&format=webp&quality=lossless"

        },
        {
            name: "Gula Pasir Putih 1kg",
            buyPrice: 15500,
            sellPrice: 17500,
            stock: 40,
            imgurl: "https://media.discordapp.net/attachments/1428716130176077867/1555523043487518821/image.png?backend=b2&ex=6ac17df9&is=6ac02c79&hm=35cf022be81104555b7ec36e7257f5b2af1dd0488af5847cc73f67346a1302e6&=&format=webp&quality=lossless"

        },
        {
            name: "Indomie Goreng Original",
            buyPrice: 2800,
            sellPrice: 3500,
            stock: 120,
            imgurl: "https://media.discordapp.net/attachments/1428716130176077867/1555523043487518821/image.png?backend=b2&ex=6ac17df9&is=6ac02c79&hm=35cf022be81104555b7ec36e7257f5b2af1dd0488af5847cc73f67346a1302e6&=&format=webp&quality=lossless"

        },
        {
            name: "Sunlight Sabun Pencuci Piring 755ml",
            buyPrice: 15000,
            sellPrice: 18000,
            stock: 25,
            imgurl: "https://media.discordapp.net/attachments/1428716130176077867/1555523043487518821/image.png?backend=b2&ex=6ac17df9&is=6ac02c79&hm=35cf022be81104555b7ec36e7257f5b2af1dd0488af5847cc73f67346a1302e6&=&format=webp&quality=lossless"

        },
        {
            name: "Gas Elpiji 3kg",
            buyPrice: 18000,
            sellPrice: 21000,
            stock: 10,
            imgurl: "https://media.discordapp.net/attachments/1428716130176077867/1555523043487518821/image.png?backend=b2&ex=6ac17df9&is=6ac02c79&hm=35cf022be81104555b7ec36e7257f5b2af1dd0488af5847cc73f67346a1302e6&=&format=webp&quality=lossless"

        },
        {
            name: "Kecap Manis Bango 550ml",
            buyPrice: 22000,
            sellPrice: 25500,
            stock: 18,
            imgurl: "https://media.discordapp.net/attachments/1428716130176077867/1555523043487518821/image.png?backend=b2&ex=6ac17df9&is=6ac02c79&hm=35cf022be81104555b7ec36e7257f5b2af1dd0488af5847cc73f67346a1302e6&=&format=webp&quality=lossless"

        },
        {
            name: "Tolak Angin Cair (1 Kotak isi 12)",
            buyPrice: 38000,
            sellPrice: 44000,
            stock: 12,
            imgurl: "https://media.discordapp.net/attachments/1428716130176077867/1555523043487518821/image.png?backend=b2&ex=6ac17df9&is=6ac02c79&hm=35cf022be81104555b7ec36e7257f5b2af1dd0488af5847cc73f67346a1302e6&=&format=webp&quality=lossless"

        },
        {
            name: "Molto Pewangi Pakaian 780ml",
            buyPrice: 14000,
            sellPrice: 17000,
            stock: 22,
            imgurl: "https://media.discordapp.net/attachments/1428716130176077867/1555523043487518821/image.png?backend=b2&ex=6ac17df9&is=6ac02c79&hm=35cf022be81104555b7ec36e7257f5b2af1dd0488af5847cc73f67346a1302e6&=&format=webp&quality=lossless"
        },
        {
            name: "Roma Kelapa Biskuit 300g",
            buyPrice: 8500,
            sellPrice: 10500,
            stock: 30,
            imgurl: "https://media.discordapp.net/attachments/1428716130176077867/1555523043487518821/image.png?backend=b2&ex=6ac17df9&is=6ac02c79&hm=35cf022be81104555b7ec36e7257f5b2af1dd0488af5847cc73f67346a1302e6&=&format=webp&quality=lossless"

        }
    ];
    updateStock(jumlah: number, index: number) {
        this.products[index].stock += jumlah;
    }
}
