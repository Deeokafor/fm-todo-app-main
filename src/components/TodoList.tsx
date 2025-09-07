import data from "../assets/data.json";

interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}


function TodoList() {
    const itemsLeft = data.filter(item => !item.completed).length;

    return (
        <>
            <ul className="tw:mt-6 tw:rounded-lg tw:bg-white tw:shadow-xl tw:text-todo-lt-very-dark-grayish-blue tw:font-black">
                {data.map((item: TodoItem) => (
                    <li
                        key={item.id}
                        className="tw:w-full tw:px-5 tw:py-5 tw:flex tw:flex-row tw:justify-between tw:border-todo-lt-dark-grayish-blue/35 tw:border-b-[1.5px]"
                    >
                        <input
                            className="tw:mr-3 tw:appearance-none tw:after:border-[2px] tw:after:rounded-full tw:after:border-todo-lt-light-grayish-blue tw:after:px-3 tw:after:py-1 tw:checked:hidden"
                            type="checkbox"
                            checked={item.completed}
                            name=""
                            id=""
                        />
                        <span className="tw:mr-auto">{item.text}</span>
                        <span className="close">
                            <img src="icon-cross.svg" alt="" />
                        </span>
                    </li>
                ))}

                <div className="tw:w-full tw:px-5 tw:py-5 tw:flex tw:flex-row tw:justify-between tw:text-todo-lt-dark-grayish-blue">
                    <p>
                        <span>{itemsLeft}</span> items left
                    </p>
                    <button id="clearCompletedItems" className="tw:capitalize" type="button">
                        clear completed
                    </button>
                </div>
            </ul>
        </>
    );
}

export { TodoList };