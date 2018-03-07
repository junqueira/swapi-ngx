import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
// import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FirstPageComponent } from './components/dashboard/first-page/first-page.component';


const APP_ROUTES: Routes = [
    {
        path: 'dashboard', component: DashboardComponent, //canActivate: [AuthGuard],
            children: [
                { path: 'principal', component: FirstPageComponent },
                { path: '**', redirectTo: 'principal' }
            ]
    },
    { path: '**', redirectTo: 'dashboard/principal' }
]

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadAllModules });