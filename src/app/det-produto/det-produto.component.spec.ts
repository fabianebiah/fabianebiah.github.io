import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetProdutoComponent } from './det-produto.component';

describe('DetProdutoComponent', () => {
  let component: DetProdutoComponent;
  let fixture: ComponentFixture<DetProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
