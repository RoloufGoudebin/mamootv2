import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  subjectFormControl = new FormControl("", []);

  messageFormControl = new FormControl("", []);


  register() {
    let user = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      subject: this.subjectFormControl.value,
      question: this.messageFormControl.value
    }

    /*this.http.post("176.31.162.148/sendmail", user).subscribe(
      data => {
        let res: any = data;
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
      }, () => {
      }
    );
  }*/
  }

}
