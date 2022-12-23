import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
export const Users = () => {
  const getUsers = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data;
  }
  const handleError = (error, query) => {
    // Do anything with the error here e.g conditionally render modals with error.message as body to improve your app's user experience
    toast.error(`Something went wrong: ${error.message}`)
    console.log(`An error occured, ${error.message}`)
  }

  // The getUsers function overides the default query function 
  const usersObject = useQuery('users', getUsers, {
    onError: handleError,
    useErrorBoundary: error => error.response?.status >= 500
  })
  return (
    <div>{usersObject.data && usersObject.data.map((user, index) => (
      <p key={index}>{user.name}</p>
    ))}</div>
  )
}
