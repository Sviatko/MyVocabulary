import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {FirebaseDataService} from "../services/firebase-data.service";
import {VocEntry} from "../vocab/voc-entry.models";


@Component({
  selector: 'app-vocab-edit',
  templateUrl: './vocab-edit.component.html',
  styleUrls: ['vocab-edit.component.less']
})
export class VocabEditComponent {
  vocabEntryForm: FormGroup;

  constructor(formBuilder: FormBuilder, private firebaseSvc: FirebaseDataService) {
    this.vocabEntryForm = formBuilder.group({
      'word': ['', Validators.required],
      'definition': ['', Validators.required],
      'author': ['', Validators.required],
      'nature': ['', Validators.required],
      'language': ['', Validators.required],
      'theme': ['', Validators.required],
      'example': ['', Validators.required],
      'importance': ['', Validators.required]
    });
  }

  onSubmit(value: any): void {
    let vocEntry: VocEntry = new VocEntry(value.word, value.definition, this.firebaseSvc.getUser().displayName, 'nature', 'language', 'theme', value.example, 3);
    console.log('you submitted value:', value.word);
    this.firebaseSvc.saveVoc(vocEntry);
/*    value = {};
    this.vocabEntryForm.setValue({
      word:    '',
      definition: ''
    });*/
    this.vocabEntryForm.reset()
  };
}
