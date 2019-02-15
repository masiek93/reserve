import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { DateSelectComponent } from './date-select/date-select.component';

@NgModule({
  declarations: [
    AppComponent,
    TermComponent,
    ServiceComponent,
    ConfirmationComponent,
    FooterComponent,
    ProgressBarComponent,
    DateSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
