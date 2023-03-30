import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AdminPorfAddComponent } from './admin/admin-porf/admin-porf-add/admin-porf-add.component';
import { AdminPorfDeleteComponent } from './admin/admin-porf/admin-porf-delete/admin-porf-delete.component';
import { AdminPorfEditComponent } from './admin/admin-porf/admin-porf-edit/admin-porf-edit.component';
import { AdminPorfComponent } from './admin/admin-porf/admin-porf.component';
import { AdminPostAddComponent } from './admin/admin-post/admin-post-add/admin-post-add.component';
import { AdminPostDeleteComponent } from './admin/admin-post/admin-post-delete/admin-post-delete.component';
import { AdminPostEditComponent } from './admin/admin-post/admin-post-edit/admin-post-edit.component';
import { AdminPostComponent } from './admin/admin-post/admin-post.component';
import { HomeComponent } from './admin/home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { DetailPorfComponent } from './porf/detail-porf/detail-porf.component';
import { PorfComponent } from './porf/porf.component';
import { PostComponent } from './post/post.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
    {path: '', component: ResumeComponent},
    {path: 'porf', component: PorfComponent},
    {path: 'porf/:id', component: DetailPorfComponent},
    {path: 'note', component: PostComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: HomeComponent},
    {path: 'admin/porf', component: AdminPorfComponent},
    {path: 'admin/porf/add/:idType', component: AdminPorfAddComponent},
    {path: 'admin/porf/edit/:id', component: AdminPorfEditComponent},
    {path: 'admin/porf/delete/:id', component: AdminPorfDeleteComponent},
    {path: 'admin/note', component: AdminPostComponent},
    {path: 'admin/note/add/:idType', component: AdminPostAddComponent},
    {path: 'admin/note/edit/:id', component: AdminPostEditComponent},
    {path: 'admin/note/delete/:id', component: AdminPostDeleteComponent},
    {path: '**', redirectTo: '', pathMatch:'full'},
 ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
