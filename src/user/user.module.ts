import { UserController } from './web/controller/user.controller';
import { UserService } from './service/user.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './domain/repository/user.respository';
import { HttpModule } from '@nestjs/common/http/http.module';

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository]),
        HttpModule],
    controllers: [
        UserController,],
    providers: [
        UserService,],
})
export class UserModule {

}
