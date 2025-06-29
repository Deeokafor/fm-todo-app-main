import { TodoHeader } from './components/TodoHeader'
import { AddTodoBar } from './components/AddTodoBar'
import { TodoList } from './components/TodoList'
import { BottomPanel } from './components/BottomPanel'

function App() {
  return (
    <>
      <main className="tw:bg-orange-700 tw:text-center tw:w-full tw:h-min-screen tw:h-screen">
        <div className="tw:bg-[url(./public/)]"></div>

        <TodoHeader />
        <AddTodoBar />
        <TodoList />
        <BottomPanel />      
      </main>
      <footer className="tw:">drag and drop to reorder list.</footer>
    </>
  )
}

export default App;
