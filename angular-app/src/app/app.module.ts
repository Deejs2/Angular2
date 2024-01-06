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
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PersonalDetailAddComponent } from './admin/reactive-form/personal-detail-add/personal-detail-add.component';
import { PersonalDetailEditComponent } from './admin/reactive-form/personal-detail-edit/personal-detail-edit.component';
import { AgeFormatterPipe } from './pipes/age-formatter.pipe';
import { DateOfBirthFormatterPipe } from './pipes/date-of-birth-formatter.pipe';
import { NepaliNumberFormatterPipe } from './pipes/nepali-number-formatter.pipe';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpHandlerService } from './services/http-handler.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonalDetailViewComponent } from './admin/reactive-form/personal-detail-view/personal-detail-view.component';
import { PersonalDetailViewByIdComponent } from './admin/reactive-form/personal-detail-view-by-id/personal-detail-view-by-id.component';

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
    NepaliNumberFormatterPipe,
    PersonalDetailViewComponent,
    PersonalDetailViewByIdComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(), 
    DatePipe,
    HttpHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
