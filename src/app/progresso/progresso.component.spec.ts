import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressoComponent } from './progresso.component';

describe('ProgressoComponent', () => {
  let component: ProgressoComponent;
  let fixture: ComponentFixture<ProgressoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
