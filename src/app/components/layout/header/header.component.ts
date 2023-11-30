import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import 'bootstrap/dist/js/bootstrap.bundle';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  loginService = inject(LoginService);
  router = inject(Router);

  sair() {
    this.loginService.deslogar().subscribe({
      next: response => {
        this.router.navigate(['/login']);
      },
      error: error => {
        console.log(error);
      }
    })
  }
}
