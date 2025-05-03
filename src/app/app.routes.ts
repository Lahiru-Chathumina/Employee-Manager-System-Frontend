import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UpdateEmComponent } from './components/update-em/update-em.component';
import { DeleteEmComponent } from './components/delete-em/delete-em.component';
import { ListEmComponent } from './components/list-em/list-em.component';
import { SearchEmComponent } from './components/search-em/search-em.component';

export const routes: Routes = [
    {
           path:"",
           component:HomeComponent
    },

{
    path:"update",
    component:UpdateEmComponent
},
{
    path:"delete",
    component:DeleteEmComponent
},
{
    path:"search",
    component: SearchEmComponent
},
{
   path:"getall",
   component:ListEmComponent
}
// {
//     path:"loging",
//     component:LogingComponent,
//     children:[
//             {
//             path:"add",
//             component:AddCustomerComponent
//             }
//     ]

    
// }
];
