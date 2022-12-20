import axios from 'axios'
import { useQuery } from 'react-query'
import './App.css'

function App() {
  const getUsers = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data;
  }
  const handleError = (error, query) => {
    // Do anything with the error here e.g conditionally render modals with error.message as body to improve your app's user experience
    toast.error(`Something went wrong: ${error.message}`)
    console.log(`An error occured, ${error.message}`)
  }

  const usersObject = useQuery('users', getUsers, {
    onError: handleError,
    useErrorBoundary: error => error.response?.status >= 500
  })

  if (usersObject.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {
        usersObject.data.map((user, index) => (
          <p key={index}>{user.name}</p>
        ))
      }
    </div>
  )

}

export default App