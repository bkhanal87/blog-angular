import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { ArticlesComponent } from '../articles/articles.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ArticlesComponent, ContactComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
}
