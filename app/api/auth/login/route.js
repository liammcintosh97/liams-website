import { AuthenticationDetails, CognitoUser} from 'amazon-cognito-identity-js';
import { NextResponse } from 'next/server'
import {Context} from '../context.js'

export async function POST(request){
  const body = await request.json()
 
  const authenticationDetails = new AuthenticationDetails({
    Username : body.username,
    Password : body.password,
  });

  const userData = {
    Username : body.username,
    Pool : Context.userPool
  };
  var cognitoUser = new CognitoUser(userData);

  const credentials = await authenticate(cognitoUser,authenticationDetails)

  return  NextResponse.json({
    username: body.username,
    credentials: credentials
  })
}

function authenticate(user,details){
  return new Promise((resolve,reject)=>{
    user.authenticateUser(details, {
      onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();
        var idToken = result.idToken.jwtToken;
        return resolve({accessToken,idToken})
      },
      onFailure: function(err) {
        return reject(err);
      }
    })
  })
}
