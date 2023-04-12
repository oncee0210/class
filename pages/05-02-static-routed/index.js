import { useRouter } from 'next/router'

export default function StaticRoutedPage() {
  const router = useRouter();

  return (
    <>
      {router.pathname}
    </>
  )
}