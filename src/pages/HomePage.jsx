import { useState } from "react";

export default function HomePage() {
    const [count, setCount] = useState(0)

    const handleClick = (e) => {
        e.preventDefault()
        setCount(count + 1)
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleClick} className="border border-black p-4">Click Me</button>
            <p>Count:{count}</p>
        </div>
    );
}