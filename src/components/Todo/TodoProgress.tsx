import useTodos from '../../hooks/service/useTodos';

function TodoProgress() {
  const { todos } = useTodos();
  const completedPercentage =
    todos.todo.length + todos.done.length > 0
      ? (todos.done.length /
          (todos.todo.length + todos.done.length + todos.doing.length)) *
        100
      : 0;

  return (
    <div className="py-2 pr-1 tablet:px-6 border-r dark:border-black w-1/2 flex flex-col justify-center">
      <div className="flex justify-between px-1 pb-1">
        <p className="text-xs tablet:text-base">Goals</p>
        <p className="text-xs tablet:text-base">
          {completedPercentage < 100
            ? completedPercentage.toFixed(1)
            : completedPercentage}
          %
        </p>
      </div>
      <div
        className="relative w-full h-5 tablet:h-8 rounded-full bg-amber-200 dark:bg-white
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
