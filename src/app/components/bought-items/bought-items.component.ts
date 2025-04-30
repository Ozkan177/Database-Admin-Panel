// import { Component, OnInit } from '@angular/core';
// // import { BoughtItemService } from '../../services/bought-item.service'; // TODO: backend geldiğinde aç
// // import { UserService } from '../../services/user.service'; // TODO: kullanıcıları çekmek için

// @Component({
//   selector: 'app-bought-items',
//   standalone: false,
//   templateUrl: './bought-items.component.html',
//   styleUrl: './bought-items.component.scss'
// })
// export class BoughtItemsComponent implements OnInit {

//   users = ['oz@example.com', 'alice@example.com', 'bob@example.com']; // TODO: backend'den çekilecek
//   selectedUser: string = '';
//   boughtItems: any[] = [];

//   constructor(
//     // private boughtItemService: BoughtItemService,
//     // private userService: UserService
//   ) {}

//   ngOnInit(): void {
//     // TODO: Backend'den kullanıcı çekme
//     // this.userService.getAllUsers().subscribe(data => this.users = data.map(u => u.email));
//   }

//   fetchBoughtItems() {
//     // TODO: Backend'den veriler alınacak
//     // this.boughtItemService.getBoughtItemsByUser(this.selectedUser).subscribe(data => this.boughtItems = data);

//     // Dummy veri — frontend test için:
//     this.boughtItems = [
//       {
//         appName: 'Angry Birds',
//         rating: 4,
//         comment: 'Great game!',
//         comment_date: '2024-04-01',
//         date_of_purchase: '2024-03-25',
//         payment_format_name: 'Credit Card'
//       },
//       {
//         appName: 'Spotify',
//         rating: 5,
//         comment: 'Love it!',
//         comment_date: '2024-03-15',
//         date_of_purchase: '2024-03-12',
//         payment_format_name: 'PayPal'
//       }
//     ];
//   }
// }



import { Component, OnInit } from '@angular/core';
// import { BoughtItemService } from '../../services/bought-item.service'; // TODO: backend geldiğinde aktif et

@Component({
  selector: 'app-bought-items',
  standalone: false,
  templateUrl: './bought-items.component.html',
  styleUrl: './bought-items.component.scss'
})
export class BoughtItemsComponent implements OnInit {

  boughtItems: any[] = [];

  constructor(
    // private boughtItemService: BoughtItemService
  ) {}

  ngOnInit(): void {
    this.loadBoughtItems();
  }

  loadBoughtItems() {
    // TODO: Backend'den tüm satın almaları getir
    // this.boughtItemService.getAll().subscribe(data => this.boughtItems = data);

    // Dummy veri (backend yokken gösterim için)
    this.boughtItems = [
      {
        user_email: 'ali@example.com',
        app_name: 'Spotify',
        rating: 4,
        comment: 'Çok iyi!',
        comment_date: '2024-04-01',
        purchase_date: '2024-03-28',
        payment_method: 'Credit Card'
      },
      {
        user_email: 'ayse@example.com',
        app_name: 'Netflix',
        rating: 5,
        comment: 'Süper içerikler!',
        comment_date: '2024-04-02',
        purchase_date: '2024-03-25',
        payment_method: 'PayPal'
      }
    ];
  }
}
