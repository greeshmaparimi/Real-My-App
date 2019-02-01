import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestendComponent } from './testend.component';

describe('TestendComponent', () => {
  let component: TestendComponent;
  let fixture: ComponentFixture<TestendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
