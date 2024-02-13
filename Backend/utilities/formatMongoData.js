const mongoose = require('mongoose');
const constants = require('../constants/index');

module.exports.formatMongoData = (data) => {

    if (Array.isArray(data)) {
        let convertedArray = [];
        for (value of data) {
            console.log(value);
            convertedArray.push(value.toObject());
        }
        return convertedArray;
    }
    return data.toObject();
}

module.exports.checkObjectId = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error(constants.databaseMessage.INVALID_ID);
    }
}