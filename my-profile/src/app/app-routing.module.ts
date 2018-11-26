import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { EducationComponent } from './education/education.component';
import {CVComponent} from './cv/cv.component';
const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'index',
    children: [ {path: '', component: HomeComponent , pathMatch: 'full'},
    {
      path: 'home', component: HomeComponent,
      children: [
        {
          path: '', component: ProfileHomeComponent
        }
        ,
         {
          path: 'about' , component: AboutComponent
         },
         {
           path: 'profileHome', component: ProfileHomeComponent
         },
         {
           path: 'cv', component : CVComponent
         }

      ]
    }
   ]
  },
  {
    path: 'education' , component: EducationComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
