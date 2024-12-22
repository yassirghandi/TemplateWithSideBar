import { INavBarData } from "./helper";

export const navbarData : INavBarData[]= [
    {
        routerLink : 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routerLink : 'products',
        icon: 'fal fa-box-open',
        label: 'Products'
    },
    {
        routerLink : 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Statistics',
        items:[
            {
                routerLink:'coupens12',
                label:'mohamme',
            },
            {
                routerLink:'coupens1',
                label:'simo Hammed',
            }
        ]
    },
    {
        routerLink : 'coupens',
        icon: 'fal fa-tags',
        label: 'Coupens',
        items:[
            {
                routerLink:'coupens/sublevel1',
                label:'mohamme ait baha',
            },
            {
                routerLink:'sublevel11',
                label:'simo Hammed ridali',
                items:[
                    {
                        routerLink:'coupens',
                        label:'mohamme',
                    },
                    {
                        routerLink:'coupens',
                        label:'mohamme',
                    },
                    {
                        routerLink:'coupens',
                        label:'mohamme',
                    },
                    {
                        routerLink:'coupens',
                        label:'mohamme',
                    },
                    {
                        routerLink:'coupens',
                        label:'mohamme',
                    },
                    {
                        routerLink:'coupens',
                        label:'mohamme',
                    },
                    {
                        routerLink:'coupens',
                        label:'mohamme',
                    },
                    {
                        routerLink:'coupens',
                        label:'mohamme',
                    },
                ]
            }
        ]
    },
    {
        routerLink : 'pages',
        icon: 'fal fa-file',
        label: 'Pages'
    },
];