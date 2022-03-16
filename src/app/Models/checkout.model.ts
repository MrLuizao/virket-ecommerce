export class CheckoutModel{
    reference: string;
    paymentConcept: string;
    unique: boolean;
    response:boolean;
    amount: number;
    currency: string;
    urlCallback: string;
    expiration: string;

    name?: string;
    middleName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
}