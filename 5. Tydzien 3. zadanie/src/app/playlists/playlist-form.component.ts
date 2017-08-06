import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'playlist-form',
  template: `
        <form #formRef ="ngForm" (ngSubmit) = "save(formRef)">
          <div class="form-group">
            <label>Nazwa:</label>
            <input type="text" [(ngModel)]="playlist.name" name = "name" class="form-control">
          </div>
          <div class="form-group">
            <label>Utwory:</label>
            <input type="text" [value]="playlist.tracks + ' utwory'" disabled class="form-control">
          </div>
          <div class="form-group">
            <label>Kolor:</label>
            <input type="color" [(ngModel)]="playlist.color" name = "color">
          </div>
          <div class="form-group">
            <label><input type="checkbox" [(ngModel)]="playlist.favourite" name = "favourite"> 
            Ulubiona</label>
          </div>
          <div class="form-group">
            <button class="btn btn-success float-xs-right">Zapisz</button>
          </div>
        </form>
  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {

  @Input()
  playlist;

  @Output('saved')
  onSave = new EventEmitter();

  save(formRef){

    console.log(formRef.value)
   this.onSave.emit(this.playlist)
  }

  constructor() { }

  ngOnInit() {
  }

}
