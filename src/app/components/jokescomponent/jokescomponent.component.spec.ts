import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokescomponentComponent } from './jokescomponent.component';

describe('JokescomponentComponent', () => {
  let component: JokescomponentComponent;
  let fixture: ComponentFixture<JokescomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JokescomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JokescomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
