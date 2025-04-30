// import { Component, OnInit } from '@angular/core';
// // import { AppService } from '../../services/app.service'; // TODO
// // import { UserService } from '../../services/user.service'; // TODO
// // import { BoughtItemService } from '../../services/bought-item.service'; // TODO

// @Component({
//   selector: 'app-dashboard',
//   standalone: false,
//   templateUrl: './dashboard.component.html',
//   styleUrl: './dashboard.component.scss'
// })



// export class DashboardComponent implements OnInit {
//   totalApps = 0;
//   totalUsers = 0;
//   totalPurchases = 0;
//   averageRating = 0;

//   constructor(
//     // private appService: AppService,
//     // private userService: UserService,
//     // private boughtItemService: BoughtItemService
//   ) {}

//   ngOnInit(): void {
//     this.loadDummyData();
//   }

//   loadDummyData() {
//     // TODO: Backend'den veriler çekilecek

//     // Dummy veriler
//     const apps = [{}, {}, {}]; // 3 app
//     const users = [{}, {}, {}, {}]; // 4 user
//     const boughtItems = [
//       { rating: 4 },
//       { rating: 5 },
//       { rating: 3 },
//       { rating: 5 }
//     ];

//     this.totalApps = apps.length;
//     this.totalUsers = users.length;
//     this.totalPurchases = boughtItems.length;
//     this.averageRating = this.calculateAverageRating(boughtItems);
//   }

//   calculateAverageRating(items: { rating: number }[]): number {
//     const sum = items.reduce((acc, item) => acc + item.rating, 0);
//     return items.length ? +(sum / items.length).toFixed(2) : 0;
//   }
// }



import { Component, OnInit } from '@angular/core';
// import { AppService } from '../../services/app.service'; // TODO
// import { UserService } from '../../services/user.service'; // TODO
// import { BoughtItemService } from '../../services/bought-item.service'; // TODO

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  totalApps = 0;
  totalUsers = 0;
  totalPurchases = 0;
  averageRating = 0;

  users: any[] = [];
  apps: any[] = [];
  purchases: any[] = [];

  constructor(
    // private appService: AppService,
    // private userService: UserService,
    // private boughtItemService: BoughtItemService
  ) {}

  ngOnInit(): void {
    this.loadDummyData();
    // this.loadFromBackend(); // TODO: Backend hazır olunca aç
  }

  loadDummyData() {
    this.apps = [
      { id: 1, name: 'Angry Birds' },
      { id: 2, name: 'Spotify' },
      { id: 3, name: 'Duolingo' }
    ];

    this.users = [
      { email: 'ali@example.com', name: 'Ali' },
      { email: 'ayse@example.com', name: 'Ayşe' },
      { email: 'mehmet@example.com', name: 'Mehmet' },
      { email: 'fatma@example.com', name: 'Fatma' }
    ];

    this.purchases = [
      { user: 'ali@example.com', rating: 4 },
      { user: 'ayse@example.com', rating: 5 },
      { user: 'mehmet@example.com', rating: 3 },
      { user: 'fatma@example.com', rating: 5 }
    ];

    this.totalApps = this.apps.length;
    this.totalUsers = this.users.length;
    this.totalPurchases = this.purchases.length;
    this.averageRating = this.calculateAverageRating(this.purchases);
  }

  calculateAverageRating(items: { rating: number }[]): number {
    const sum = items.reduce((acc, item) => acc + item.rating, 0);
    return items.length ? +(sum / items.length).toFixed(2) : 0;
  }

  // TODO: Backend'den çekilecek yapılar
  /*
  loadFromBackend() {
    this.appService.getAllApps().subscribe(apps => {
      this.apps = apps;
      this.totalApps = apps.length;
    });

    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
      this.totalUsers = users.length;
    });

    this.boughtItemService.getAll().subscribe(items => {
      this.purchases = items;
      this.totalPurchases = items.length;
      this.averageRating = this.calculateAverageRating(items);
    });
  }
  */
}
