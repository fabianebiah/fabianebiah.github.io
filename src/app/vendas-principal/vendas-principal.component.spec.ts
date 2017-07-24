import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasPrincipalComponent } from './vendas-principal.component';

describe('VendasPrincipalComponent', () => {
  let component: VendasPrincipalComponent;
  let fixture: ComponentFixture<VendasPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendasPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendasPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
