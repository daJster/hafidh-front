import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routes';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [
            LoginComponent, 
            SignupComponent, 
            CommonModule, 
            FormsModule, 
            ReactiveFormsModule, 
            RouterModule.forChild(authRoutes)
        ],
    
})
export class AuthModule {}