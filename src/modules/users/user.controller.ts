import {ValidationPipe, UsePipes,  Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UserDto } from './dto/User.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService : UserService){}
    @UsePipes(new ValidationPipe())
    @Post()
    createUsers(@Body() userData: CreateUserDto): {message: string}{
        return this.userService.createUsers(userData);
    }

    @Get()
    getAllUsers(): UserDto[]{
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUsersById(@Param ('id', ParseIntPipe) id:number){
        return this.userService.getUsersById(id);
    }

    @Delete(':id')
    deleteUsersById(@Param ('id', ParseIntPipe) id:number){
        return this.userService.deleteUsersById(id);
    }
    @UsePipes(new ValidationPipe())
    @Put(':id')
    updateUserById(@Param ('id', ParseIntPipe) id:number, @Body() userData: UpdateUserDto): {message: string}{
        return this.userService.updateUserById(id, userData);
    }

}
