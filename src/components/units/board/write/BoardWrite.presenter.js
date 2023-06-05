export default function BoardWriteUI(props) {
  return (
    <>
      <div>
        <label>작성자</label>
        <input type="text" onChange={props.writer} />
      </div>
      <div>
        <label>제목</label>
        <input type="text" onChange={props.title} />
      </div>
      <div>
        <label>내용</label>
        <input type="text" onChange={props.contents} />
      </div>
      <button onClick={props.submit}>게시글 등록</button>
    </>
  )
}