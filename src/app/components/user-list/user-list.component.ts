import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../services/user.service'; // TODO: Backend hazır olunca aktif edilecek

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  users = [
    {
      name: 'Ali',
      surname: 'Yılmaz',
      email: 'ali@example.com',
      password: '********',
      birth_date: '1998-05-20',
      country_id: 1,
      registration_date: '2023-01-01'
    },
    {
      name: 'Ayşe',
      surname: 'Demir',
      email: 'ayse@example.com',
      password: '********',
      birth_date: '2000-02-14',
      country_id: 2,
      registration_date: '2023-04-12'
    }
  ];

  filteredUsers = [...this.users];
  searchText = '';

  constructor(
    // private userService: UserService // TODO: Backend geldiğinde açılacak
  ) {}

  ngOnInit(): void {
    // TODO: Backend'den kullanıcılar alınacak
    // this.userService.getAllUsers().subscribe(data => {
    //   this.users = data;
    //   this.filteredUsers = data;
    // });
  }

  applyFilter() {
    const search = this.searchText.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(search) ||
      user.surname.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search)
    );
  }
}
