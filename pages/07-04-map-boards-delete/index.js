import { useQuery, gql, useMutation } from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`
  query fetchBoards{ 
    fetchBoards{
      number
      writer
      title
    }
  }
`

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int){ 
    deleteBoard(number: $number){
      message
    }
  }
`

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;

  &:first-child {
    border-top: 1px solid #ddd;
  }
`

const Column = styled.div`
  width: 20%;
  padding: 10px;
  border-left: 1px solid #ddd;

  &:first-child {
    border-left: 0;
  }
`

export default function StaticRoutedBoardPage() {
  const {data} = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = async (event) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      await deleteBoard({
        variables: {
          number: Number(event.target.id)
        },
        refetchQueries: [{query: FETCH_BOARDS}]
      })
    }
  }

  return (
    <>
      {data?.fetchBoards.map(el => (
        <Row key={el.number}>
          <Column><input type="checkbox"/></Column>
          <Column>{el.number}</Column>
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
          <Column><button id={el.number} onClick={onClickDelete}>삭제</button></Column>
        </Row>
      ))}
    </>
  )
}