import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableAreaComponent } from './expandable-area.component';

describe('ExpandableAreaComponent', () => {
  let component: ExpandableAreaComponent;
  let fixture: ComponentFixture<ExpandableAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
