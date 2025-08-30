function BottomPanel() {
    return (
        <>
            <div className="tw:w-full tw:px-5 tw:py-5 tw:flex tw:flex-row tw:justify-center tw:shadow-2xl tw:rounded-lg tw:mt-10 tw:text-todo-lt-dark-grayish-blue tw:font-black">
                <button type="button" className="panelButtons tw:mx-2 tw:text-blue-500">All</button>
                <button type="button" className="panelButtons tw:mx-2">Active</button>
                <button type="button" className="panelButtons tw:mx-2">Completed</button>
            </div>
        </>
    )
}

export { BottomPanel };