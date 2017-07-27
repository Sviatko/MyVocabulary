import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-vocab-edit',
  templateUrl: './vocab-edit.component.html',
  styleUrls: ['./vocab-edit.component.css']
})
export class VocabEditComponent implements OnInit {
  vocabEntryForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.vocabEntryForm = formBuilder.group({
      'word':  ['', Validators.required],
      'definition':  ['', Validators.required],
      'author':  ['', Validators.required],
      'nature':  ['', Validators.required],
      'language':  ['', Validators.required],
      'theme':  ['', Validators.required],
      'example':  ['', Validators.required],
      'importance':  ['', Validators.required]
    });
  }

  onSubmit(value: any): void {
    console.log('you submitted value:', value.word);
  }


  ngOnInit() {
  }

}
