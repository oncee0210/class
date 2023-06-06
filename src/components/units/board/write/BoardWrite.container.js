import { useMutation } from '@apollo/client'
import { useState } from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'

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
      onClickSubmit={onClickSubmit} 
      onChangeWriter={onChangeWriter} 
      onChangeTitle={onChangeTitle} 
      onChangeContents={onChangeContents} 
    />
  )
}