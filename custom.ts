
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="!"
namespace error {
    /**
     * display Error with 1/2 diffrent styles and optional warning outside of console
     */
    //% block
    export function foo(style: boolean, s: string,saywarning:Boolean): void {
        if (saywarning) {
            game.showLongText("error had happened please read console", DialogLayout.Bottom)
        }
        let Case = ""
    if (style) {
        Case = "case1"
    } else {
        Case = "case2"
    }
    if (Case="case1") {
        console.log("error:"+" " + "{" + s + "}" )
    } else if (Case="case2") {
        console.log("error:"+ " " + s)
    }
    }
    /**
         * stop os and display error as if the code had erroed out (great for bad errors)
     */
    //% block
    export function criticalerror(num:number): any {
     control.panic(num)
    }
}
