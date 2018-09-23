import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'index',
    children: [ {path: '', component: HomeComponent , pathMatch: 'full'},
    {
      path: 'home', component: HomeComponent
    },
    {path: 'about' , component: AboutComponent},
     {path: 'home/home', component: AboutComponent}
   ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
