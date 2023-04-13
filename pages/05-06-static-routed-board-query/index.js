import { useQuery, gql } from '@apollo/client'

const FETCH_BOARD = gql`
  query fetchBoard($number: Int){ 
    fetchBoard(number: $number){
      writer
      title
      contents
    }
  }
`

export default function StaticRoutedBoardPage() {
  const {data} =  useQuery(FETCH_BOARD, {
    variables: {
      number: 275798 //275795
    }
  });
  
  return (
    <>
      <div>ㅇ번 게시글</div>
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data?.fetchBoard.contents}</div>
    </>
  )
}