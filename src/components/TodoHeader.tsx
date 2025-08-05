function TodoHeader() {
    return (
        <>
            <nav className="tw:mt-24">
                <ul className="tw:flex tw:justify-between">
                    <li className="tw:text-white tw:font-black tw:text-3xl tw:tracking-[0.25em]">TODO</li>
                    <li id="theme-toggle" className="">
                        <img src="/icon-moon.svg" alt=""/>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export { TodoHeader };