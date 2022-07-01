import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComponentesComponent } from './listar-componentes.component';

describe('ListarComponentesComponent', () => {
  let component: ListarComponentesComponent;
  let fixture: ComponentFixture<ListarComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarComponentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
