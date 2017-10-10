import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm : NgForm;

  constructor() { }

  ngOnInit() {
  }

  contactFormSubmitted(contactForm : NgForm) {
    console.log(contactForm.controls, contactForm.valid);

    // contactForm.reset();

  }

}
