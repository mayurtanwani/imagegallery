import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  imageAdded: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  emitImageAdded(): void {
    this.imageAdded.emit();
  }
}
