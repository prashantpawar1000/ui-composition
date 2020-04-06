import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() serverAddress: String;
  @Input() title: String;
  @Output() loginSuccess = new EventEmitter();
  @Output() loginFail = new EventEmitter();

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.http.post(`${this.serverAddress}`, this.loginForm.value).subscribe(
      ({ data }: any) => {
        this.loginForm.reset();
        this.loginSuccess.emit(data);
      },
      ({ error: { data } }: any) => {
        this.loginFail.emit(data);
      }
    );
  }
}
