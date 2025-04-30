import { Component, OnInit } from '@angular/core';
// import { CountryService } from '../../services/country.service'; // TODO: backend geldiğinde açılacak

@Component({
  selector: 'app-country-list',
  standalone: false,
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})


export class CountryListComponent implements OnInit {
  countries: { id: number; name: string }[] = [];
  filteredCountries: { id: number; name: string }[] = [];

  searchText: string = '';

  constructor(
    // private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries() {
    // TODO: Backend'den veri çekilecek
    // this.countryService.getAllCountries().subscribe(data => {
    //   this.countries = data;
    //   this.filteredCountries = data;
    // });

    // Şimdilik dummy veri
    this.countries = [
      { id: 1, name: 'USA' },
      { id: 2, name: 'Germany' },
      { id: 3, name: 'Turkey' },
      { id: 4, name: 'Japan' },
      { id: 5, name: 'India' }
    ];
    this.filteredCountries = [...this.countries];
  }

  applyFilter() {
    const term = this.searchText.trim().toLowerCase();
    this.filteredCountries = this.countries.filter(c =>
      c.name.toLowerCase().includes(term)
    );
  }
}
