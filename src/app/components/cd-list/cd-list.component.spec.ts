import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdListComponent } from './cd-list.component';

describe('CdListComponent', () => {
  let component: CdListComponent;
  let fixture: ComponentFixture<CdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
