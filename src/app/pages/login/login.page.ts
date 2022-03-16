import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/Models/login.model';
import { AlertService } from 'src/app/Services/alert.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  loading = false;
  loginModel: LoginModel;
  segmentView: string;
  inputMail: string;
  inputPass: string;
  showPassword = false;
  passwordToggleIcon = 'eye';


  constructor(  public router: Router,
                private alertSrv: AlertService,
                private authService: AuthService ) { }

  ngOnInit() {
    this.loginModel = new LoginModel();
    this.segmentView ='login';

    // this.loginModel.email = 'test@lvr.test';
    // this.loginModel.password = '#testPass123';
  }

  async login() {
    this.loading = true;
    this.inputMail = this.loginModel.email
    this.inputPass = this.loginModel.password
    
    try{
      await this.authService.loginUser( this.loginModel );
      this.loading = false;
      this.router.navigateByUrl("/home");

    }catch (error){
      this.loading = false;
      this.alertSrv.showToast(error.code)
      return
    }
  }

  async signUp() {
    this.loading = true;
    this.inputMail = this.loginModel.email
    this.inputPass = this.loginModel.password

    try {
      await this.authService.signUpUser( this.loginModel );
      this.loading = false;
      this.router.navigateByUrl("/home");
    }
    catch (error){
      this.loading = false;
      this.alertSrv.showToast(error.code)
      return
    }
  }

  togglePassword(): void{
    this.showPassword = !this.showPassword;
    
    if(this.passwordToggleIcon == 'eye'){
      this.passwordToggleIcon = 'eye-off';
    }else{
      this.passwordToggleIcon = 'eye';
    }

  }

  viewTypeForm(param){
    this.segmentView = param;
  }

}
