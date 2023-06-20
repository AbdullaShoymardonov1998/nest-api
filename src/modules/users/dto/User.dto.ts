import { IsString, IsNumber, IsDate } from "class-validator";

export class UserDto {
    
    @IsNumber()
    id: number;
    
    @IsString()
    firstName: string;
    lastName: string;

    @IsDate()
    createdAt: Date;
}