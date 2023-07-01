import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageService } from '../image.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'appBootstrap';
  imageForm: FormGroup | any;
  uploadedimage: any;

  closeResult: string = '';
  constructor(
    private _http: HttpClient,
    private imageService: ImageService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.imageForm = new FormGroup({
      title: new FormControl(),
      caption: new FormControl(),
    });
  }

  uploadImage(image: any) {
    this.uploadedimage = image.target.files[0];
    console.log(this.uploadedimage);
  }

  submitForm() {
    console.log(this.imageForm);
    console.log(this.imageForm.title);
    console.log(this.imageForm.caption);
    const formData: any = new FormData();
    formData.append('image', this.uploadedimage);
    formData.append('title', this.imageForm.controls.title.value);
    formData.append('caption', this.imageForm.controls.caption.value);

    console.log(Object.fromEntries(formData));
    this._http.post('http://localhost:5000/image', formData).subscribe(
      (res) => {
        console.log(res);
        this.imageService.emitImageAdded();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
