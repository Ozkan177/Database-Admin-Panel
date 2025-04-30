import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ReviewService } from '../../services/review.service'; // TODO
// import { AppService } from '../../services/app.service'; // TODO
// import { UserService } from '../../services/user.service'; // TODO

@Component({
  selector: 'app-review-form',
  standalone: false,
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.scss'
})


export class ReviewFormComponent implements OnInit {
  reviewForm!: FormGroup;
  users: string[] = []; // dummy: email listesi
  apps: string[] = [];  // dummy: app adları

  constructor(
    private fb: FormBuilder,
    // private reviewService: ReviewService,
    // private appService: AppService,
    // private userService: UserService
  ) {}

  ngOnInit(): void {
    this.reviewForm = this.fb.group({
      user: ['', Validators.required],
      app: ['', Validators.required],
      comment: ['', Validators.required],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
      comment_date: [new Date().toISOString().substring(0, 10)]
    });

    this.loadDummyData();
  }

  loadDummyData() {
    // TODO: backend geldiğinde buradan alınacak
    // this.userService.getAllUsers()...
    // this.appService.getAllApps()...
    this.users = ['oz@example.com', 'alice@example.com'];
    this.apps = ['Spotify', 'Angry Birds', 'World of Tanks'];
  }

  onSubmit() {
    if (this.reviewForm.valid) {
      const review = this.reviewForm.value;
      console.log('Review Submitted:', review);

      // TODO: backend'e gönderilecek
      // this.reviewService.submitReview(review).subscribe(...)
    } else {
      this.reviewForm.markAllAsTouched();
    }
  }
}



// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UserService } from '../../services/user.service';
// import { AppService } from '../../services/app.service';
// import { ReviewService } from '../../services/review.service';

// @Component({
//   selector: 'app-review-form',
//   templateUrl: './review-form.component.html',
//   styleUrls: ['./review-form.component.scss']
// })
// export class ReviewFormComponent implements OnInit {

//   reviewForm!: FormGroup;
//   users: any[] = [];
//   apps: any[] = [];

//   constructor(
//     private fb: FormBuilder,
//     private userService: UserService,
//     private appService: AppService,
//     private reviewService: ReviewService
//   ) {}

//   ngOnInit(): void {
//     this.reviewForm = this.fb.group({
//       user: ['', Validators.required],
//       app: ['', Validators.required],
//       comment: ['', Validators.required],
//       rating: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
//       comment_date: [new Date().toISOString().substring(0, 10)] // Bugünün tarihi
//     });

//     this.loadUsers();
//     this.loadApps();
//   }

//   loadUsers() {
//     this.userService.getAllUsers().subscribe({
//       next: (data) => {
//         this.users = data;
//       },
//       error: (err) => {
//         console.error('Error fetching users', err);
//       }
//     });
//   }

//   loadApps() {
//     this.appService.getAllApps().subscribe({
//       next: (data) => {
//         this.apps = data;
//       },
//       error: (err) => {
//         console.error('Error fetching apps', err);
//       }
//     });
//   }

//   onSubmit() {
//     if (this.reviewForm.valid) {
//       const reviewData = this.reviewForm.value;
//       console.log('Submitting review:', reviewData);

//       this.reviewService.submitReview(reviewData).subscribe({
//         next: (res) => {
//           console.log('Review submitted successfully', res);
//           this.reviewForm.reset();
//           this.reviewForm.get('rating')?.setValue(0);
//           this.reviewForm.get('comment_date')?.setValue(new Date().toISOString().substring(0, 10));
//         },
//         error: (err) => {
//           console.error('Error submitting review', err);
//         }
//       });
//     } else {
//       this.reviewForm.markAllAsTouched();
//     }
//   }
// }
