import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlaylistsComponent } from './playlists.component';
import { ContentCardComponent } from './content-card.component';
import { PlaylistFormComponent } from './playlist-form.component';
import { PlaylistsListComponent } from './playlists-list.component';
import { PlaylistDetailComponent } from './playlist-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    PlaylistsComponent,
    ContentCardComponent,
    PlaylistFormComponent,
    PlaylistsListComponent,
    PlaylistDetailComponent
  ],
  exports:[
    PlaylistsComponent
  ]
})
export class PlaylistsModule { }
