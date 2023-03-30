import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CoreModule } from './core/core.module';
import { PostModule } from './post/post.module';
import { ResumeModule } from './resume/resume.module';
import { PorfModule } from './porf/porf.module';
import { GalleryModule } from './gallery/gallery.module';
import { LoginComponent } from './login/login.component';
import { AdminPorfModule } from './admin/admin-porf/admin-porf.module';
import { AdminPostModule } from './admin/admin-post/admin-post.module';
import { HomeModule } from './admin/home/home.module';
import { SafePipe } from './safe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    PostModule,
    ResumeModule,
    PorfModule,
    GalleryModule,
    // AdminPorfModule,
    // AdminPostModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
