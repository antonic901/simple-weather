import {
  Body,
  Controller,
  HttpCode,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { RegistrationDTO } from './dtos/registration.dto';
import { LocalAuthenticationGuard } from './guards/localAuthentication.guard';

@Controller('authentication')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post('/register')
  async register(@Body() registrationData: RegistrationDTO) {
    return this.authenticationService.registration(registrationData);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('/login')
  async login(@Request() request) {
    const user = request.user;
    return user;
  }
}
