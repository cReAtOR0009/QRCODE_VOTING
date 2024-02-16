module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        data: {}
    },

    voteResponse:{
        usedQRCode:"this QR Code has been used before",
        wrongQRCode:"this QR Code dosent exist, kidly visit our stand to get a valid one",
        successfull:"voting SuccesFull",
        unSuccessfull:"voting unSuccessful"
    },
    urlResponse: {
        addSuccessful:"url Added Succesfully",
        addUnsuccessful:"url Adding UnSuccessfull",
    }
}