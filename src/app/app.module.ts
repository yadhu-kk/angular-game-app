import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamePageComponent } from './game-page/game-page.component';
import { MessagePageComponent } from './message-page/message-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, GamePageComponent, MessagePageComponent],
  imports: [BrowserModule, AppRoutingModule, MatGridListModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
