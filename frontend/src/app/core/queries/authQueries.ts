import gql from "graphql-tag";

export const LOGIN_QUERY = gql`
  mutation login ($email :String!  , $password : String!){
  login(email: $email, password: $password) {
    user {
      id
      email
    }
    auth_token {
      access_token
      refresh_token
      token_type
      expires_in
    }
     error {
      message
    }
  }
}
`;
export const SIGNUP_QUERY = gql`
  mutation createUser ($name : String! ,$email :String!  , $password : String! , $password_confirmation : String!){
  createUser(name : $name ,email: $email, password: $password , password_confirmation : $password_confirmation) {
    auth_token {
      access_token
      token_type
      expires_in
    }
  }
}
`;
