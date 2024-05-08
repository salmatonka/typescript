{
    // 

    // access modifiers

    // class BankAccount {
    //    public readonly id: number;
    //    public name: string;
    //     private _balance: number;

    //     constructor (id: number,name: string, balance: number) {
    //         this.id = id;
    //         this.name = name;
    //         this._balance = balance;
    //     }
    //   public  addDeposit (amount:number){
    //         this._balance = this._balance + amount;
    //     }

    //   public  getBalance(){
    //         return this._balance
    //     }
    // }

    // const goribManushAccount = new BankAccount (222,'gorib',100);
    // goribManushAccount.addDeposit(120)
    // // console.log(goribManushAccount)

    // const myBalance = goribManushAccount.getBalance();
    // console.log(myBalance)




    //  private ...>  protected _balance: number;

    class BankAccount {
        public readonly id: number;
        public name: string;
        //    private _balance: number;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        //setter
        set deposit(amount: number) {
             this._balance = this.balance + amount;
        }
    
        //getter  
        get balance() {
            return this._balance
        }
 
    }
    const goribManushAccount = new BankAccount(222, 'gorib', 100);
     goribManushAccount.deposit = 50; 
    // console.log(goribManushAccount)

    const myBalance = goribManushAccount.balance; //property mto kore
    console.log(myBalance)





    //
}