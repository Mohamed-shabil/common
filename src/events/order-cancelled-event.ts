import { Subjects } from "./subjects";

export interface OrderCancelledEvent{
    subject:Subjects.orderCancelled;
    data:{
        version:number;
        id: string;
        ticket:{
            id:string;
        }
    }
}