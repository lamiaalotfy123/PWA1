import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuth2Service } from '../app/services/user-auth2.service';

export const userAuth2Guard: CanActivateFn = (route, state) => {
 let userauth=inject(UserAuth2Service);
 let router=inject(Router)
  if (userauth.isUserLogged) {
    return true;
  }else{
    alert("You are not logged in, please login first. Please click here to login:")
    router.navigate(['/userLogin']);
    return false;
  }
};
