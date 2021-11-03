import { Component, EventEmitter, Output } from "@angular/core";
import { Bookmark } from "./bookmark.model";

@Component({
  selector: "bookmark-edit",
  template: `
    <div class="card">
      <div class="card-body">
        <input
          [(ngModel)]="bookmark.title"
          type="text"
          placeholder="tytuł"
          style="width:25%"
        />
        <input
          [(ngModel)]="bookmark.url"
          type="text"
          placeholder="url"
          style="width:50%"
        />
        <button (click)="onSave()" class="btn btn-primary">Zapisz</button>
      </div>
    </div>
  `,
})
export class BookmarkEditComponent {
  bookmark = {};

  @Output() save = new EventEmitter();

  onSave() {
    this.save.emit(this.bookmark);
  }
}