import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IGX_INPUT_GROUP_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';
import { RevealSdkSettings, RevealViewOptions } from '@revealbi/ui';

@Component({
  selector: 'app-reports',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReportsComponent {
  dashboardOptions: RevealViewOptions = {
    visualizations: {
      menu: {
        copy: false,
        duplicate: false
      }
    }
  };
  constructor() {
    RevealSdkSettings.serverUrl = 'https://samples.revealbi.io/upmedia-backend/reveal-api/';
  }
}
