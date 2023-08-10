import {CognitoUser} from 'amazon-cognito-identity-js';
import { NextResponse } from 'next/server'
import { Context } from '../context.js'

export async function POST(request){
  const body = await request.json()

  const userData = {
    Username : body.username,
    Pool : Context.userPool
  };
  var cognitoUser = new CognitoUser(userData);
  try{
    cognitoUser.signOut();
    return NextResponse.json({success: true})
  }catch(e){
    console.error(e)
    return NextResponse.json({success: false,error: e})
  }

}