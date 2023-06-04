import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router';
import { useState } from 'react';

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
  const router = useRouter

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value)
  }
  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }
  const onChangeContents = (event) => {
    setContents(event.target.value)
  }

  const [createBoard] = useMutation(CREATE_BOARD)

  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          writer: writer, //writer state를 가져옴 스코프체인
          title: title, //title state를 가져옴 스코프체인
          contents: contents //contents state를 가져옴 스코프체인
        }
      })
      alert(result.data.createBoard.message)
      router.push(`/05-10-dynamic-routed-board-mutation/${result.data.createBoard.number}`)
    } catch(error) {
      alert(error.message)
    }
  }

  return (
    <>
      <div>
        <label>작성자</label>
        <input type="text" onChange={onChangeWriter} />
      </div>
      <div>
        <label>제목</label>
        <input type="text" onChange={onChangeTitle} />
      </div>
      <div>
        <label>내용</label>
        <input type="text" onChange={onChangeContents} />
      </div>
      <button onClick={onClickSubmit}>게시글 등록</button>
    </>
  )
}