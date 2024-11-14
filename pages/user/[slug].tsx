import { useRouter } from 'next/router'

const Blog = () => {
    const router = useRouter();
    return <p>User details: {router.query.slug}</p>
}

export default Blog;