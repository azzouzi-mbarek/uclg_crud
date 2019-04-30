
import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';


const uri = 'http://192.168.33.20/graphql'; // <-- add the URL of the GraphQL server here



const errorLink = onError(({ graphQLErrors, networkError, operation, response }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ extensions, message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    // console.log(networkError);
  }
  if (operation) {
    console.log(`[Operation error]: ${operation}`);



  }
  if (response) {
    console.log(`[Response error]: ${response}`);
    // console.log(response);
  }


});



export function createApollo(httpLink: HttpLink) {

  const httpLinkWithErrorHandling = ApolloLink.from([
    errorLink,
    httpLink.create({ uri })
  ]);


  return {
    link: httpLinkWithErrorHandling,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all'
      }
    }
  };
}

@NgModule({
  exports: [
    ApolloModule,
    HttpLinkModule,

  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
