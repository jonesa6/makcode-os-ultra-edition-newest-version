// Add your code
game.onUpdateInterval(1000, function() {
    if(os) {
        blockSettings.writeNumber("oscoins", blockSettings.readNumber("oscoins")+1)
    }
})
namespace oscoin {
    export let ac1:acount
    export let ac2: acount
    export let ac3: acount
 class acount{
     debt:number
     borrodmoney:number
     money:number
     addborrowedmoney() {
         this.borrodmoney =+  Math.abs(game.askForNumber("borrow +money"))
     }
 }
    export function addacount() {
        if (ac1=null) {ac1 = new acount} else if (ac2=null) {ac2 = new acount} else if (ac3=null) {ac3 = new acount}
    }
   export function getacount(num:number                                  
) {}
}