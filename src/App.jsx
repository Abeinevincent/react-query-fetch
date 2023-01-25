import { useQuery } from 'react-query'
import './App.css'
import { PaginatedPosts } from './components/PaginatedPosts'
import Posts from './components/Post'
import { Users } from './components/Users'
function App() {

  return (
    <div>
      <PaginatedPosts />
    </div>
  )

}

export default App
