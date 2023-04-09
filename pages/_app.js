import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

export default function App({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql", //graphql 주소
    cache: new InMemoryCache() //가져온 데이터를 메모리 임시공간에 저장
  })

  //ApolloProvider로 감싸기
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
