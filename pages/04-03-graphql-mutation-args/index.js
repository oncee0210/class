import { gql, useMutation } from '@apollo/client'

//보통 대문자로 만듬
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) { #데이터타입 적는곳
    createBoard( #실제 전달할 (데이터)변수 적는곳
      writer: $writer,
      title: $title,
      contents: $contents
    ) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createBoard] = useMutation(CREATE_BOARD)

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        writer: "원스",
        title: "안녕하십니까요.",
        contents: "인사올립니다."
      }
    })
    console.log(result)
    alert(result.data.createBoard.message)
  }

  return (
    <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
  )
}