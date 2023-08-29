import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IData } from '../modal/idata';
import { BiodataService } from '../biodata.service';
import { Subject, takeUntil } from 'rxjs';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

// import * as html2pdf from 'html2pdf.js';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit,OnDestroy{

  private destroy$ = new Subject<void>();
  biodata: IData = {
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

  };

  constructor(private biodataService: BiodataService) {}


  ngOnInit() {
    console.log('insde preview');
    this.biodataService.getData().pipe(takeUntil(this.destroy$))
    .subscribe(data => {
      console.log(data);
      this.biodata = data;
    });

  }

  // download() {
  //   const element = document.getElementById('previewContent');

  //   if (element) {
  //     html2canvas(element).then((canvas) => {
  //       const imageData = canvas.toDataURL('image/png');
  //       const pdf = new jsPDF('p','mm','a4');

  //       const imgProps = pdf.getImageProperties(imageData);
  //       const pdfWidth = pdf.internal.pageSize.getWidth();
  //       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  //       pdf.addImage(imageData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  //       pdf.save('preview.pdf');
  //     });
  //   } else {
  //     console.error('Element with ID "previewContent" not found.');
  //   }
  // }

  public download() {
   html2canvas(document.getElementById('previewContent')!).then(canvas => {
    const contentDataURL = canvas.toDataURL('image/png');
    let pdf = new jsPDF('p','mm','a4');
    var width = pdf.internal.pageSize.getWidth();
    var height = canvas.height * width /canvas.width;
    pdf.addImage(contentDataURL,'PNG',0,0,width,height)
    pdf.save('output.pdf');

   })
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
