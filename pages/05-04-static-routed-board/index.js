import { useRouter } from 'next/router'

export default function StaticRoutedBoardPage() {
  const router = useRouter();

  return (
    <>
      {router.pathname}
    </>
  )
}