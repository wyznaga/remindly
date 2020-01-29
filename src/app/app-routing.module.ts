import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesPageComponent } from './notes-page/notes-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { TodosPageComponent } from './todos-page/todos-page.component';


const routes: Routes = [
  {
    path: '',
    component: TodosPageComponent
  },
  {
    path: 'notes',
    component: NotesPageComponent
  },
  {
    path: 'settings',
    component: SettingsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
