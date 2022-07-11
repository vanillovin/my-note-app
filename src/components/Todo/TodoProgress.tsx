import useTodos from '../../hooks/service/useTodos';

function TodoProgress() {
  const { todos } = useTodos();
  const completedPercentage =
    todos.todo.length + todos.done.length > 0
      ? (todos.done.length /
          (todos.todo.length + todos.done.length + todos.doing.length)) *
        100
      : 0;
  console.log(completedPercentage);

  return (
    <div className="py-2 px-6 border-r w-1/2 flex flex-col justify-center">
      <div className="flex justify-between px-1 pb-1">
        <p>Goals</p>
        <p>
          {completedPercentage < 100
            ? completedPercentage.toFixed(1)
            : completedPercentage}
          %
        </p>
      </div>
      <div
        className="relative w-full h-8 rounded-full bg-amber-200 dark:bg-white
                  bg-opacity-40 dark:bg-opacity-40"
      >
        <div
          style={{ width: `${completedPercentage}%` }}
          className="absolute top-0 left-0 bg-amber-400 bg-opacity-40 z-10 h-full rounded-full transition-all"
        ></div>
      </div>
    </div>
  );
}

export default TodoProgress;
