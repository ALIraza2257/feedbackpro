/* eslint-disable */
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export const analytics = {

    newVsReturning     : {
        uniqueVisitors: 500,
        series        : [30, 5,15,10,40],
        labels        : [
            'Highly Satisfied',
            'Satisfied',
            'Average',
            'Dissatisfied',
            'Highly Dissatisfied',
        ],
    },

    visitors           : {
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
    },

};
