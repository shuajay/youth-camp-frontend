import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterLink, Router} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    ButtonModule,
    InputTextModule,
    CardModule,
    ToastModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  credentials = { email: '', password: '' };

  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService,
  ) {
  }

  login(){
    this.authService.login(this.credentials.email, this.credentials.password).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Invalid credentials.',
        })
      }
    })
  }

}
