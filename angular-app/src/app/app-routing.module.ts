import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { PersonalDetailFormComponent } from './admin/reactive-form/personal-detail-form/personal-detail-form.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PersonalDetailAddComponent } from './admin/reactive-form/personal-detail-add/personal-detail-add.component';
import { PersonalDetailEditComponent } from './admin/reactive-form/personal-detail-edit/personal-detail-edit.component';
import { PersonalDetailViewComponent } from './admin/reactive-form/personal-detail-view/personal-detail-view.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'admin', 
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {
        path: 'personal-detail', 
        component: PersonalDetailFormComponent,
        children: [
          {path: '', redirectTo: 'view', pathMatch: 'full'},
          {path:'add', component: PersonalDetailAddComponent},
          {path:'edit', component: PersonalDetailEditComponent},
          {path:'view', component: PersonalDetailViewComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
