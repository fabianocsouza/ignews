import Image from "next/image";

export function Header(){
  return (
    <header>
      <div>
        <Image src="/images/logo.svg" alt="Ig.news"  layout="fill" />
        <nav>
          <a>Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  )
}