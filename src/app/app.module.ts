import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {Error404Component} from './error-404/Error-404.component';
import { CourseModule } from './courses/course.module';
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
