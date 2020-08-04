import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfoadkarsService } from './infoadkars.service';
import { AppComponent } from './app.component';
import { SalatComponent } from './salat/salat.component';
import { AdkarComponent } from './adkar/adkar.component';
import { QuranAlKarimComponent } from './quran-al-karim/quran-al-karim.component';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';


const routes=[
  {
  path:'adkar', component:AdkarComponent
  },
  {
  path:'quran-al-karim', component:QuranAlKarimComponent
  },
  {
    path:'salat', component:SalatComponent
    }
];
@NgModule({
  declarations: [
    AppComponent,
    SalatComponent,
    AdkarComponent,
    QuranAlKarimComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
  })],
  providers: [InfoadkarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
