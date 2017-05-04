import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormBuilder]
})
export class AppComponent implements OnInit{
  title = 'app works!';

  ngForm: FormGroup;

  display: boolean = false;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.ngForm = this.fb.group({
      start: ['', [Validators.required, Validators.minLength(4)]],
      end: ['', [Validators.required, Validators.minLength(4)]],
      city: ['', []],
      address: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  showDialog() {
    this.display = true;
  }
}
