'use strict'
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-1' });
exports.handler = function (event, context, callback) {
    console.log(JSON.stringify(`Event: event`))
    const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });
    const documentClient = new AWS.DynamoDB.documentClient({ region: 'us-west-1' })
    const params = {
        TableName: "SampleTable" ,
        Key: {
            id: "12345"
        }
    }
    documentClient.get(params, function (err, data) {
        if(err){
            console.log(err);
        }
        console.log(data);
    })
}