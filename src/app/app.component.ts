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
      $('#layoutSidenav_nav .sb-sidenav a.nav-link').each(
        (index: number, value: HTMLElement) => {
          // @ts-ignore
          if (value.href === path) {
            $(value).addClass('active');
          }
        }
      );

      // Toggle the side navigation
      $('#sidebarToggle').on('click', (e: { preventDefault: () => void }) => {
        e.preventDefault();
        $('body').toggleClass('sb-sidenav-toggled');
      });
    })(jQuery);
  }
}
