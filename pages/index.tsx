import Link from "next/link";

const index = () => {
  return (
    <div>
      <h3>This is a home page</h3>
      <p><Link href={'/blog/2'}>We are linking to blog 2 page</Link></p>
    </div>
  )
}

export default index;
