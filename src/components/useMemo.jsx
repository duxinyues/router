import { useState, useMemo } from "react"
function MemoTest() {
    const [count, setCount] = useState(0);
    const changeCount = (count) => {
        console.log("-09", count)
        return count
    }
    const letterCount = useMemo(() => changeCount(count),[count])
    return <div>
        <div>{letterCount}</div>
        <button onClick={() => {
            if (count < 10) {
                setCount((c) => c + 1)
            }
        }}>改变count</button>
        {/* <button>更新</button> */}
    </div>
}

export default MemoTest