import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { ColorPickComponent } from './color-pick/color-pick.component';
import { EstoreComponent } from './estore/estore.component';
import { SodiComponent } from './sodi/sodi.component';
import { MountainviewComponent } from './mountainview/mountainview.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'ColorPicker', component: ColorPickComponent },
  { path: 'Flexbox', component: FlexboxComponent },
  { path: 'Estore', component: EstoreComponent },
  { path: 'Sodi', component: SodiComponent },
  { path: 'MountainView', component: MountainviewComponent },
  { path: 'Recipe', component: RecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
