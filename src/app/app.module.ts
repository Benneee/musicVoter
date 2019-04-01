import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { VoterComponent } from "./voter/voter.component"; // This tells Angular about the header component
import { HeaderComponent } from "./header/header.component"; // This tells Angular about the header component
import { ColorDirective } from "./musicVoterColor/colorChange.directive";
import { ThemeDirective } from "./theme.directive";
import { FooterComponent } from "./footer/footer.component";
import { Box1Component } from "./box1/box1.component";
import { CustomThemeService } from "./Services/customtheme.service";
import { SongDataService } from "./songData.service";
import { HttpModule } from "@angular/http";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "signup", component: SignupComponent },
  { path: "signin", component: SigninComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    HeaderComponent,
    ColorDirective,
    ThemeDirective,
    FooterComponent,
    Box1Component,
    SigninComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CustomThemeService, SongDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
