import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AzurevmsComponent } from "./azurevms/azurevms.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AzurevmDetailComponent } from "./azurevm-detail/azurevm-detail.component";

const routes: Routes = [
  { path: 'azurevms', component: AzurevmsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'azurevmdetail/:Name', component: AzurevmDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
