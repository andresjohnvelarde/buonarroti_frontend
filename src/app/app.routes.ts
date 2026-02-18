import { Routes } from '@angular/router';
import { PublicLayout } from './layout/public-layout/public-layout';
import { Home } from './pages/public/home/home';
import { Propiedad } from './pages/public/propiedad/propiedad';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    {
        path: 'home',
        component: PublicLayout,  // Layout con navbar home
        children: [
            { path: '', component: Home },
            { path: 'propiedad/:id', component: Propiedad },
            // { path: 'noticias', component: Noticias },
            // { path: 'reportajes', component: Reportajes },
            // { path: 'contacto', component: Contacto },
            // { path: 'detalle/:id', component: Detalle },

            // { path: 'login', component: Login },
            // { path: 'crear-cuenta', component: CrearCuenta },
        ]
    },
];
