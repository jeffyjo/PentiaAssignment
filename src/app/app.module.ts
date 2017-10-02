import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DigitalTransformationComponent } from './digital-transformation/digital-transformation.component';
import { ZeppelinComponent } from './zeppelin/zeppelin.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const appRoutes : Routes = [
  { path : '', component : ZeppelinComponent },
  { path : 'transform', component: DigitalTransformationComponent },
  { path : 'contact' , component: ContactFormComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DigitalTransformationComponent,
    ZeppelinComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
