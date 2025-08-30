function AddTodoBar() {
    return (
        <>
            <div className="tw:w-full tw:px-5 tw:py-5 tw:bg-white tw:flex tw:rounded-lg tw:mt-10">
                <input type="radio" name="addTodo" id="" className="tw:mr-3 tw:appearance-none tw:after:border-[2px] tw:after:rounded-full tw:after:border-todo-lt-light-grayish-blue tw:after:px-3 tw:after:py-1"/>
                <input type="text" name="" id="" placeholder="Create a new todo..." className="tw:focus:text-todo-lt-very-dark-grayish-blue tw:focus:outline-hidden"/>
            </div>
        </>
    );
}

export { AddTodoBar };