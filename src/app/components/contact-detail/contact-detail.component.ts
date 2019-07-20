import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  constructor() {
    this.contact = JSON.parse(sessionStorage.getItem('contact'));

   }

  ngOnInit() {
  }

}
