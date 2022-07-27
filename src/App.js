import logo from "./logo.svg";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpClient,
  from,
  HttpLink
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import ShowData from "./component/ShowData";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`GraphQl error ${message}`);
    });
  }
});
const link = from([
  errorLink,
  new HttpLink({ uri: "https://countries.trevorblades.com/graphql" })
]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});
function App() {
  return (
    <ApolloProvider client={client}>
      <ShowData />
    </ApolloProvider>
  );
}

export default App;
