import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../services/user.service';
// import { ReviewService } from '../../services/review.service';
// import { AppService } from '../../services/app.service';



interface UserReview {
  appName: string;
  comment: string;
  rating: number;
}

interface AppWithoutReview {
  appName: string;
}

@Component({
  selector: 'app-user-reviews',
  templateUrl: './user-reviews.component.html',
  styleUrls: ['./user-reviews.component.scss'],
  standalone:false
})



export class UserReviewsComponent implements OnInit {

  users = ['ali@example.com', 'ayse@example.com']; // Dummy veri
  selectedUser: string | null = null;

  userReviews: UserReview[] = [];
  appsWithoutReview: AppWithoutReview[] = [];

  constructor(
    // private userService: UserService,
    // private reviewService: ReviewService,
    // private appService: AppService
  ) {}

  ngOnInit(): void {
    // TODO: Backend hazırsa burada kullanıcıları çek
    /*
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
    */
  }

  onUserChange() {
    console.log(`Selected user: ${this.selectedUser}`);

    // Dummy örnek:
    this.userReviews = [
      { appName: 'Angry Birds', comment: 'Very fun!', rating: 5 },
      { appName: 'Spotify', comment: 'Love the music.', rating: 4 }
    ];

    this.appsWithoutReview = [
      { appName: 'Netflix' },
      { appName: 'World of Tanks' }
    ];

    // TODO: Backend bağlanınca:
    /*
    this.reviewService.getReviewsByUser(this.selectedUser).subscribe(data => {
      this.userReviews = data;
    });

    this.appService.getAppsWithoutReview(this.selectedUser).subscribe(data => {
      this.appsWithoutReview = data;
    });
    */
  }

  writeReview(appName: string) {
    console.log(`Redirect to write review for ${appName}`);
    // TODO: Yorum yapma işlemi (popup, yeni sayfa, vs.)
  }
}
