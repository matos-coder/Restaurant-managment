import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  providers:[MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm !: FormGroup
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private messageService : MessageService ,
    private router: Router,) { }
  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({

      Username: ['', Validators.required],
      password: ['', Validators.required]

    });
  }
  signUp(){
    this.router.navigate(['/register']);
  }
  login() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {

      this.userService.login(this.loginForm.value).subscribe({
        next: (res) => {

          if (res.jwtToken) {
            const token = this.getToken();
            console.log(token);
            console.log("Login Successful");

            this.messageService.add({ severity: 'success', summary: 'Successfull', });

            sessionStorage.setItem('token', res.jwtToken);
            this.router.navigateByUrl('/applayout');
          }
          else {

            this.messageService.add({ severity: 'error', summary: 'Authentication failed.',  });

          }

        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Something went wron!!!', detail: err.message });

          console.log(err)

        }
      })
    }

  }
  getToken = (): string | null  => sessionStorage.getItem('token') || null ;
}
