import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowimagesComponent } from './showimages.component';

describe('ShowimagesComponent', () => {
  let component: ShowimagesComponent;
  let fixture: ComponentFixture<ShowimagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowimagesComponent]
    });
    fixture = TestBed.createComponent(ShowimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
