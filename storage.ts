namespace cloud {
    let a: string[] = []
    let list = ""
    let bytes = 0
    let bytespervalue = 1
    let KBlimit = Math.min(control.ramSize() / 1000, 90)
   export function writefilesfromuser() {
    while (bytes + bytespervalue < KBlimit * 1000) {
        list = game.askForString("file?")
        a.push(list)
        bytes += bytespervalue * a[a.length - 1].length
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
}
namespace cloudapp {
    export function cloudapp_open() {}
}