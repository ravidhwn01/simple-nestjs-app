import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './interface/user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Get()
    getUsers() :User[] {
        return this.userService.getUsers();

    }
    @Post()
    postData(@Body() user:User):User {
        return this.userService.addUser(user)
    }

    @Delete('/:email')
   deleteUser(@Param('email') email:string): User []{
    return  this.userService.deleteUser(email);
   }
}
