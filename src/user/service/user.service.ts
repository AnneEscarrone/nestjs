import { HttpService, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { UserRepository } from '../domain/repository/user.respository';
import { AxiosResponse } from "axios";
import { map, catchError } from 'rxjs/operators';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private httpService: HttpService
  ) {}


  findAll(): Observable<AxiosResponse<any[]>> {
    return this.httpService.get('http://localhost:3000/user/url-test1')
    .pipe(
        map(response => response.data),
        catchError(e => {
            throw new HttpException(
                e.response.data, 
                e.response.status
            );
          })
      );;
  }
}