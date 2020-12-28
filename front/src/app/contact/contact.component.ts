import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators, FormGroup, Form } from "@angular/forms";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  title = 'email-validation-tutorial';
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4)]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(4)])
  });

  messageFormControl = new FormControl("", []);


  register() {
    let form = this.form.value;

    let user = {
      name: form.name,
      email: form.email,
      message: form.message
    }

    this.http.post("https://mamoot.be/sendmail", user).subscribe(
      data => {
        console.log("nameFormControl");
        let res: any = data;
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
      }, () => {
      }
    );
  }

  get email() {
    return this.form.get('email')
  }

  get name() {
    return this.form.get('email')
  }

  get message() {
    return this.form.get('email')
  }

}
