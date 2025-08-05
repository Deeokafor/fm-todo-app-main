function TodoList() {
    return (
        <>
            <div className="tw:mt-6 tw:rounded-lg tw:bg-white tw:shadow-xl">
                <div className="tw:w-full tw:px-5 tw:py-5 tw:flex tw:flex-row tw:justify-between">
                    <input className="tw:mr-3" type="checkbox" name="" id="" />
                    <span className="tw:mr-auto">take out bin</span>
                    <span className="close"><img src="icon-cross.svg" alt=""/></span>
                </div>

                <div className="tw:w-full tw:px-5 tw:py-5 tw:flex tw:flex-row tw:justify-between">
                    <p><span>0</span> items left</p>
                    <button id="clearCompletedItems" className="tw:capitalize" type="button">clear completed</button>
                </div>
            </div>
        </>
    )
}

export { TodoList };