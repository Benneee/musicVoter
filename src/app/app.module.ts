import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VoterComponent } from './voter/voter.component'; // This tells Angular about the header component
import { HeaderComponent } from './header/header.component'; // This tells Angular about the header component
import { ColorDirective } from './musicVoterColor/colorChange.directive';
import { ThemeDirective } from './theme.directive';
import { FooterComponent } from './footer/footer.component';
import { Box1Component } from './box1/box1.component';
import { CustomThemeService } from './Services/customtheme.service';
import { SongDataService } from './songData.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    HeaderComponent,
    ColorDirective,
    ThemeDirective,
    FooterComponent,
    Box1Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [CustomThemeService, SongDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
