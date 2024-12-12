import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_NAVBAR_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IgxAvatarComponent, IGX_DATE_PICKER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxRippleDirective } from '@infragistics/igniteui-angular';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DashboardComponent, NoopAnimationsModule, FormsModule, IGX_NAVBAR_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IgxAvatarComponent, IGX_DATE_PICKER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxRippleDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
