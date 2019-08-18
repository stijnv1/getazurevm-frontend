import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzurevmDetailComponent } from './azurevm-detail.component';

describe('AzurevmDetailComponent', () => {
  let component: AzurevmDetailComponent;
  let fixture: ComponentFixture<AzurevmDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzurevmDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzurevmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
