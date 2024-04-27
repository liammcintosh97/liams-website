/** A Response from the API */
export interface APIResponse<T> {
  /** The success status of the request */
  success: boolean
  /** The message returned from the server */
  message: string
  /** The data returned by the server */
  data: T 
}