import { Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentsCreateComponent } from './students/students-create/students-create.component';
import { StudentsEditComponent } from './students/students-edit/students-edit.component';
import { LoginComponent } from './login/login.component';
import { verifyJWTToken } from './middleware/auth.guard';
import { RealtimeComponent } from './realtime/realtime.component';

export const routes: Routes = [
    {
        path: '',
        component: StudentsEditComponent,
        canActivate: [ verifyJWTToken ]
    },
    {
        path: 'projects',
        component: ProjectComponent,
        canActivate: [ verifyJWTToken ]
    },
    {
        path: 'students',
        component: StudentsListComponent
    },
    {
        path: 'students/create',
        component: StudentsCreateComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'chat',
        component: RealtimeComponent,
        canActivate: [verifyJWTToken]
    }

];
