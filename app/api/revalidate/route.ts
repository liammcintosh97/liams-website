import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { Revalidation } from './type'
import { APIResponse } from '../type'
 
export async function POST() {
  try {
    revalidatePath("/")
    const revalidation = { 
      revalidated: true, 
      now: Date.now() 
    }
    const res: APIResponse<Revalidation> = {
      success: true,
      message: 'Revalidated Successfully',
      data: revalidation
    }
    return NextResponse.json(res)
  }catch(e) {
    const revalidation = { 
      revalidated: false, 
      now: Date.now() 
    }
    const res: APIResponse<Revalidation> = {
      success: false,
      message: 'Failed to revalidate',
      data: revalidation
    }
  }
}