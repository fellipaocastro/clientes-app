import { Component, AfterViewInit } from '@angular/core';

import jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'clientes-app';

  ngAfterViewInit() {
    (($) => {
      'use strict';

      // Toggle the side navigation
      $('#sidebarToggle').on('click', (e: { preventDefault: () => void }) => {
        e.preventDefault();
        $('body').toggleClass('sb-sidenav-toggled');
      });
    })(jQuery);
  }
}
