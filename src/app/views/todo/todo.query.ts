// src/app/graphql/hello-world.query.ts
import { gql } from 'apollo-angular';

export const HELLO_WORLD_QUERY = gql`
  query HelloWorld($id: ID!) {
    hello(id: $id)
    world(id: $id)
  }
`;