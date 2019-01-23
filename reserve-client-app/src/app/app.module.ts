import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* App Root */
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

/* Routing Module */
import { RouterModule, Routes } from '@angular/router';

/* Feature Components */
import { TermComponent } from './term/term.component';
import { ServiceComponent } from './service/service.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TermComponent,
    ServiceComponent,
    ConfirmationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
