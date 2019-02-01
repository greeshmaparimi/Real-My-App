import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestliveComponent } from './testlive.component';

describe('TestliveComponent', () => {
  let component: TestliveComponent;
  let fixture: ComponentFixture<TestliveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestliveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
