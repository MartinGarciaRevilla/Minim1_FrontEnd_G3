import { Routes } from '@angular/router';
import { UserComponent } from './usuario/usuario.component';
import { GymComponent } from './gym/gym.component';
import { CombatComponent } from './combat/combat.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChangeLogComponent } from './change-log/change-log.component'; // Importa el componente de historial de cambios

export const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'gyms', component: GymComponent },
  { path: 'combats', component: CombatComponent },
  { path: 'change-log', component: ChangeLogComponent }, // Nueva ruta para el historial de cambios
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'welcome', component: WelcomeComponent }, // Nueva ruta para la página de bienvenida
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirección por defecto
  { path: '**', redirectTo: '/users' } // Ruta para manejar errores 404
];