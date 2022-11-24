import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegistrationDTO } from './dtos/registration.dto';
import * as bcrypt from 'bcrypt';
import { PostgresErrorCode } from './enums/postgresErrorCodes.enum';

@Injectable()
export class AuthenticationService {
  constructor(private usersService: UsersService) {}

  public async registration(registrationData: RegistrationDTO) {
    /*
      first paremter is plain password, second is how strong SALT will be
      hashed password = hashed plain text + salt (random hash)
    */
    const hashedPassword = await bcrypt.hash(registrationData.password, 10);
    try {
      const user = await this.usersService.create({
        ...registrationData,
        password: hashedPassword,
      });

      // this should be done using interceptors
      user.id = undefined;
      user.password = undefined;
      //

      return user;
    } catch (error) {
      if (error.code === PostgresErrorCode.UniqueViolation) {
        throw new HttpException(
          'User with that email already exists',
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async getAuthenticationUser(email: string, password: string) {
    try {
      const user = await this.usersService.getByEmail(email);
      await this.verifyPassword(password, user.password);

      // this should be done using interceptors
      user.id = undefined;
      user.password = undefined;
      //

      return user;
    } catch (error) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  private async verifyPassword(password: string, hashedPassword: string) {
    const isPasswordMatching = await bcrypt.compare(password, hashedPassword);
    if (!isPasswordMatching) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
