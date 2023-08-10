import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { NextResponse } from 'next/server'

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export async function GET(request) {
  const split = request.url.split("/")
  const slug = split[split.length-1]

  const command = new GetCommand({
    TableName: "liams-website-events",
    Key: {
      slug: slug
    }
  });

  try{
    const response = await docClient.send(command);
    return NextResponse.json({
      success: true,
      item: response.Item
    });
  }catch(e){
    return NextResponse.json({
      success: false,
      error: e
    });
  }
};


export async function PATCH(request){
  const split = request.url.split("/")
  const slug = split[split.length-1]
  const body = await request.json()

  const command = new UpdateCommand({
    TableName: "liams-website-events",
    Key: {
      slug: slug
    },
    UpdateExpression: "set title = :title",
    ExpressionAttributeValues: {
      ":title": body.title,
    },
    ReturnValues: "ALL_NEW",
  });

  try{
    const response = await docClient.send(command);
    return NextResponse.json({
      success: true,
      response: response
    });
  }catch(e){
    return NextResponse.json({
      success: false,
      error: e
    });
  }
}