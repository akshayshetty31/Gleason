import { NgModule } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { CommonModule } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonServiceService } from './common-service.service';
import { HttpConfigInterceptor } from './httpconfig.interceptor';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ClarityModule } from '@clr/angular';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddcustomerComponent,
    ViewcustomerComponent,
    UpdatecustomerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    PanelModule,
    BrowserAnimationsModule,
    SplitterModule,
    ClarityModule
  ],
  providers: [
    CommonServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
