import { gql, useMutation } from '@apollo/client'
import { useState } from 'react';
import BoardWriteUI from './BoardWrite.presenter';

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

export default function BoardWrite() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD)

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        writer: writer, //writer state를 가져옴 스코프체인
        title: title, //title state를 가져옴 스코프체인
        contents: contents //contents state를 가져옴 스코프체인
      }
    })
    console.log(result)
    alert(result.data.createBoard.message)
  }

  const onChangeWriter = (event) => {
    setWriter(event.target.value)
  }
  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }
  const onChangeContents = (event) => {
    setContents(event.target.value)
  }

  return (
    <BoardWriteUI 
      submit={onClickSubmit} 
      writer={onChangeWriter} 
      title={onChangeTitle} 
      contents={onChangeContents} 
    />
  )
}