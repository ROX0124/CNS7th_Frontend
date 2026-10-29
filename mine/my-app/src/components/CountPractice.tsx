import { useState } from 'react'

export default function CountPractice(){
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>현재 숫자: {count}</p>
            <button 
                onClick={() => setCount(previous => previous + 2)}>
                    + 2
            </button>
            <button 
                disabled={count <= 0} 
                onClick={() => setCount(previous => previous - 1)}>
                    - 1
            </button>
            <button 
                onClick={() => setCount(0)}>
                    초기화
            </button>
        </div>
    )
}