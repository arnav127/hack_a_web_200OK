import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { AuthProvider } from '../lib/auth'

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client'

import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_BASEURI}/graphql`,
    credentials: 'include',
})

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("JWT");
    return {
        headers: {
            ...headers,
            Authorization: token ? `JWT ${token}` : "",
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </ApolloProvider>
    )
}

export default App
