import { useRouter } from 'next/router'

export default function StaticRoutingBoardPage() {
  const router = useRouter();

  return(
    <>
      <button onClick={() => router.push("/05-06-static-routed-board-query")}>275796번 게시글 이동</button>

      <button onClick={() => router.push("/05-06-static-routed-board-query")}>275797 번 게시글 이동</button>

      <button onClick={() => router.push("/05-06-static-routed-board-query")}>275798 게시글 이동</button>
    </>
  )
}