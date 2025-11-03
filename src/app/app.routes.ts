import { Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { AboutComponent } from '../component/about/about.component';
import { PortfolioComponent } from '../component/portfolio/portfolio.component';
import { ContactComponent } from '../component/contact/contact.component';
import { NotfoundComponent } from '../component/notfound/notfound.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: "Home"
    },
    {
        path: 'about',
        component: AboutComponent,
        title: "About"
    }
    ,
    {
        path: 'portfolio',
        component: PortfolioComponent,
        title: "Portfolio"
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact'
    },
    {
        path: 'not-found',
        component: NotfoundComponent,
        title: 'Ooh!! Not found'
    },
    {
        path: '**', 
        redirectTo: 'not-found', 
        pathMatch: 'full'
    },

];
