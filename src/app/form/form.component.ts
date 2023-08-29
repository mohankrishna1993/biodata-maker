import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IData } from '../modal/idata';
import { BiodataService } from '../biodata.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],

})
export class FormComponent implements OnInit{

  biodataForm!: FormGroup;
  

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
    fathersContact: ""
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
      uploadPhotot: new FormControl('',Validators.required),

    });
  }

  onSubmit() {
    console.log(this.biodataForm.value)

    this.biodataService.setData(this.biodataForm.value);

    this.router.navigate(['/preview']);

  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {

      console.log(file);
    }
  }



}
