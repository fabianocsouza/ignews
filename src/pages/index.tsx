import Head from 'next/head'
import Image from 'next/image'
export default function Home() {
  return (
    <>
      <Head>
          <title>Home | ig.news</title>
      </Head>
      <main>
        <section>
          <span>👏 Hey, welcome</span>
        </section>
        <Image src="/images/avatar.svg" alt="Girl coding" width="334" height="520" />
      </main>
    </>
  )
}
