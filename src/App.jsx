import { useQuery } from 'react-query'
import './App.css'
import Posts from './components/Post'
import { Users } from './components/Users'

function App() {

  return (
    <div>
      <Users />
      <Posts />
    </div>
  )

}

export default App
