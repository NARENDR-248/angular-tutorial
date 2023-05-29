import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppService } from './services/app.service';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './components/posts/posts.component'

@NgModule({
  declarations: [ // component/ pipes / directives
    AppComponent,
    HomeComponent,
    LoginComponent,
    PostsComponent
  ],
  imports: [ // angualr / 3rd party modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
