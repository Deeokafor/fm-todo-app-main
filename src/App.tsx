import { TodoHeader } from './components/TodoHeader'
import { AddTodoBar } from './components/AddTodoBar'
import { TodoList } from './components/TodoList'
import { BottomPanel } from './components/BottomPanel'

function App() {
  return (
    <>
      <main className="tw:text-center tw:w-full tw:h-min-screen tw:h-screen tw:flex tw:justify-center tw:font-josefin-sans tw:text-todo-lt-dark-grayish-blue">
        <div className="tw:bg-[url(bg-mobile-light.jpg)] tw:w-full tw:h-[300px] tw:bg-no-repeat tw:bg-cover tw:fixed tw:-z-20"></div>

        <div className='tw:w-[80%] tw:font-semibold tw:text tw:pb-14'>
          <TodoHeader />
          <AddTodoBar />
          <TodoList />
          <BottomPanel />      
          <footer className="tw:mt-14 tw:capitalize">drag and drop to reorder list.</footer>
        </div>

      </main>
    </>
  )
}

export default App;
