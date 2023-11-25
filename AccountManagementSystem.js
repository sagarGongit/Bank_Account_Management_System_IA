let count = 0;
function CreatebankAccount(accountNumber,name,type,balance) {
   
         this.accountNumber = accountNumber,
         this.name = name,
         this.type = type,
         this.balance = balance,

        this.deposit = function(amount) {
        let depo = this.balance += amount;
              count++
               console.log(depo);
         },
         this.withdraw = function(amount) {
            if(balance >= amount){
                count++
               let bal = this.balance -= amount;
                console.log(bal);
            }
            else {
                console.log("sorry you haven't sufficient balance your balance is "+ this.balance);
            } 
         },
         this.getTotalBalance = function() {
            console.log(this.balance);
       }
       this.isActive = function(){
          if(count>0){
            console.log("your account is active");
          }
          else {
            console.log("your account is not active");
          }
       }

}
     
      let acc1 = new CreatebankAccount(132334,"hdfc","saving",500);
      let acc2 = new CreatebankAccount(132345,"sbi","fixed",600);
      let acc3 = new CreatebankAccount(132334,"axis","current",700);
      let acc4 = new CreatebankAccount(132334,"boi","saving",200);
      let acc5 = new CreatebankAccount(132334,"icici","fixed",400);