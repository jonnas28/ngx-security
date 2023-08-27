import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent {
  theme: string = 'light';
  constructor(private themeService: ThemeService) { }
  toggleTheme() {
    if (this.theme === 'light') {
      this.theme = 'dark';
    } else  {
      this.theme = 'light';
    }

    this.themeService.setTheme(this.theme)
  }
}
