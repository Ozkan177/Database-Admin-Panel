import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss'],
  standalone:false
})
export class AppListComponent implements OnInit {

  apps = [
    {
      id: 1,
      name: 'Angry Birds',
      version: '1.0.0',
      description: 'Sling birds to destroy pigs!',
      age_boundry: 7,
      type_flag: 'G',
      category: 'Game',
      publisher_id: 101,
      size: 120.5,
      price: 12.99,
      publication_date: '2023-01-01',
      last_update_date: '2024-03-15',
      new_features: 'New levels added!',
      available_countries: ['USA', 'Germany', 'Japan']
    },
    {
      id: 2,
      name: 'Spotify',
      version: '8.9.1',
      description: 'Stream music anywhere.',
      age_boundry: 12,
      type_flag: 'M',
      category: 'Music',
      publisher_id: 102,
      size: 75.2,
      price: 0,
      publication_date: '2022-05-10',
      last_update_date: '2024-04-01',
      new_features: 'Dark mode, new UI',
      available_countries: ['USA', 'Turkey', 'India']
    },
    {
      id: 3,
      name: 'Duolingo',
      version: '5.0.3',
      description: 'Learn languages for free!',
      age_boundry: 3,
      type_flag: 'E',
      category: 'Education',
      publisher_id: 103,
      size: 55.0,
      price: 0,
      publication_date: '2020-09-23',
      last_update_date: '2023-12-05',
      new_features: 'Voice recognition improved',
      available_countries: ['Germany', 'France', 'Brazil']
    },
    {
      id: 4,
      name: 'Netflix',
      version: '7.2.4',
      description: 'Watch movies and TV shows.',
      age_boundry: 16,
      type_flag: 'V',
      category: 'Entertainment',
      publisher_id: 104,
      size: 150.3,
      price: 15.99,
      publication_date: '2021-02-12',
      last_update_date: '2024-01-10',
      new_features: 'Improved player, subtitles',
      available_countries: ['USA', 'UK', 'Canada']
    },
    {
      id: 5,
      name: 'World of Tanks',
      version: '10.0',
      description: 'MMO tank warfare!',
      age_boundry: 13,
      type_flag: 'G',
      category: 'Game',
      publisher_id: 105,
      size: 210.8,
      price: 9.99,
      publication_date: '2019-06-18',
      last_update_date: '2024-03-20',
      new_features: 'New tanks, maps',
      available_countries: ['Poland', 'Russia', 'USA']
    }
  ];


  filteredApps = [...this.apps];
  searchText: string = '';

  displayedColumns: string[] = [
    'id', 'name', 'version', 'description', 'age_boundry', 'type_flag', 'category',
    'publisher_id', 'size', 'price', 'publication_date', 'last_update_date',
    'new_features', 'available_countries', 'actions'
  ];

  constructor() {}

  ngOnInit(): void {
    // TODO: Backend bağlantısı hazır olduğunda açılacak:
    // this.appService.getAllApps().subscribe(data => {
    //   this.apps = data;
    //   this.filteredApps = data;
    // });
  }

  deleteApp(id: number) {
    this.apps = this.apps.filter(app => app.id !== id);
    this.applyFilter();

    // TODO: Backend silme işlemi:
    // this.appService.deleteApp(id).subscribe(() => {
    //   this.loadApps();
    // });
  }

  applyFilter() {
    const searchTerm = this.searchText.trim().toLowerCase();
    this.filteredApps = this.apps.filter(app =>
      app.name.toLowerCase().includes(searchTerm)
    );
  }
}



