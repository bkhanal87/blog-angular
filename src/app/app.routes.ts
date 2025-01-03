import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ArticlesComponent } from './articles/articles.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const routes: Routes = [
    {
        path: 'articles', 
        component:ArticlesComponent
    },
    {
        path: 'contact', 
        component:ContactComponent
    },
    {
        path: 'header',
        component:HeaderComponent
    },
    {
        path: 'footer', 
        component:FooterComponent
    },
    {
        path: '',
        redirectTo: '/articles',
        pathMatch: 'full'
    },
    {
        path: '**',
        component:PageNotFoundComponent
    }
]

