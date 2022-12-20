import axios from 'axios'
import { useQuery } from 'react-query'
import './App.css'

function App() {
  const getUsers =  async () => {
    const {data} =  await axios.get('https://jsonplaceholder.typicode.com/users')
    return  data;
  }

  const { isLoading, isError, error, data } = useQuery('users', getUsers)
  if (isLoading) {
    return <div>Loading..</div>
  }
  if (isError) {
    return <div>Errror, {error.message}</div>
  }
  return (
    <div className="App">
      {data &&  data.map((user, index) => (
        <div  key={index}>{user.phone}</div>
      ))}
    </div>
  )
}

export default App