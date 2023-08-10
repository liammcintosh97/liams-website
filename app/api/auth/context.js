
import { CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: process.env.COGNITO_POOL_ID,
  ClientId: process.env.COGNITO_CLIENT_ID
}

const Context = {userPool: new CognitoUserPool(poolData)}

export {Context}

