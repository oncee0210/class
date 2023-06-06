import {
  RedInput,
  BlueButton
} from './BoardWrite.styles'

export default function BoardWriteUI(props) {
  return (
    <>
      <div>
        <label>작성자</label>
        <RedInput type="text" onChange={props.onChangeWriter} />
      </div>
      <div>
        <label>제목</label>
        <input type="text" onChange={props.onChangeTitle} />
      </div>
      <div>
        <label>내용</label>
        <input type="text" onChange={props.onChangeContents} />
      </div>
      <BlueButton onClick={props.onClickSubmit}>게시글 등록</BlueButton>
    </>
  )
}