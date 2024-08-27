
/*
 * Custom blocks
 */
//% weight=100 color=#0fb011 icon=""
namespace Apps {
    /**
     * the interactable info or II App (built in)
     * @param e describe parameter here
     */
    //% block
    export function ii(): void {
        // Add code here
         sa(true)
        function imstuck() {
            game.showLongText("say yes if youre tuck in a APP say no if not in a APP", DialogLayout.Full)
            if (game.ask("APP?")) {
                game.showLongText("if you are in the game in the utils & calculater App then reset the OS", DialogLayout.Full)
            } else {
                game.showLongText("reset the OS but if that does not work then deleting your password if you are stuck signing in then check if your password is null or if your inputing incorret passwords", DialogLayout.Bottom)
            }
        }

        function ask(ask2: string) {
            if (game.ask(ask2)) {
                return true
            } else {
                return false
            }
        }
        let MAX = 0
        let LASTSTRING = ""
        let lASTMAX = 0
        function maxs(num: number, text: string) {
            MAX = Math.max(num, MAX)
            if (text != LASTSTRING && MAX != lASTMAX) {
                LASTSTRING = text
                lASTMAX = MAX
            }
            return LASTSTRING
        }
        let DECODEDSTRING = ""
        let USER_INPUT = ""
        let DECODEDMAX = 0
        let ARRAYTODECODE: number[] = []
        let STRINGMAX: number[] = []
        LASTSTRING = ""
        let startupmessage = "the interactable info app (curently in beta)"
        let helpmessage = "enter what info you want into the search option then it will give you a link to the most closetest to your search info text"
        let hardwaremin = "250Kb or 120kb but less somoth of ram & ARM Cortex M microcontroller & 240x220 or 160 by 120 pixel display & single channel sound output & Some way to commission and possibly debug the board or computer "
        let serach = ["im stuck"||"stuck", "device min"|| "min"]
        
        game.showLongText(startupmessage, DialogLayout.Bottom)
        sprites.destroyAllSpritesOfKind(SpriteKind.i)
        if (ask("search")) {
            USER_INPUT = game.askForString("Search")
           // ARRAYTODECODE = MAX(strings.compare(value, USER_INPUT), value) //never use 
            for (let value of serach) {
                DECODEDSTRING = maxs(strings.compare(value, USER_INPUT), USER_INPUT)
            }
            if (DECODEDSTRING == "device min"||"min") {
                // case hardware min
                // say hardware min in full screen
                game.showLongText(hardwaremin, DialogLayout.Full)
            }
            if (DECODEDSTRING == "im stuck"||"stuck") {
                imstuck()
            }
        } else if (ask("exit")) {
            mouse()
            home()
            sa(false)
        }  else {
            Apps.ii()
        }
    }
    /**
     * the general store or just store App (built in)
     * @param e describe parameter here
     */
    //% block
    export function store() {
        //  general store
       
        if (mySprite.overlapsWith(mySprite7) || wtore&&!inAPP) {
            sa(true)
            if (game.ask("Auto open") ) {
                game.showLongText("startup impact: Varies", DialogLayout.Full)
                if (game.ask("startup macros ?") ) {
                    notifaction("Startup macro downloaded")
                    macros = true
                } else {
                    return
                }

            } else if (game.ask("wallpapers")) {
                if (game.ask("road") ) {
                    w1 = true
                    sprites.destroyAllSpritesOfKind(SpriteKind.i)
                    home()
                    mouse()
                    sa(false)
                } else if (game.ask("forest")) {
                    w2 = true
                    sprites.destroyAllSpritesOfKind(SpriteKind.i)
                    home()
                    mouse()
                    sa(false)
                } else if (game.ask("fossils") ) {
                    w3 = true
                    sprites.destroyAllSpritesOfKind(SpriteKind.i)
                    home()
                    mouse()
                    sa(false)
                } else if (game.ask("desert") ) {
                    w4 = true
                    sprites.destroyAllSpritesOfKind(SpriteKind.i)
                    home()
                    mouse()
                    sa(false)
                } else if (game.ask("chrismas")) {
                    w5 = true
                    sprites.destroyAllSpritesOfKind(SpriteKind.i)
                    home()
                    mouse()
                    sa(false)
                }

            } else if (game.ask("download section") ) {
                if (game.ask("utils") ) {
                    game.showLongText("Startup lag : None .performance : High", DialogLayout.Full)
                    if (game.ask("download?") && !utility) {
                        notifaction("Utils app downloaded")
                        utility = true
                    }

                } else {
                    return
                    sa(false)
                }

            }

        } else {
error.foo(true, "store app did not open (from App)", false)
        }
    }
    /**
         * the utils & calculater app (built in)
         * @param e describe parameter here
         */
    //% block
    export function utils_calculater() {
        //  utils and calculater
        if (mySprite.overlapsWith(mySprite2) || utils&&!inAPP) {
           sa(true)
            sprites.destroyAllSpritesOfKind(SpriteKind.i)
            //  options
         if (game.ask("open settings")) { //basicly opens settings app
              Apps.settings
            } else if (game.ask("Os version")) {
                game.showLongText("version:" + versionmessage + ", v4.2 added version message at startup)"+" " +osname, DialogLayout.Bottom)
                mouse()
                home()
                sa(false)
            } else if (game.ask("add")) { //takes two number from USER and does the desired operation to them
                game.showLongText(math(game.askForNumber("number one"), game.askForNumber("number two"), 1), DialogLayout.Bottom)
                mouse()
                home()
                sa(false)
            } else if (game.ask("multiply")) {
                game.showLongText(math(game.askForNumber("number one"), game.askForNumber("number two"), 0), DialogLayout.Bottom)
                mouse()
                home()
                sa(false)
            } else if (game.ask("divide")) {
                game.showLongText(math(game.askForNumber("number one"), game.askForNumber("number two"), 4), DialogLayout.Bottom)
                mouse()
                home()
                sa(false)
            } else if (game.ask("subtract")) {
                game.showLongText(math(game.askForNumber("number one"), game.askForNumber("number two"), 2), DialogLayout.Bottom)
                mouse()
                home()
                sa(false)
            } else {
                error.foo(true, "utils&calculater App did not get anything selected", false)
                mouse()
                home()
            }

        } else {
error.foo(true, "utils_calculater app did not open (from App)", null)
        }

    }
    /**
         * the settings app
         */
    //% block
    export function settings() {
        sprites.destroyAllSpritesOfKind(SpriteKind.i)
        if (game.ask("dark mode")) {
            darkmode = true
            achievements.create("dark mode")
            mouse()
            home()
        } else if (game.ask("light mode")) {
            achievements.create("light mode", 100)
            darkmode = false
            mouse()
            home()
        } else if (game.ask("toggle greet")) {
            if (greet()) {
                blockSettings.writeNumber("shouldgreet", 0)
                game.showLongText("os will now  not greet you when you sign in", DialogLayout.Bottom)
            } else {
                blockSettings.writeNumber("shouldgreet", 1)
                game.showLongText("os will now greet you when you sign in", DialogLayout.Bottom)
            }
            shouldgreet = greet() //converts  0 or 1 to boolean
        }

    }
}
