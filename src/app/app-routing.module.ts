import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppFormComponent } from './components/app-form/app-form.component';
import { AppListComponent } from './components/app-list/app-list.component';
import { BoughtItemsComponent } from './components/bought-items/bought-items.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'apps', component: AppListComponent },
  { path: 'apps/new', component: AppFormComponent },
  { path: 'users', component: UserListComponent },
  { path: 'countries', component: CountryListComponent },
  { path: 'bought', component: BoughtItemsComponent },
  { path: 'review', component: ReviewFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
