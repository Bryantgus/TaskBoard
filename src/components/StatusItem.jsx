export default function StatusItem(statusImg) {
    return (
        <div>
            <div className="w-[230px] h-[30px] bg-sky-300">
                <img src={statusImg} alt="Status Task" />
            </div>
            <span></span>
        </div>
    )
}