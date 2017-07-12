import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectItemNewComponent } from './object-item-new.component';

describe('ObjectItemNewComponent', () => {
  let component: ObjectItemNewComponent;
  let fixture: ComponentFixture<ObjectItemNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectItemNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectItemNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
