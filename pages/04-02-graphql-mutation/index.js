import { gql, useMutation } from '@apollo/client'

//보통 대문자로 만듬
const CREATE_BOARD = gql`
  mutation {
    createBoard(
      writer: "작성자",
      title: "제목입니다~",
      contents: "내용입니다~"
    ) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [myFunc] = useMutation(CREATE_BOARD)

  const onClickSubmit = async () => {
    const result = await myFunc()
    console.log(result)
    alert(result.data.createBoard.message)
  }

  return (
    <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
  )
}