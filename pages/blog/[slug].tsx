import { useRouter } from 'next/router'

const Blog = () => {
    const router = useRouter();
    return <p>Blog number: {router.query.slug}</p>
}

export default Blog;