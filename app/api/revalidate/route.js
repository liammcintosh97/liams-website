import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
 
export async function POST() {
  revalidatePath("/")
  return NextResponse.json({ revalidated: true, now: Date.now() })
}