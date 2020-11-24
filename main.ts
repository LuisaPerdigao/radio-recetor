input.onButtonPressed(Button.A, function () {
    radio.sendString("")
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Happy)
})
radio.setGroup(7)
