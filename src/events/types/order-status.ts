export enum OrderStatus{
    // When the order has been created, but the 
    // ticket it is trying to order has not been reserved

    Created = 'created',

    // The Ticket the order is trying to reserve has already 
    // been reserved or when the user has cancelled the order 
    // the order expires before payment

    Cancelled = 'cancelled',

    // the order has successfully reserves the ticket

    AwaitingPayment = 'awaiting:payment',

    // the order has reserves the ticket and the user has 
    // provided payment successfully
      
    Complete = 'complete'
}