import { inject } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { Routes } from '@angular/router';
import { DashboardService } from 'app/modules/admin/dashboard/dashboard.service';

export default [
    {
        path     : '',
        component: DashboardComponent,
        resolve  : {
            data: () => inject(DashboardService).getData(),
        },
    },
] as Routes;
