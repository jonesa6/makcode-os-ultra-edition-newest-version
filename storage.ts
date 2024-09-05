namespace cloud {
    let a: string[] = []
    let list = ""
    let bytes = 0
    let bytespervalue = 1
    let KBlimit = Math.min(control.ramSize() / 1000, 90)
   export function writefilesfromuser() {
    function getfilenumber() {return a.length - 1}
    while (bytes + bytespervalue < KBlimit * 1000 / 4) {
        game.splash("B to write another file","down to end writing files")
        list = game.askForString("file?",26)
       if (game.ask("write?")) {
           a.push(list)
           bytes += bytespervalue * a[a.length - 1].length
       }
        
        game.showLongText("file number:" + getfilenumber(), DialogLayout.Bottom)
        pauseUntil(() => controller.down.isPressed() || controller.B.isPressed())
        if (controller.down.isPressed()) {
            break;
        }
    }
   }
export function readfile(index:number) {return a[index]}
export function sizeoffiles() {return bytes}
export function getmax_total_files_size_in_KB() {return KBlimit}
export function sizeoftext(text:string) {return text.length}
export function sizeofnumber() {return 8}
}
namespace cloudapp {
    export function cloudapp_open() {
    while(!game.ask("exit")) {
   if (game.ask("create files?")) {
   cloud.writefilesfromuser() }
    else if (game.ask("read file?")) {
    game.showLongText(cloud.readfile(game.askForNumber("filenumber")) + " #cloudapp", DialogLayout.Bottom)
    } else if ("memory used?") {game.showLongText(cloud.sizeoffiles() / 1000 + "/" + cloud.getmax_total_files_size_in_KB() / 4 + " KiloBytes used", DialogLayout.Full)}
    }
    }

}
namespace settings_ {
const maxsize = cloud.getmax_total_files_size_in_KB() / 4
const numbersize = cloud.sizeofnumber()
let nums:Array<number>
export function writenumber(value:number): null|void {nums.push(value)
    if (nums.length * numbersize > maxsize) {  return null} else {
        nums.push(value)
}
}
export function readnumberAt(index:number) {return nums[index]}
export function findindexof(value:number): number|null {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i]==value) {
            return i
        }
    }
    return null
}
export function gethowmuchmemoryused() {return nums.length * numbersize}
}