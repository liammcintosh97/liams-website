
import { CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: process.env.AWS_COGNITO_POOL_ID,
  ClientId: process.env.AWS_COGNITO_CLIENT_ID
}

const Context = {userPool: new CognitoUserPool(poolData)}

export {Context}

