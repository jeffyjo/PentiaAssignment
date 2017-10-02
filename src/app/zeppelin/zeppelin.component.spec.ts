import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeppelinComponent } from './zeppelin.component';

describe('ZeppelinComponent', () => {
  let component: ZeppelinComponent;
  let fixture: ComponentFixture<ZeppelinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeppelinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeppelinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
