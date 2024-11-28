import { UserPaymentDto } from "./userPaymentDataDto";

export class UserDto {
    id: string;
    username: string;
    password: string;
    paymentData: UserPaymentDto;
}