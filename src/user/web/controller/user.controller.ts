import { Controller, Get, UseFilters } from '@nestjs/common';
import { UserService } from 'src/user/service/user.service';
import { map, catchError } from 'rxjs/operators';
import { HttpExceptionFilter } from 'src/httpHelper/http-exception.filter';
@Controller('user')
export class UserController {
    constructor(private userService: UserService){}


    
    @Get()
    @UseFilters(new HttpExceptionFilter())
    async getService(){
       
        const reponse = this.userService.findAll();
        reponse.toPromise().then(res => {
            console.log(res);
        });
        
        return reponse

        
    }
    
    @Get('/url-test')
    async getUrlTest(){
        return "hi"

    }

}
