import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from '@modules/app-custom/components/account-setting/account-settings.component';
import { ActivityLogsComponent } from '@modules/app-custom/components/activity-logs/activity-logs.component';
import { NgbdTableComplete } from '@modules/app-custom/components/activity-logs/LOGS/table-complete';
import { LoginComponentCustom } from '@modules/app-custom/components/login/login.component';
import { RouteGuardService } from '@modules/app-custom/service/route-guard.service';
const routes: Routes = [
    // {
    //     path: '',
    //     pathMatch: 'full',
    //     redirectTo: '/auth/login',
    // },
    {path:'', component: LoginComponentCustom},
    {path:'login', component: LoginComponentCustom},
    {path:'account-setting', component: AccountSettingsComponent,canActivate:[RouteGuardService]},
    // {path:'activity-logs', component:ActivityLogsComponent,canActivate:[RouteGuardService]},
    {path:'activity-logs',component:NgbdTableComplete,canActivate:[RouteGuardService]},
    {
        path: 'charts',
        loadChildren: () =>
            import('modules/charts/charts-routing.module').then(m => m.ChartsRoutingModule),
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('modules/dashboard/dashboard-routing.module').then(
                m => m.DashboardRoutingModule
            ),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
    {
        path: 'tables',
        loadChildren: () =>
            import('modules/tables/tables-routing.module').then(m => m.TablesRoutingModule),
    },
    {
        path: 'version',
        loadChildren: () =>
            import('modules/utility/utility-routing.module').then(m => m.UtilityRoutingModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
