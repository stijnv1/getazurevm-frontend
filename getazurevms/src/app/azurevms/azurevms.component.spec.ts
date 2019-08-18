import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzurevmsComponent } from './azurevms.component';

describe('AzurevmsComponent', () => {
  let component: AzurevmsComponent;
  let fixture: ComponentFixture<AzurevmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzurevmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzurevmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
