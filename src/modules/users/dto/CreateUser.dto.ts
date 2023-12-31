import { IsString, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsString() 
  @IsNotEmpty()
  firstName: string;
  lastName: string;
  }
  