import { useRouter } from 'next/router'

export default function StaticRoutingPage() {
  const router = useRouter();

  return(
    <>
      <button onClick={() => router.push("/05-02-static-routed")}>페이지 이동</button>
    </>
  )
}