// app/page.js
import Link from 'next/link'

function Page() {
  return (
    <div>
      <h1>Welcome to Memeland</h1>
      <p>Your one-stop destination for all things meme!</p>
      <Link href="/app">Enter App</Link>
    </div>
  );
}

export default Page;