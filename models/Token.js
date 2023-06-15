var Token = /** @class */ (function () {
    function Token(card_number, expiration_month, expiration_year, email) {
        this.card_number = card_number;
        this.expiration_month = expiration_month;
        this.expiration_year = expiration_year;
        this.email = email;
    }
    Token.prototype.setCardNumber = function (card_number) {
        this.card_number = card_number;
    };
    Token.prototype.getCardNumber = function () {
        return this.card_number;
    };
    Token.prototype.setExpirationMonth = function (expiration_month) {
        this.expiration_month = expiration_month;
    };
    Token.prototype.setExpirationYear = function (expiration_year) {
        this.expiration_year = expiration_year;
    };
    Token.prototype.setEmail = function (email) {
        this.email = email;
    };
    Token.prototype.getEmail = function () {
        return this.email;
    };
    Token.prototype.setCVV = function (cvv) {
        this.cvv = cvv;
    };
    Token.prototype.getCVV = function () {
        return this.cvv;
    };
    return Token;
}());
