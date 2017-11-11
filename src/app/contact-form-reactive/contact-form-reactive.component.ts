import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form-reactive',
  templateUrl: './contact-form-reactive.component.html',
  styleUrls: ['./contact-form-reactive.component.scss']
})
export class ContactFormReactiveComponent implements OnInit {
  contactFormReactive : FormGroup;

  constructor() {
    this.contactFormReactive = new FormGroup({
      name: new FormControl('', Validators.required),
      mobile: new FormControl('', [Validators.required, Validators.pattern('[0-9]{8}')]),
      mail: new FormControl('', [Validators.required, Validators.email]),
      postCode: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}')]),
      city: new FormControl('', Validators.required)
    })
   }

  ngOnInit() {
  }

  contactFormSubmitted(){
    console.log(this.contactFormReactive)
  }

}
