import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";

export interface OrderCreatedEvent{
    subject:Subjects.OrderderCreated;
    data:{
        id: string;
        status:OrderStatus;
        userId:String;
        expiresAt: string
        ticket:{
            id:string;
            price:number
        } 
    }
}