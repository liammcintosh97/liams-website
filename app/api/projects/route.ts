import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { NextResponse } from 'next/server'
import type { Project } from "./type";
import type { APIResponse } from "../type";

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
 * Gets all the Projects
 * @returns {Promise<NextResponse<Project[]>>}
 */
export async function GET(): Promise<NextResponse<APIResponse<Project[]>>> {
  try {
    const command = new ScanCommand({
      TableName: "liams-website-events",
    });
  
    const dbRes = await docClient.send(command);
    const items = dbRes.Items as Project[]
    const res: APIResponse<Project[]> = {
      success: true,
      message: 'Projects retrieved successfully',
      data: items
    }
  
    return NextResponse.json(res);
  }catch(e) {
    const res: APIResponse<Project[]> = {
      success: false,
      message: 'Failed to retrieve Projects',
      data: e
    }
    return NextResponse.json(res);
  }
};

