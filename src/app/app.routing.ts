import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

//import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ImageCategoryComponent } from './components/image-category/image-category.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: CategoriesComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'image-category/:id', component: ImageCategoryComponent },
  { path: 'image-details/:id', component: ImageDetailsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
