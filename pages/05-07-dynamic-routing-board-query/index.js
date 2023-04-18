import { useRouter } from 'next/router'

export default function StaticRoutingBoardPage() {
  const router = useRouter();

  const moveToView = (postid) => {
    router.push(`/05-08-dynamic-routed-board-query/${postid}`)
  }

  return(
    <>
      <button onClick={()=>moveToView(275795)}>275795 게시글 이동</button>

      <button onClick={()=>moveToView(275796)}>275796 게시글 이동</button>

      <button onClick={()=>moveToView(275797)}>275797 게시글 이동</button>
    </>
  )
}