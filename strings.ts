// Add your code here
// comparing strings and random char
//% weight=100 color=#0fbc11 icon=""
namespace strings {
    let char1 = ""
    let char2 = ""
    let match = 0
    let end = true

    export function compare(n: string, s: string,): any {
        // Add code here
        let word1 = n.length
        let word2 = s.length
        for (let i = 0; i < word1; ++i) {
            char1 = n.charAt(i)
            char2 = s.charAt(i)
            stepthorgh()
            if (i = word1) {
                return match
            }

        }
        function stepthorgh() {
            if (char1 = char2) {
                match = match = + 1
            }
        }
    }
    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    export function randomchar(): any {
        let text_list = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "o",
            "p",
            "q",
            "r",
            "f",
            "t",
            "u",
            "p",
            "w",
            "x",
            "y",
            "z"
        ]
        let choice = randint(0, text_list.length - 1)

        return text_list[choice]
    }


}
