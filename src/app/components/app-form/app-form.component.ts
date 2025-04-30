import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AppService } from '../../services/app.service'; // TODO: backend geldiğinde açılacak
// import { CountryService } from '../../services/country.service'; // TODO: backend geldiğinde açılacak

@Component({
  selector: 'app-app-form',
  standalone: false,
  templateUrl: './app-form.component.html',
  styleUrl: './app-form.component.scss'
})
export class AppFormComponent implements OnInit {

  appForm!: FormGroup;
  allCountries: string[] = [];
  filteredCountries: string[] = [];
  countrySearch = '';

  constructor(
    private fb: FormBuilder,
    // private appService: AppService,
    // private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.appForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      availableCountries: [[], Validators.required]
    });

    this.loadCountries();
  }

  loadCountries(): void {
    // TODO: Backend'den çekilecek
    // this.countryService.getAllCountries().subscribe(data => {
    //   this.allCountries = data.map(c => c.name);
    //   this.filteredCountries = this.allCountries;
    // });

    this.allCountries = ['USA', 'Germany', 'Turkey', 'Japan', 'India'];
    this.filteredCountries = [...this.allCountries];
  }

  filterCountries() {
    const search = this.countrySearch.toLowerCase();
    this.filteredCountries = this.allCountries.filter(c =>
      c.toLowerCase().includes(search)
    );
  }

  onToggleSelectAll(checked: boolean) {
    this.appForm.get('availableCountries')?.setValue(checked ? [...this.allCountries] : []);
  }

  onCheckboxChange(country: string, checked: boolean) {
    const selected = this.appForm.get('availableCountries')?.value as string[];
    if (checked) {
      if (!selected.includes(country)) selected.push(country);
    } else {
      const index = selected.indexOf(country);
      if (index >= 0) selected.splice(index, 1);
    }
    this.appForm.get('availableCountries')?.setValue(selected);
  }

  onSubmit() {
    alert('onSubmit çalıştı');
    if (this.appForm.valid) {
      const formValue = this.appForm.value;
      console.log('Form Submitted:', formValue);

      // TODO: Backend'e POST edilecek
      // this.appService.createApp(formValue).subscribe(response => {
      //   console.log('App created successfully', response);
      //   this.appForm.reset();
      // });
    }
    else {
      this.appForm.markAllAsTouched();
    }
  }
}
