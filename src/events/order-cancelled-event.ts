import { Subjects } from "./subjects";

export interface OrderCancelledEvent{
    subject:Subjects.orderCancelled;
    data:{
        id: string;
        ticket:{
            id:string;
        } 
    }
}