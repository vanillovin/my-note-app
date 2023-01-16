import TodoList from './components/todo/TodoList';
import TodoProgress from './components/todo/TodoProgress';
import Weather from './components/Weather';

function App() {
  return (
    <>
      <div className="mt-8 bg-white m-2 rounded-sm flex p-2 dark:bg-amber-400 dark:bg-opacity-40 dark:text-white select-none shadow-lg">
        <TodoProgress />
        <Weather />
      </div>
      <TodoList />
    </>
  );
}

export default App;
