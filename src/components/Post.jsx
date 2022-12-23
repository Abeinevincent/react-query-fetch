import { useQuery } from "react-query";

const Posts = () => {
    const { data, error, isError, isLoading } = useQuery({ queryKey: ["/posts"] })
    console.log(data)
    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error,  {error.message}</div>
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>{data?.map((post, index) => (
            <p key={index}>{post.title}</p>
        ))}</div>
    )
}
export default Posts;