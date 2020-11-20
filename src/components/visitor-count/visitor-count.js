import React, {useEffect, useState} from 'react';
import './visitor-count.scss';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

let dynamodb;
try {
  dynamodb = new AWS.DynamoDB(require('./local').options);
} catch (err) {
  dynamodb = new AWS.DynamoDB()
}

const params = {
  Key: {
    counterName: {
      S: "VISITORS"
    }
  },
  TableName: "cloud-resume"
};

export function VisitorCount() {
  let [visitors, setVisitors] = useState(0);
  useEffect( () => {
    if (process.env.NODE_ENV === 'production') {
      dynamodb.getItem(params).promise().then(data => setVisitors(data.Item.visitorCount.N));
      setVisitors(visitors++);
      let updateParams = {
        ExpressionAttributeNames: {
          "#VC": "visitorCount"
        },
        ExpressionAttributeValues: {
          ":v": {
            N: "1"
          }
        },
        Key: {
          "counterName": {
            S: "VISITORS"
          }
        },
        ReturnValues: "ALL_NEW",
        TableName: "cloud-resume",
        UpdateExpression: "ADD #VC :v"
      };
      dynamodb.updateItem(updateParams).promise().then(data => console.log(data));
  }
  }, []);
  return (
      <div className="visitor-count">
        {visitors === 0 ? "loading visitor count..." : "visitor count: " + visitors}
      </div>
    )
}
