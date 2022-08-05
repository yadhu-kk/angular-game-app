import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamePageComponent } from './game-page/game-page.component';
import { MessagePageComponent } from './message-page/message-page.component';
import { FormsModule } from '@angular/forms';
import { ResultPageComponent } from './result-page/result-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent,
    MessagePageComponent,
    ResultPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatGridListModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
