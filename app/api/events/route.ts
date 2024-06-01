import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { NextResponse } from 'next/server'
import type { Event } from '../../util/Events/type';
import type { APIResponse } from "../type";
import { EventsRequestBody } from "../../components/Events/type";
import { ScanFilter } from "./type";

const config = {
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
};

const client = new DynamoDBClient(config);
const docClient = DynamoDBDocumentClient.from(client);

/**
 * Gets all the Events
 * @returns {Promise<NextResponse<Event[]>>}
 */
export async function GET(request: Request): Promise<NextResponse<APIResponse<Event[]>>> {
  try {
    const url = new URL(request.url) 
    const searchParams = url.searchParams
    const eventType: string | null = searchParams.get('eventType')

    let scanFilter: ScanFilter | undefined = undefined
    if (eventType !== '' && eventType !== null){
      scanFilter = {
        FilterExpression: `#eventType = :eventType`,
        ExpressionAttributeNames: {
          '#eventType' : 'eventType',
        },
        ExpressionAttributeValues: {
          ':eventType': eventType,
        }
      }
    }

    const command = new ScanCommand({
      TableName: "liams-website-events",
      ...scanFilter
    });

  
    const dbRes = await docClient.send(command);
    const items = dbRes.Items as Event[]
    const res: APIResponse<Event[]> = {
      success: true,
      message: 'Events retrieved successfully',
      data: items
    }
  
    return NextResponse.json(res);
  }catch(e) {
    const res: APIResponse<Event[]> = {
      success: false,
      message: 'Failed to retrieve Events',
      data: e
    }
    return NextResponse.json(res);
  }
};

