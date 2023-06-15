class Token {
    private card_number:number;
    private cvv:number;
    private expiration_month:string;
    private expiration_year:string;
    private email:string;

    constructor(card_number:number, expiration_month:string, expiration_year:string, email:string){
        this.card_number = card_number;
        this.expiration_month = expiration_month;
        this.expiration_year = expiration_year;
        this.email = email;
    }

    public setCardNumber(card_number:number){
        this.card_number = card_number;
    }

    public getCardNumber(){
        return this.card_number;
    }

    public setExpirationMonth(expiration_month:string){
        this.expiration_month = expiration_month;
    }

    public setExpirationYear(expiration_year:string){
        this.expiration_year = expiration_year;
    }

    public setEmail(email:string){
        this.email = email;
    }

    public getEmail(){
        return this.email;
    }

    public setCVV(cvv:number){
        this.cvv = cvv;
    }

    public getCVV(){
        return this.cvv;
    }
}