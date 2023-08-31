import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IData } from '../modal/idata';
import { BiodataService } from '../biodata.service';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],

})
export class FormComponent implements OnInit {

  biodataForm!: FormGroup;
  selectedPhoto: string | ArrayBuffer | null | undefined = null; // Initialize it to null


  // imgChangeEvt: any = ""
  // cropImgPreview: any= ""

  constructor(private biodataService: BiodataService,
              private router: Router) {}

  data: IData = {
    name: "",
    dateOfBirth: new Date(),
    placeOfBirth: "",
    profession: "",
    education: "",
    rashi: "",
    star: "",
    height: "",
    religion: "",
    gotram: "",
    caste: "",
    subCaste: "",
    siblings: "",
    maternalSurname: "",
    relativesSurname: "",
    fathersContact: "",
    uploadPhoto: null,

  };

  ngOnInit() {
    this.biodataForm = new FormGroup({
      name: new FormControl('', Validators.required),
      dateOfBirth: new FormControl(null, Validators.required),
      placeOfBirth: new FormControl('', Validators.required),
      profession: new FormControl('',Validators.required),
      education: new FormControl('',Validators.required),
      rashi: new FormControl('',Validators.required),
      star: new FormControl('',Validators.required),
      height: new FormControl('',Validators.required),
      religion: new FormControl('',Validators.required),
      gotram: new FormControl('',Validators.required),
      caste: new FormControl('',Validators.required),
      subCaste: new FormControl('',Validators.required),
      maternalSurname: new FormControl('',Validators.required),
      siblings: new FormControl('',Validators.required),
      relativesSurname: new FormControl('',Validators.required),
      fathersContact: new FormControl('',Validators.required),
      uploadPhoto: new FormControl('',Validators.required),

    });
  }

  onSubmit() {
    console.log(this.biodataForm.value);

    this.biodataService.setData(this.biodataForm.value);

    this.router.navigate(['/preview']);

  }
 onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedPhoto = e.target?.result;
        console.log(this.selectedPhoto);
        this.biodataService.photo.next(this.selectedPhoto);
        this.biodataForm.patchValue({
          uploadPhoto: this.selectedPhoto
        });
      };
      reader.readAsDataURL(file);
    } else {
      this.selectedPhoto = null; // Set it to null when no file is selected
    }
    // Also, update the selectedPhoto property in the biodata object
    console.log(this.selectedPhoto);
    this.data.uploadPhoto = this.selectedPhoto;

  }

}

