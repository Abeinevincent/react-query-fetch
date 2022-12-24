import './App.css'
import { PaginatedPosts } from './components/PaginatedPosts'
import Posts from './components/Post'
import { Users } from './components/Users'
function App() {

  return (
    <div>
      {/* <Users />
      <Posts /> */}
      <PaginatedPosts />
    </div>
  )

}

export default App