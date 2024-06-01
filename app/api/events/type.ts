export interface ScanFilter {
  FilterExpression: string,
  ExpressionAttributeValues: Record<string,string>,
  ExpressionAttributeNames: Record<string,string>,
}