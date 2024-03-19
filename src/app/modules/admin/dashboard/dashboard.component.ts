import { DecimalPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { ApexOptions, NgApexchartsModule } from 'ng-apexcharts';
import { Subject, takeUntil } from 'rxjs';

import { DashboardService } from '../dashboard/dashboard.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

@Component({
  selector     : 'app-dashboard',
  templateUrl  : './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone     : true,
  imports        : [NgbModule,MatTabsModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule, MatIconModule, MatMenuModule, MatButtonToggleModule, NgApexchartsModule, MatTooltipModule, NgFor, DecimalPipe],
})

export class DashboardComponent implements OnInit, OnDestroy
{
    chartNewVsReturning: ApexOptions;

    chartVisitors: ApexOptions;
    chartOptions : ApexOptions;
    data: any;
    starRating = 0;
    uniqueVisitors: 500;
    QrCodeData: any = [];

    visitors :  any =  {
        series: {
            'this-year': [
                {
                    name: 'Visitors',
                    data: [
                        {
                            x: now.minus({months: 12}).plus({day: 1}).toJSDate(),
                            y: 4884,
                        },
                        {
                            x: now.minus({months: 12}).plus({day: 4}).toJSDate(),
                            y: 5351,
                        },
                        {
                            x: now.minus({months: 12}).plus({day: 7}).toJSDate(),
                            y: 5293,
                        },
                        {
                            x: now.minus({months: 12}).plus({day: 10}).toJSDate(),
                            y: 4908,
                        },
                        {
                            x: now.minus({months: 12}).plus({day: 13}).toJSDate(),
                            y: 5027,
                        },
                        {
                            x: now.minus({months: 12}).plus({day: 16}).toJSDate(),
                            y: 4837,
                        },
                        {
                            x: now.minus({months: 12}).plus({day: 19}).toJSDate(),
                            y: 4484,
                        },
                        {
                            x: now.minus({months: 12}).plus({day: 22}).toJSDate(),
                            y: 4071,
                        },
                        {
                            x: now.minus({months: 12}).plus({day: 25}).toJSDate(),
                            y: 4124,
                        },
                        {
                            x: now.minus({months: 12}).plus({day: 28}).toJSDate(),
                            y: 4563,
                        },
                        {
                            x: now.minus({months: 11}).plus({day: 1}).toJSDate(),
                            y: 3820,
                        },
                        {
                            x: now.minus({months: 11}).plus({day: 4}).toJSDate(),
                            y: 3968,
                        },
                        {
                            x: now.minus({months: 11}).plus({day: 7}).toJSDate(),
                            y: 4102,
                        },
                        {
                            x: now.minus({months: 11}).plus({day: 10}).toJSDate(),
                            y: 3941,
                        },
                        {
                            x: now.minus({months: 11}).plus({day: 13}).toJSDate(),
                            y: 3566,
                        },
                        {
                            x: now.minus({months: 11}).plus({day: 16}).toJSDate(),
                            y: 3853,
                        },
                        {
                            x: now.minus({months: 11}).plus({day: 19}).toJSDate(),
                            y: 3853,
                        },
                        {
                            x: now.minus({months: 11}).plus({day: 22}).toJSDate(),
                            y: 4069,
                        },
                        {
                            x: now.minus({months: 11}).plus({day: 25}).toJSDate(),
                            y: 3879,
                        },
                        {
                            x: now.minus({months: 11}).plus({day: 28}).toJSDate(),
                            y: 4298,
                        },
                        {
                            x: now.minus({months: 10}).plus({day: 1}).toJSDate(),
                            y: 4355,
                        },
                        {
                            x: now.minus({months: 10}).plus({day: 4}).toJSDate(),
                            y: 4065,
                        },
                        {
                            x: now.minus({months: 10}).plus({day: 7}).toJSDate(),
                            y: 3650,
                        },
                        {
                            x: now.minus({months: 10}).plus({day: 10}).toJSDate(),
                            y: 3379,
                        },
                        {
                            x: now.minus({months: 10}).plus({day: 13}).toJSDate(),
                            y: 3191,
                        },
                        {
                            x: now.minus({months: 10}).plus({day: 16}).toJSDate(),
                            y: 2968,
                        },
                        {
                            x: now.minus({months: 10}).plus({day: 19}).toJSDate(),
                            y: 2957,
                        },
                        {
                            x: now.minus({months: 10}).plus({day: 22}).toJSDate(),
                            y: 3313,
                        },
                        {
                            x: now.minus({months: 10}).plus({day: 25}).toJSDate(),
                            y: 3708,
                        },
                        {
                            x: now.minus({months: 10}).plus({day: 28}).toJSDate(),
                            y: 3586,
                        },
                        {
                            x: now.minus({months: 9}).plus({day: 1}).toJSDate(),
                            y: 3965,
                        },
                        {
                            x: now.minus({months: 9}).plus({day: 4}).toJSDate(),
                            y: 3901,
                        },
                        {
                            x: now.minus({months: 9}).plus({day: 7}).toJSDate(),
                            y: 3410,
                        },
                        {
                            x: now.minus({months: 9}).plus({day: 10}).toJSDate(),
                            y: 3748,
                        },
                        {
                            x: now.minus({months: 9}).plus({day: 13}).toJSDate(),
                            y: 3929,
                        },
                        {
                            x: now.minus({months: 9}).plus({day: 16}).toJSDate(),
                            y: 3846,
                        },
                        {
                            x: now.minus({months: 9}).plus({day: 19}).toJSDate(),
                            y: 3771,
                        },
                        {
                            x: now.minus({months: 9}).plus({day: 22}).toJSDate(),
                            y: 4015,
                        },
                        {
                            x: now.minus({months: 9}).plus({day: 25}).toJSDate(),
                            y: 3589,
                        },
                        {
                            x: now.minus({months: 9}).plus({day: 28}).toJSDate(),
                            y: 3150,
                        },
                        {
                            x: now.minus({months: 8}).plus({day: 1}).toJSDate(),
                            y: 3050,
                        },
                        {
                            x: now.minus({months: 8}).plus({day: 4}).toJSDate(),
                            y: 2574,
                        },
                        {
                            x: now.minus({months: 8}).plus({day: 7}).toJSDate(),
                            y: 2823,
                        },
                        {
                            x: now.minus({months: 8}).plus({day: 10}).toJSDate(),
                            y: 2848,
                        },
                        {
                            x: now.minus({months: 8}).plus({day: 13}).toJSDate(),
                            y: 3000,
                        },
                        {
                            x: now.minus({months: 8}).plus({day: 16}).toJSDate(),
                            y: 3216,
                        },
                        {
                            x: now.minus({months: 8}).plus({day: 19}).toJSDate(),
                            y: 3299,
                        },
                        {
                            x: now.minus({months: 8}).plus({day: 22}).toJSDate(),
                            y: 3768,
                        },
                        {
                            x: now.minus({months: 8}).plus({day: 25}).toJSDate(),
                            y: 3524,
                        },
                        {
                            x: now.minus({months: 8}).plus({day: 28}).toJSDate(),
                            y: 3918,
                        },
                        {
                            x: now.minus({months: 7}).plus({day: 1}).toJSDate(),
                            y: 4145,
                        },
                        {
                            x: now.minus({months: 7}).plus({day: 4}).toJSDate(),
                            y: 4378,
                        },
                        {
                            x: now.minus({months: 7}).plus({day: 7}).toJSDate(),
                            y: 3941,
                        },
                        {
                            x: now.minus({months: 7}).plus({day: 10}).toJSDate(),
                            y: 3932,
                        },
                        {
                            x: now.minus({months: 7}).plus({day: 13}).toJSDate(),
                            y: 4380,
                        },
                        {
                            x: now.minus({months: 7}).plus({day: 16}).toJSDate(),
                            y: 4243,
                        },
                        {
                            x: now.minus({months: 7}).plus({day: 19}).toJSDate(),
                            y: 4367,
                        },
                        {
                            x: now.minus({months: 7}).plus({day: 22}).toJSDate(),
                            y: 3879,
                        },
                        {
                            x: now.minus({months: 7}).plus({day: 25}).toJSDate(),
                            y: 4357,
                        },
                        {
                            x: now.minus({months: 7}).plus({day: 28}).toJSDate(),
                            y: 4181,
                        },
                        {
                            x: now.minus({months: 6}).plus({day: 1}).toJSDate(),
                            y: 4619,
                        },
                        {
                            x: now.minus({months: 6}).plus({day: 4}).toJSDate(),
                            y: 4769,
                        },
                        {
                            x: now.minus({months: 6}).plus({day: 7}).toJSDate(),
                            y: 4901,
                        },
                        {
                            x: now.minus({months: 6}).plus({day: 10}).toJSDate(),
                            y: 4640,
                        },
                        {
                            x: now.minus({months: 6}).plus({day: 13}).toJSDate(),
                            y: 5128,
                        },
                        {
                            x: now.minus({months: 6}).plus({day: 16}).toJSDate(),
                            y: 5015,
                        },
                        {
                            x: now.minus({months: 6}).plus({day: 19}).toJSDate(),
                            y: 5360,
                        },
                        {
                            x: now.minus({months: 6}).plus({day: 22}).toJSDate(),
                            y: 5608,
                        },
                        {
                            x: now.minus({months: 6}).plus({day: 25}).toJSDate(),
                            y: 5272,
                        },
                        {
                            x: now.minus({months: 6}).plus({day: 28}).toJSDate(),
                            y: 5660,
                        },
                        {
                            x: now.minus({months: 5}).plus({day: 1}).toJSDate(),
                            y: 5836,
                        },
                        {
                            x: now.minus({months: 5}).plus({day: 4}).toJSDate(),
                            y: 5659,
                        },
                        {
                            x: now.minus({months: 5}).plus({day: 7}).toJSDate(),
                            y: 5575,
                        },
                        {
                            x: now.minus({months: 5}).plus({day: 10}).toJSDate(),
                            y: 5474,
                        },
                        {
                            x: now.minus({months: 5}).plus({day: 13}).toJSDate(),
                            y: 5427,
                        },
                        {
                            x: now.minus({months: 5}).plus({day: 16}).toJSDate(),
                            y: 5865,
                        },
                        {
                            x: now.minus({months: 5}).plus({day: 19}).toJSDate(),
                            y: 5700,
                        },
                        {
                            x: now.minus({months: 5}).plus({day: 22}).toJSDate(),
                            y: 6052,
                        },
                        {
                            x: now.minus({months: 5}).plus({day: 25}).toJSDate(),
                            y: 5760,
                        },
                        {
                            x: now.minus({months: 5}).plus({day: 28}).toJSDate(),
                            y: 5648,
                        },
                        {
                            x: now.minus({months: 4}).plus({day: 1}).toJSDate(),
                            y: 5435,
                        },
                        {
                            x: now.minus({months: 4}).plus({day: 4}).toJSDate(),
                            y: 5239,
                        },
                        {
                            x: now.minus({months: 4}).plus({day: 7}).toJSDate(),
                            y: 5452,
                        },
                        {
                            x: now.minus({months: 4}).plus({day: 10}).toJSDate(),
                            y: 5416,
                        },
                        {
                            x: now.minus({months: 4}).plus({day: 13}).toJSDate(),
                            y: 5195,
                        },
                        {
                            x: now.minus({months: 4}).plus({day: 16}).toJSDate(),
                            y: 5119,
                        },
                        {
                            x: now.minus({months: 4}).plus({day: 19}).toJSDate(),
                            y: 4635,
                        },
                        {
                            x: now.minus({months: 4}).plus({day: 22}).toJSDate(),
                            y: 4833,
                        },
                        {
                            x: now.minus({months: 4}).plus({day: 25}).toJSDate(),
                            y: 4584,
                        },
                        {
                            x: now.minus({months: 4}).plus({day: 28}).toJSDate(),
                            y: 4822,
                        },
                        {
                            x: now.minus({months: 3}).plus({day: 1}).toJSDate(),
                            y: 4582,
                        },
                        {
                            x: now.minus({months: 3}).plus({day: 4}).toJSDate(),
                            y: 4348,
                        },
                        {
                            x: now.minus({months: 3}).plus({day: 7}).toJSDate(),
                            y: 4132,
                        },
                        {
                            x: now.minus({months: 3}).plus({day: 10}).toJSDate(),
                            y: 4099,
                        },
                        {
                            x: now.minus({months: 3}).plus({day: 13}).toJSDate(),
                            y: 3849,
                        },
                        {
                            x: now.minus({months: 3}).plus({day: 16}).toJSDate(),
                            y: 4010,
                        },
                        {
                            x: now.minus({months: 3}).plus({day: 19}).toJSDate(),
                            y: 4486,
                        },
                        {
                            x: now.minus({months: 3}).plus({day: 22}).toJSDate(),
                            y: 4403,
                        },
                        {
                            x: now.minus({months: 3}).plus({day: 25}).toJSDate(),
                            y: 4141,
                        },
                        {
                            x: now.minus({months: 3}).plus({day: 28}).toJSDate(),
                            y: 3780,
                        },
                        {
                            x: now.minus({months: 2}).plus({day: 1}).toJSDate(),
                            y: 3524,
                        },
                        {
                            x: now.minus({months: 2}).plus({day: 4}).toJSDate(),
                            y: 3212,
                        },
                        {
                            x: now.minus({months: 2}).plus({day: 7}).toJSDate(),
                            y: 3568,
                        },
                        {
                            x: now.minus({months: 2}).plus({day: 10}).toJSDate(),
                            y: 3800,
                        },
                        {
                            x: now.minus({months: 2}).plus({day: 13}).toJSDate(),
                            y: 3796,
                        },
                        {
                            x: now.minus({months: 2}).plus({day: 16}).toJSDate(),
                            y: 3870,
                        },
                        {
                            x: now.minus({months: 2}).plus({day: 19}).toJSDate(),
                            y: 3745,
                        },
                        {
                            x: now.minus({months: 2}).plus({day: 22}).toJSDate(),
                            y: 3751,
                        },
                        {
                            x: now.minus({months: 2}).plus({day: 25}).toJSDate(),
                            y: 3310,
                        },
                        {
                            x: now.minus({months: 2}).plus({day: 28}).toJSDate(),
                            y: 3509,
                        },
                        {
                            x: now.minus({months: 1}).plus({day: 1}).toJSDate(),
                            y: 3187,
                        },
                        {
                            x: now.minus({months: 1}).plus({day: 4}).toJSDate(),
                            y: 2918,
                        },
                        {
                            x: now.minus({months: 1}).plus({day: 7}).toJSDate(),
                            y: 3191,
                        },
                        {
                            x: now.minus({months: 1}).plus({day: 10}).toJSDate(),
                            y: 3437,
                        },
                        {
                            x: now.minus({months: 1}).plus({day: 13}).toJSDate(),
                            y: 3291,
                        },
                        {
                            x: now.minus({months: 1}).plus({day: 16}).toJSDate(),
                            y: 3317,
                        },
                        {
                            x: now.minus({months: 1}).plus({day: 19}).toJSDate(),
                            y: 3716,
                        },
                        {
                            x: now.minus({months: 1}).plus({day: 22}).toJSDate(),
                            y: 3260,
                        },
                        {
                            x: now.minus({months: 1}).plus({day: 25}).toJSDate(),
                            y: 3694,
                        },
                        {
                            x: now.minus({months: 1}).plus({day: 28}).toJSDate(),
                            y: 3598,
                        },
                    ],
                },
            ],
            'last-year': [
                {
                    name: 'Visitors',
                    data: [
                        {
                            x: now.minus({months: 24}).plus({day: 1}).toJSDate(),
                            y: 2021,
                        },
                        {
                            x: now.minus({months: 24}).plus({day: 4}).toJSDate(),
                            y: 1749,
                        },
                        {
                            x: now.minus({months: 24}).plus({day: 7}).toJSDate(),
                            y: 1654,
                        },
                        {
                            x: now.minus({months: 24}).plus({day: 10}).toJSDate(),
                            y: 1900,
                        },
                        {
                            x: now.minus({months: 24}).plus({day: 13}).toJSDate(),
                            y: 1647,
                        },
                        {
                            x: now.minus({months: 24}).plus({day: 16}).toJSDate(),
                            y: 1315,
                        },
                        {
                            x: now.minus({months: 24}).plus({day: 19}).toJSDate(),
                            y: 1807,
                        },
                        {
                            x: now.minus({months: 24}).plus({day: 22}).toJSDate(),
                            y: 1793,
                        },
                        {
                            x: now.minus({months: 24}).plus({day: 25}).toJSDate(),
                            y: 1892,
                        },
                        {
                            x: now.minus({months: 24}).plus({day: 28}).toJSDate(),
                            y: 1846,
                        },
                        {
                            x: now.minus({months: 23}).plus({day: 1}).toJSDate(),
                            y: 1804,
                        },
                        {
                            x: now.minus({months: 23}).plus({day: 4}).toJSDate(),
                            y: 1778,
                        },
                        {
                            x: now.minus({months: 23}).plus({day: 7}).toJSDate(),
                            y: 2015,
                        },
                        {
                            x: now.minus({months: 23}).plus({day: 10}).toJSDate(),
                            y: 1892,
                        },
                        {
                            x: now.minus({months: 23}).plus({day: 13}).toJSDate(),
                            y: 1708,
                        },
                        {
                            x: now.minus({months: 23}).plus({day: 16}).toJSDate(),
                            y: 1711,
                        },
                        {
                            x: now.minus({months: 23}).plus({day: 19}).toJSDate(),
                            y: 1570,
                        },
                        {
                            x: now.minus({months: 23}).plus({day: 22}).toJSDate(),
                            y: 1507,
                        },
                        {
                            x: now.minus({months: 23}).plus({day: 25}).toJSDate(),
                            y: 1451,
                        },
                        {
                            x: now.minus({months: 23}).plus({day: 28}).toJSDate(),
                            y: 1522,
                        },
                        {
                            x: now.minus({months: 22}).plus({day: 1}).toJSDate(),
                            y: 1977,
                        },
                        {
                            x: now.minus({months: 22}).plus({day: 4}).toJSDate(),
                            y: 2367,
                        },
                        {
                            x: now.minus({months: 22}).plus({day: 7}).toJSDate(),
                            y: 2798,
                        },
                        {
                            x: now.minus({months: 22}).plus({day: 10}).toJSDate(),
                            y: 3080,
                        },
                        {
                            x: now.minus({months: 22}).plus({day: 13}).toJSDate(),
                            y: 2856,
                        },
                        {
                            x: now.minus({months: 22}).plus({day: 16}).toJSDate(),
                            y: 2745,
                        },
                        {
                            x: now.minus({months: 22}).plus({day: 19}).toJSDate(),
                            y: 2750,
                        },
                        {
                            x: now.minus({months: 22}).plus({day: 22}).toJSDate(),
                            y: 2728,
                        },
                        {
                            x: now.minus({months: 22}).plus({day: 25}).toJSDate(),
                            y: 2436,
                        },
                        {
                            x: now.minus({months: 22}).plus({day: 28}).toJSDate(),
                            y: 2289,
                        },
                        {
                            x: now.minus({months: 21}).plus({day: 1}).toJSDate(),
                            y: 2804,
                        },
                        {
                            x: now.minus({months: 21}).plus({day: 4}).toJSDate(),
                            y: 2777,
                        },
                        {
                            x: now.minus({months: 21}).plus({day: 7}).toJSDate(),
                            y: 3024,
                        },
                        {
                            x: now.minus({months: 21}).plus({day: 10}).toJSDate(),
                            y: 2657,
                        },
                        {
                            x: now.minus({months: 21}).plus({day: 13}).toJSDate(),
                            y: 2218,
                        },
                        {
                            x: now.minus({months: 21}).plus({day: 16}).toJSDate(),
                            y: 1964,
                        },
                        {
                            x: now.minus({months: 21}).plus({day: 19}).toJSDate(),
                            y: 1674,
                        },
                        {
                            x: now.minus({months: 21}).plus({day: 22}).toJSDate(),
                            y: 1721,
                        },
                        {
                            x: now.minus({months: 21}).plus({day: 25}).toJSDate(),
                            y: 2005,
                        },
                        {
                            x: now.minus({months: 21}).plus({day: 28}).toJSDate(),
                            y: 1613,
                        },
                        {
                            x: now.minus({months: 20}).plus({day: 1}).toJSDate(),
                            y: 1071,
                        },
                        {
                            x: now.minus({months: 20}).plus({day: 4}).toJSDate(),
                            y: 1079,
                        },
                        {
                            x: now.minus({months: 20}).plus({day: 7}).toJSDate(),
                            y: 1133,
                        },
                        {
                            x: now.minus({months: 20}).plus({day: 10}).toJSDate(),
                            y: 1536,
                        },
                        {
                            x: now.minus({months: 20}).plus({day: 13}).toJSDate(),
                            y: 2016,
                        },
                        {
                            x: now.minus({months: 20}).plus({day: 16}).toJSDate(),
                            y: 2256,
                        },
                        {
                            x: now.minus({months: 20}).plus({day: 19}).toJSDate(),
                            y: 1934,
                        },
                        {
                            x: now.minus({months: 20}).plus({day: 22}).toJSDate(),
                            y: 1832,
                        },
                        {
                            x: now.minus({months: 20}).plus({day: 25}).toJSDate(),
                            y: 2075,
                        },
                        {
                            x: now.minus({months: 20}).plus({day: 28}).toJSDate(),
                            y: 1709,
                        },
                        {
                            x: now.minus({months: 19}).plus({day: 1}).toJSDate(),
                            y: 1831,
                        },
                        {
                            x: now.minus({months: 19}).plus({day: 4}).toJSDate(),
                            y: 1434,
                        },
                        {
                            x: now.minus({months: 19}).plus({day: 7}).toJSDate(),
                            y: 1293,
                        },
                        {
                            x: now.minus({months: 19}).plus({day: 10}).toJSDate(),
                            y: 1064,
                        },
                        {
                            x: now.minus({months: 19}).plus({day: 13}).toJSDate(),
                            y: 1080,
                        },
                        {
                            x: now.minus({months: 19}).plus({day: 16}).toJSDate(),
                            y: 1032,
                        },
                        {
                            x: now.minus({months: 19}).plus({day: 19}).toJSDate(),
                            y: 1280,
                        },
                        {
                            x: now.minus({months: 19}).plus({day: 22}).toJSDate(),
                            y: 1344,
                        },
                        {
                            x: now.minus({months: 19}).plus({day: 25}).toJSDate(),
                            y: 1835,
                        },
                        {
                            x: now.minus({months: 19}).plus({day: 28}).toJSDate(),
                            y: 2287,
                        },
                        {
                            x: now.minus({months: 18}).plus({day: 1}).toJSDate(),
                            y: 2692,
                        },
                        {
                            x: now.minus({months: 18}).plus({day: 4}).toJSDate(),
                            y: 2250,
                        },
                        {
                            x: now.minus({months: 18}).plus({day: 7}).toJSDate(),
                            y: 1814,
                        },
                        {
                            x: now.minus({months: 18}).plus({day: 10}).toJSDate(),
                            y: 1906,
                        },
                        {
                            x: now.minus({months: 18}).plus({day: 13}).toJSDate(),
                            y: 1973,
                        },
                        {
                            x: now.minus({months: 18}).plus({day: 16}).toJSDate(),
                            y: 1882,
                        },
                        {
                            x: now.minus({months: 18}).plus({day: 19}).toJSDate(),
                            y: 2333,
                        },
                        {
                            x: now.minus({months: 18}).plus({day: 22}).toJSDate(),
                            y: 2048,
                        },
                        {
                            x: now.minus({months: 18}).plus({day: 25}).toJSDate(),
                            y: 2547,
                        },
                        {
                            x: now.minus({months: 18}).plus({day: 28}).toJSDate(),
                            y: 2884,
                        },
                        {
                            x: now.minus({months: 17}).plus({day: 1}).toJSDate(),
                            y: 2771,
                        },
                        {
                            x: now.minus({months: 17}).plus({day: 4}).toJSDate(),
                            y: 2522,
                        },
                        {
                            x: now.minus({months: 17}).plus({day: 7}).toJSDate(),
                            y: 2543,
                        },
                        {
                            x: now.minus({months: 17}).plus({day: 10}).toJSDate(),
                            y: 2413,
                        },
                        {
                            x: now.minus({months: 17}).plus({day: 13}).toJSDate(),
                            y: 2002,
                        },
                        {
                            x: now.minus({months: 17}).plus({day: 16}).toJSDate(),
                            y: 1838,
                        },
                        {
                            x: now.minus({months: 17}).plus({day: 19}).toJSDate(),
                            y: 1830,
                        },
                        {
                            x: now.minus({months: 17}).plus({day: 22}).toJSDate(),
                            y: 1872,
                        },
                        {
                            x: now.minus({months: 17}).plus({day: 25}).toJSDate(),
                            y: 2246,
                        },
                        {
                            x: now.minus({months: 17}).plus({day: 28}).toJSDate(),
                            y: 2171,
                        },
                        {
                            x: now.minus({months: 16}).plus({day: 1}).toJSDate(),
                            y: 2988,
                        },
                        {
                            x: now.minus({months: 16}).plus({day: 4}).toJSDate(),
                            y: 2694,
                        },
                        {
                            x: now.minus({months: 16}).plus({day: 7}).toJSDate(),
                            y: 2806,
                        },
                        {
                            x: now.minus({months: 16}).plus({day: 10}).toJSDate(),
                            y: 3040,
                        },
                        {
                            x: now.minus({months: 16}).plus({day: 13}).toJSDate(),
                            y: 2898,
                        },
                        {
                            x: now.minus({months: 16}).plus({day: 16}).toJSDate(),
                            y: 3013,
                        },
                        {
                            x: now.minus({months: 16}).plus({day: 19}).toJSDate(),
                            y: 2760,
                        },
                        {
                            x: now.minus({months: 16}).plus({day: 22}).toJSDate(),
                            y: 3021,
                        },
                        {
                            x: now.minus({months: 16}).plus({day: 25}).toJSDate(),
                            y: 2688,
                        },
                        {
                            x: now.minus({months: 16}).plus({day: 28}).toJSDate(),
                            y: 2572,
                        },
                        {
                            x: now.minus({months: 15}).plus({day: 1}).toJSDate(),
                            y: 2789,
                        },
                        {
                            x: now.minus({months: 15}).plus({day: 4}).toJSDate(),
                            y: 3069,
                        },
                        {
                            x: now.minus({months: 15}).plus({day: 7}).toJSDate(),
                            y: 3142,
                        },
                        {
                            x: now.minus({months: 15}).plus({day: 10}).toJSDate(),
                            y: 3614,
                        },
                        {
                            x: now.minus({months: 15}).plus({day: 13}).toJSDate(),
                            y: 3202,
                        },
                        {
                            x: now.minus({months: 15}).plus({day: 16}).toJSDate(),
                            y: 2730,
                        },
                        {
                            x: now.minus({months: 15}).plus({day: 19}).toJSDate(),
                            y: 2951,
                        },
                        {
                            x: now.minus({months: 15}).plus({day: 22}).toJSDate(),
                            y: 3267,
                        },
                        {
                            x: now.minus({months: 15}).plus({day: 25}).toJSDate(),
                            y: 2882,
                        },
                        {
                            x: now.minus({months: 15}).plus({day: 28}).toJSDate(),
                            y: 2885,
                        },
                        {
                            x: now.minus({months: 14}).plus({day: 1}).toJSDate(),
                            y: 2915,
                        },
                        {
                            x: now.minus({months: 14}).plus({day: 4}).toJSDate(),
                            y: 2790,
                        },
                        {
                            x: now.minus({months: 14}).plus({day: 7}).toJSDate(),
                            y: 3071,
                        },
                        {
                            x: now.minus({months: 14}).plus({day: 10}).toJSDate(),
                            y: 2802,
                        },
                        {
                            x: now.minus({months: 14}).plus({day: 13}).toJSDate(),
                            y: 2382,
                        },
                        {
                            x: now.minus({months: 14}).plus({day: 16}).toJSDate(),
                            y: 1883,
                        },
                        {
                            x: now.minus({months: 14}).plus({day: 19}).toJSDate(),
                            y: 1448,
                        },
                        {
                            x: now.minus({months: 14}).plus({day: 22}).toJSDate(),
                            y: 1176,
                        },
                        {
                            x: now.minus({months: 14}).plus({day: 25}).toJSDate(),
                            y: 1275,
                        },
                        {
                            x: now.minus({months: 14}).plus({day: 28}).toJSDate(),
                            y: 1136,
                        },
                        {
                            x: now.minus({months: 13}).plus({day: 1}).toJSDate(),
                            y: 1160,
                        },
                        {
                            x: now.minus({months: 13}).plus({day: 4}).toJSDate(),
                            y: 1524,
                        },
                        {
                            x: now.minus({months: 13}).plus({day: 7}).toJSDate(),
                            y: 1305,
                        },
                        {
                            x: now.minus({months: 13}).plus({day: 10}).toJSDate(),
                            y: 1725,
                        },
                        {
                            x: now.minus({months: 13}).plus({day: 13}).toJSDate(),
                            y: 1850,
                        },
                        {
                            x: now.minus({months: 13}).plus({day: 16}).toJSDate(),
                            y: 2304,
                        },
                        {
                            x: now.minus({months: 13}).plus({day: 19}).toJSDate(),
                            y: 2187,
                        },
                        {
                            x: now.minus({months: 13}).plus({day: 22}).toJSDate(),
                            y: 2597,
                        },
                        {
                            x: now.minus({months: 13}).plus({day: 25}).toJSDate(),
                            y: 2246,
                        },
                        {
                            x: now.minus({months: 13}).plus({day: 28}).toJSDate(),
                            y: 1767,
                        },
                    ],
                },
            ],
        },
    }

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private service: DashboardService,
        private _router: Router,
    )
    {
        this.service.GetQrCode().subscribe((result:any) => {
            this.QrCodeData = result.data;
        })
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._prepareChartData();
        // Attach SVG fill fixer to all ApexCharts
        window['Apex'] = {
            chart: {
                events: {
                    mounted: (chart: any, options?: any): void =>
                    {
                        this._fixSvgFill(chart.el);
                    },
                    updated: (chart: any, options?: any): void =>
                    {
                        this._fixSvgFill(chart.el);
                    },
                },
            },
        };
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Fix the SVG fill references. This fix must be applied to all ApexCharts
     * charts in order to fix 'black color on gradient fills on certain browsers'
     * issue caused by the '<base>' tag.
     *
     * Fix based on https://gist.github.com/Kamshak/c84cdc175209d1a30f711abd6a81d472
     *
     * @param element
     * @private
     */
    private _fixSvgFill(element: Element): void
    {
        // Current URL
        const currentURL = this._router.url;

        // 1. Find all elements with 'fill' attribute within the element
        // 2. Filter out the ones that doesn't have cross reference so we only left with the ones that use the 'url(#id)' syntax
        // 3. Insert the 'currentURL' at the front of the 'fill' attribute value
        Array.from(element.querySelectorAll('*[fill]'))
            .filter(el => el.getAttribute('fill').indexOf('url(') !== -1)
            .forEach((el) =>
            {
                const attrVal = el.getAttribute('fill');
                el.setAttribute('fill', `url(${currentURL}${attrVal.slice(attrVal.indexOf('#'))}`);
            });
    }

    /**
     * Prepare the chart data from the data
     *
     * @private
     */
    private _prepareChartData(): void
    {

        // New vs. returning
        this.chartNewVsReturning = {
            chart      : {
                animations: {
                    speed           : 400,
                    animateGradually: {
                        enabled: false,
                    },
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                height    : '100%',
                type      : 'donut',
                sparkline : {
                    enabled: true,
                },
            },
            colors     : ['#6aff00','#3182CE', '#63B3ED','#63B3ED','#63B3ED'],
            labels     : [
                'Highly Satisfied',
                'Satisfied',
                'Average',
                'Dissatisfied',
                'Highly Dissatisfied',
            ],
            plotOptions: {
                pie: {
                    customScale  : 0.9,
                    expandOnClick: false,
                    donut        : {
                        size: '70%',
                    },
                },
            },
            series     :
            [2, 5,15,10,40]
            ,
            states     : {
                hover : {
                    filter: {
                        type: 'none',
                    },
                },
                active: {
                    filter: {
                        type: 'none',
                    },
                },
            },
            tooltip    : {
                enabled        : true,
                fillSeriesColor: false,
                theme          : 'dark',
                custom         : ({
                    seriesIndex,
                    w,
                }): string => `<div class="flex items-center h-8 min-h-8 max-h-8 px-3">
                                                    <div class="w-3 h-3 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
                                                    <div class="ml-2 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
                                                    <div class="ml-2 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
                                                </div>`,
            },
        };

        this.chartOptions = {
            series: [44, 55, 41, 17, 15],
            chart: {
              width: 300,
              type: "donut"
            },
            plotOptions: {
              pie: {
                startAngle: -90,
                endAngle: 90,
                offsetY: 10
              }
            },
            grid: {
              padding: {
                bottom: -80
              }
            },
            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }
            ]
        };

         // Visitors

        this.chartVisitors = {
            chart     : {
                animations: {
                    speed           : 400,
                    animateGradually: {
                        enabled: false,
                    },
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                width     : '100%',
                height    : '100%',
                type      : 'area',
                toolbar   : {
                    show: false,
                },
                zoom      : {
                    enabled: false,
                },
            },
            colors    : ['#818CF8'],
            dataLabels: {
                enabled: false,
            },
            fill      : {
                colors: ['#312E81'],
            },
            grid      : {
                show       : true,
                borderColor: '#334155',
                padding    : {
                    top   : 10,
                    bottom: -40,
                    left  : 0,
                    right : 0,
                },
                position   : 'back',
                xaxis      : {
                    lines: {
                        show: true,
                    },
                },
            },
            series    : this.visitors.series,
            stroke    : {
                width: 2,
            },
            tooltip   : {
                followCursor: true,
                theme       : 'dark',
                x           : {
                    format: 'MMM dd, yyyy',
                },
                y           : {
                    formatter: (value: number): string => `${value}`,
                },
            },
            xaxis     : {
                axisBorder: {
                    show: false,
                },
                axisTicks : {
                    show: false,
                },
                crosshairs: {
                    stroke: {
                        color    : '#475569',
                        dashArray: 0,
                        width    : 2,
                    },
                },
                labels    : {
                    offsetY: -20,
                    style  : {
                        colors: '#CBD5E1',
                    },
                },
                tickAmount: 20,
                tooltip   : {
                    enabled: false,
                },
                type      : 'datetime',
            },
            yaxis     : {
                axisTicks : {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                min       : (min): number => min - 750,
                max       : (max): number => max + 250,
                tickAmount: 5,
                show      : false,
            },
        };

    }
}
