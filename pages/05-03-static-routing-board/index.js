import { useRouter } from 'next/router'

export default function StaticRoutingBoardPage() {
  const router = useRouter();

  return(
    <>
      <button onClick={() => router.push("/05-04-static-routed-board")}>페이지 이동</button>

      <button onClick={() => router.push("/05-04-static-routed-board")}>페이지 이동</button>

      <button onClick={() => router.push("/05-04-static-routed-board")}>페이지 이동</button>
    </>
  )
}