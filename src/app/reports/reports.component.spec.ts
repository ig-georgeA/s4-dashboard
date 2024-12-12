import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_NAVBAR_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective } from '@infragistics/igniteui-angular';
import { ReportsComponent } from './reports.component';

describe('ReportsComponent', () => {
  let component: ReportsComponent;
  let fixture: ComponentFixture<ReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReportsComponent, NoopAnimationsModule, FormsModule, IGX_NAVBAR_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
