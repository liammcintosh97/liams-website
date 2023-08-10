import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { NextResponse } from 'next/server'

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export async function GET() {
  const command = new ScanCommand({
    TableName: "liams-website-events",
  });

  const response = await docClient.send(command);
  return NextResponse.json(response.Items);
};

