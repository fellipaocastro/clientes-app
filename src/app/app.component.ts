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

      // Add active state to sidbar nav links
      const path = window.location.href; // because the 'href' property of the DOM element is the absolute path
      $('#layoutSidenav_nav .sb-sidenav a.nav-link').each(() => {
        // @ts-ignore
        if (this.href === path) {
          $(this).addClass('active');
        }
      });

      // Toggle the side navigation
      $('#sidebarToggle').on('click', (e: { preventDefault: () => void }) => {
        e.preventDefault();
        $('body').toggleClass('sb-sidenav-toggled');
      });
    })(jQuery);
  }
}
