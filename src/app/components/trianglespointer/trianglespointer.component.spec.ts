import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrianglespointerComponent } from './trianglespointer.component';

describe('TrianglespointerComponent', () => {
  let component: TrianglespointerComponent;
  let fixture: ComponentFixture<TrianglespointerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrianglespointerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrianglespointerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
