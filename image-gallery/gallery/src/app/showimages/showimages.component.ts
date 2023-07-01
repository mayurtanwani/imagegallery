import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageService } from '../image.service';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-showimages',
  templateUrl: './showimages.component.html',
  styleUrls: ['./showimages.component.css'],
})
export class ShowimagesComponent implements OnInit {
  constructor(private _http: HttpClient, private imageService: ImageService) {}

  faTrash = faTrash;
  faDeleteLeft = faDeleteLeft;
  data!: any;

  ngOnInit(): void {
    this.imageService.imageAdded.subscribe(() => {
      // Update the image list when a new image is added
      this.getImages();
    });
    this.getImages();
  }

  getImages() {
    this._http.get('http://localhost:5000/image').subscribe(
      (res) => {
        console.log(res);
        this.data = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteImage(id: any) {
    console.log(id);

    this._http.delete(`http://localhost:5000/image/${id}`).subscribe(
      (res) => {
        this.getImages();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
