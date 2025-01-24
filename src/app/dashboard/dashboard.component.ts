import { Component, OnInit } from '@angular/core';
import { Product } from '../app.interface';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];
  ngOnInit(): void {
    this.products = this.getProducts();
  }
  getProducts(): Product[] {
    return [
      {
        id: 1,
        title: 'iPhone 9',
        description: 'An apple mobile which is nothing like apple',
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        Sale: new Date(),
        onSale: true,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'https://i.pinimg.com/736x/84/ee/48/84ee48dbb18b783a991c2a22103b5649.jpg',
        images: ['https://static.turbosquid.com/Preview/001322/196/FF/_D.jpg'],
        color: ''
      },
      {
        id: 2,
        title: 'iPhone X',
        description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD  ...',
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        Sale: new Date(),
        onSale: false,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'https://i.pinimg.com/736x/84/ee/48/84ee48dbb18b783a991c2a22103b5649.jpg',
        images: [
          'https://th.bing.com/th/id/R.85a4c019b9dbf88f5bba52a55259175e?rik=L9bH4BgOt0KvzQ&pid=ImgRaw&r=0',
          'https://i.dummyjson.com/data/products/2/2.jpg',
          'https://i.dummyjson.com/data/products/2/3.jpg',
          'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
        ],
        color: ''
      },
      {
        id: 3,
        title: 'Samsung Universe 9',
        description: "Samsung's new variant which goes beyond Galaxy to ",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        Sale: new Date(),
        onSale: false,
        brand: 'Samsung',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
        images: [
          'https://th.bing.com/th/id/OIP.YGGc6k3hjd1Sf2cTVFpblwHaHa?w=600&h=600&rs=1&pid=ImgDetMain',
        ],
        color: ''
      },
      {
        id: 4,
        title: 'OPPOF19',
        description: 'OPPO F19 is officially announced on April 2021.',
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        Sale: new Date(),
        onSale: false,
        brand: 'OPPO',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
        images: [
          'https://cdn.fskasur.com/wp-content/uploads/2021/03/12852c03987b44d2a4475f6ca8f4daa1-600x600.jpg',
        ],
        color: ''
      },
      {
        id: 5,
        title: 'Huawei P30',
        description: 'Huawei’s re-badged P30 Pro New Edition was officially the Universe the Universe ',
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09,
        stock: 32,
        Sale: new Date(),
        onSale: false,
        brand: 'Huawei',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
        images: [
          'https://th.bing.com/th/id/R.dec06a64d06a1f4c62681f8bfd1fda54?rik=mFA2XOKKwxza3g&pid=ImgRaw&r=0',
        ],
        color: ''
      },
      {
        id: 6,
        title: 'MacBook Pro',
        description: 'MacBook Pro 2021 with mini-LED display may launch between September, November',
        price: 1749,
        discountPercentage: 11.02,
        rating: 4.57,
        stock: 83,
        Sale: new Date(),
        onSale: false,
        brand: 'Apple',
        category: 'laptops',
        thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
        images: [
          'https://i5.walmartimages.com/asr/6e7c19c2-382c-4d0c-8861-bc50d9ddc854_1.62e7cde1272f318f8d8dac7a469ce614.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
        ],
        color: ''
      },
      {
        id: 7,
        title: 'Samsung Galaxy ',
        description: 'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
        price: 1499,
        discountPercentage: 4.15,
        rating: 4.25,
        stock: 50,
        Sale: new Date(),
        onSale: false,
        brand: 'Samsung',
        category: 'laptops',
        thumbnail: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
        images: [
          'https://th.bing.com/th/id/OIP.ifAJOHjFr8pbMqdutjrx9wHaHa?rs=1&pid=ImgDetMain',
        ],
        color: ''
      },
      {
        id: 8,
        title: 'Microsoft Surface ',
        description: 'Style and speed. Stand out on HD video calls backed by Studio Mics.',
        price: 1499,
        discountPercentage: 10.23,
        rating: 4.43,
        stock: 68,
        Sale: new Date(),
        onSale: false,
        brand: 'Microsoft Surface',
        category: 'laptops',
        thumbnail: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
        images: [
          'https://th.bing.com/th/id/OIP.r42Cb7K402ry8hLtpftm3gHaHa?w=2500&h=2500&rs=1&pid=ImgDetMain',
        ],
        color: ''
      },
      {
        id: 9,
        title: 'Infinix INBOOK',
        description: 'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
        price: 1099,
        discountPercentage: 11.83,
        rating: 4.54,
        stock: 96,
        brand: 'Infinix',
        Sale: new Date(),
        onSale: false,
        category: 'laptops',
        thumbnail: 'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
        images: [
          'https://www.kimstore.com/cdn/shop/products/LAPINF0001_1_f31aa58e-2b25-46e5-bb66-85a17a14ce8a.jpg?v=1665028400',
        ],
        color: ''
      },
      {
        id: 10,
        title: 'HP Pavilion ',
        description: 'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, ',
        price: 1099,
        discountPercentage: 6.18,
        rating: 4.43,
        stock: 89,
        Sale: new Date(),
        onSale: false,
        brand: 'HP Pavilion',
        category: 'laptops',
        thumbnail: 'https://i.dummyjson.com/data/products/10/thumbnail.jpeg',
        images: [
          'https://th.bing.com/th/id/R.0b8f6eecfa0091c3584c079203e9f62a?rik=4sk%2fXyXeDik5vg&riu=http%3a%2f%2fwww.notebookcheck.net%2fuploads%2ftx_nbc2%2fhp-pavilion-hdx-entertainment-notebook-pc-series_400x400.jpg&ehk=PoA3pnuddudFZLqnPUzi%2f0xerxZx6ApPHswXe7Hbb4A%3d&risl=&pid=ImgRaw&r=0',
        ],
        color: ''
      },
      {
        id: 11,
        title: 'perfume Oil',
        description: 'Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil',
        price: 13,
        discountPercentage: 84,
        rating: 4.26,
        stock: 65,
        Sale: new Date(),
        onSale: false,
        brand: 'Impression of Acqua Di Gio',
        category: 'fragrances',
        thumbnail: 'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
        images: [
          'https://static.vecteezy.com/system/resources/previews/010/543/267/large_2x/smartphone-near-falling-blue-oil-tank-causing-oil-3d-rendering-photo.jpg',
        ],
        color: ''
      },
    ];
  }
}
