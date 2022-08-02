import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { ColorPickComponent } from './color-pick/color-pick.component';
import { EstoreComponent } from './estore/estore.component';
import { SodiComponent } from './sodi/sodi.component';
import { MountainviewComponent } from './mountainview/mountainview.component';
import { RecipeComponent } from './recipe/recipe.component';
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    FlexboxComponent,
    ColorPickComponent,
    EstoreComponent,
    SodiComponent,
    MountainviewComponent,
    RecipeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
