import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabEditComponent } from './vocab-edit.component';

describe('VocabEditComponent', () => {
  let component: VocabEditComponent;
  let fixture: ComponentFixture<VocabEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
