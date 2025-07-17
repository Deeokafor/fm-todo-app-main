function AddTodoBar() {
    return (
        <>
            <div className="tw:w-full tw:px-5 tw:py-5 tw:bg-white tw:flex tw:rounded-lg tw:mt-10">
                <input type="radio" name="addTodo" id="" className="tw:mr-2.5 tw:outline-none"/>
                <input type="text" name="" id="" placeholder="Create a new todo..."/>
            </div>
        </>
    );
}

export { AddTodoBar };