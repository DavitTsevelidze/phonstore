import { Routes } from '@angular/router';



export const routes: Routes = [
{
path: '',
loadComponent:() => import('../home-page/home-page.component').then(c => c.HomePageComponent),
},
{
path: 'home',
loadComponent:() => import('../home-page/home-page.component').then(c => c.HomePageComponent),
},
{
path: 'installment',
loadComponent:() => import('../home-page/main/installment/installment.component').then(c => c.InstallmentComponent),
},
{
path: 'promoutions',
loadComponent:() => import('../home-page/main/promoutions/promoutions.component').then(c => c.PromoutionsComponent),
},
{
path: 'about',
loadComponent:() => import('../home-page/main/about/about.component').then(c => c.AboutComponent),
},
{
path: 'signIn',
loadComponent:() => import('../home-page/header/sign-in/sign-in.component').then(c => c.SignInComponent),
},{
path: 'register',
loadComponent:() => import('../home-page/header/sign-in/register/register.component').then(c => c.RegisterComponent),
},
{
path: 'signIn/register',
loadComponent:() => import('../home-page/header/sign-in/register/register.component').then(c => c.RegisterComponent),
},
{
    path: 'all',
    loadComponent:()=> import('../home-page/header/categories/all/all.component').then(c => c.AllComponent),
} ,
{
     path: 'smartphones',
     loadComponent:()=> import('../home-page/header/categories/smartphones/smartphones.component').then(c => c.SmartphonesComponent),
 } ,
{
    path: 'leptops',
    loadComponent:()=> import('../home-page/header/categories/leptops/leptops.component').then(c => c.LeptopsComponent),
} ,
{
    path: 'accessories',
    loadComponent:()=> import('../home-page/header/categories/accessories/accessories.component').then(c => c.AccessoriesComponent),
} ,
{
    path: "cart",
    loadComponent:()=> import('../home-page/header/cart/cart.component').then(c => c.CartComponent),
} ,
{
path: '**',
loadComponent:() => import('../home-page/main/error-page/error-page.component').then(c => c.ErrorPageComponent)
}
     
    
]
