import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UserDto } from './dto/User.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Injectable()
export class UserService {
  private users: UserDto[] = [];
  private idCount: number = 1;
  //Create users
  createUsers(userDetails: CreateUserDto): { message: string } {
    this.users.push({
      ...userDetails,
      id: this.idCount,
      createdAt: new Date(),
    });
    this.idCount++;
    return {
      message: 'Created',
    };
  }
  //Get Users
  getAllUsers(): UserDto[] {
    return this.users;
  }

  //Get User by Id
  getUsersById(id: number) {
    const user: UserDto = this.users.find((user) => user.id === id);
    if (!user) {
      throw new BadRequestException('Not found');
    }
    return user;
  }

  //Delete User by Id

  deleteUsersById(id: number) {
    this.getUsersById(id);
    this.users = this.users.filter((user) => user.id !== id);
    return this.users;
  }

  //Update user by Id
  updateUserById(id: number, updateUser: UpdateUserDto) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.getUsersById(id)) {
        this.users[i].firstName = updateUser.firstName;
        this.users[i].lastName = updateUser.lastName;
      }
      return {
        message: 'Updated',
      };
    }
  }
}
