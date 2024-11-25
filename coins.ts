// Add your code
game.onUpdateInterval(1000, function() {
    if(os) {
        blockSettings.writeNumber("oscoins", blockSettings.readNumber("oscoins")+1)
    }
})
