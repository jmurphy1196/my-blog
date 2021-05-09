import { gql } from "@apollo/client";

export const CREATE_SUBSCRIBER = gql`
  mutation sub($email: String!) {
    createSubscriber(input: { data: { email: $email } }) {
      subscriber {
        email
      }
    }
  }
`;
