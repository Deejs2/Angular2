import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { HeaderComponent } from './admin/header/header.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { FooterComponent } from './admin/footer/footer.component';
import { PersonalDetailFormComponent } from './admin/reactive-form/personal-detail-form/personal-detail-form.component';
import { Router, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PersonalDetailAddComponent } from './admin/reactive-form/personal-detail-add/personal-detail-add.component';
import { PersonalDetailEditComponent } from './admin/reactive-form/personal-detail-edit/personal-detail-edit.component';
import { AgeFormatterPipe } from './pipes/age-formatter.pipe';
import { DateOfBirthFormatterPipe } from './pipes/date-of-birth-formatter.pipe';
import { NepaliNumberFormatterPipe } from './pipes/nepali-number-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PersonalDetailFormComponent,
    DashboardComponent,
    PersonalDetailAddComponent,
    PersonalDetailEditComponent,
    AgeFormatterPipe,
    DateOfBirthFormatterPipe,
    NepaliNumberFormatterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
