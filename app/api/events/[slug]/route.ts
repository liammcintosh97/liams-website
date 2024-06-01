import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";
import { NextResponse } from 'next/server'
import { APIResponse } from "../../type";
import type { Event } from '../../../util/Events/type'

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
 * Gets an Event
 * @param {Request} request - The request to the API
 * @returns {Promise<NextResponse<APIResponse<Event>>>}
 */
export async function GET(request: Request): Promise<NextResponse<APIResponse<Event>>> {
  const split = request.url.split("/")
  const slug = split[split.length-1]

  const command = new GetCommand({
    TableName: "liams-website-events",
    Key: {
      slug: slug
    }
  });
  try{
    const dbRes = await docClient.send(command);
    const item = dbRes.Item as Event
    const res: APIResponse<Event> = {
      success: true,
      message: 'Retireved the Event sucessfully',
      data: item
    }
    return NextResponse.json(res);
  }catch(e){
    const res: APIResponse<Event> = {
      success: false,
      message: 'Failed to retireved the Project',
      data: e
    }
    return NextResponse.json(res);
  }
};