import * as S from './BoardWrite.styles'

export default function BoardWriteUI(props) {
  return (
    <>
      <div>
        <label>작성자</label>
        <S.RedInput type="text" className="req-input" onChange={props.onChangeWriter} />
      </div>
      <div>
        <label>제목</label>
        <input type="text" className="req-input" onChange={props.onChangeTitle} />
      </div>
      <div>
        <label>내용</label>
        <input type="text" className="req-input" onChange={props.onChangeContents} />
      </div>
      <S.BlueButton 
        fz="14px"
        bgcolor="yellow"
        isTrue={props.mycolor}
        onClick={props.onClickSubmit}
      >
        게시글 등록
      </S.BlueButton>
    </>
  )
}