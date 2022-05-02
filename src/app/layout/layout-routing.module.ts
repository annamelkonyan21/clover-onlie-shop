import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {CanActivateUserGuard} from '../core/guard/canActivate.guard';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'categories',
                loadChildren: () => import('../dashboard/dashboard.module' )
                    .then(m => m.DashboardModule)
            },
            {
                path: 'collections',
                loadChildren: () => import('../collections/collections.module' )
                    .then(m => m.CollectionsModule)
            },
            {
                path: 'account',
                loadChildren: () => import('../account/account.module')
                    .then(m => m.AccountModule),
                canActivate: [CanActivateUserGuard]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [CanActivateUserGuard]
})
export class LayoutRoutingModule {
}
