import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';

export const PaginatedPosts = () => {
  const [page, setPage] = useState(0)
  const getPaginatedPosts = async (page = 0) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?page=${page}`)
    return data;
  }
  const { error, isPreviousData, isLoading, isFetching, data, isError } = useQuery(['posts', page], () => getPaginatedPosts(page), { keepPreviousData: true })

  const handlePreviousPage = () => {
    setPage((old) => Math.max(old - 1, 0))
  }
  const handleNextPage = () => {
    !isPreviousData && data?.hasMore && setPage((old) => old + 1)
  }

  return (
    <div>
      {isLoading ? (<div>Loading...</div>) : isError ? <div>Error,  {error.message}</div>
        : <ul>
          {data.map((post, index) => (
            <li key={index}>
              {post.body}
            </li>
          ))}
        </ul>
      }
      <span>Current Page: {page + 1}</span>
      <button disabled={page === 0}
        onClick={handlePreviousPage}
      >Previous Page</button>
      <button onClick={handleNextPage} disabled={isPreviousData || !data?.hasMore}>Next Page</button>
    </div>
  )
}
