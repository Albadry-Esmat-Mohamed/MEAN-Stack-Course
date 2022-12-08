import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplepostComponent } from './samplepost.component';

describe('SamplepostComponent', () => {
  let component: SamplepostComponent;
  let fixture: ComponentFixture<SamplepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplepostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
