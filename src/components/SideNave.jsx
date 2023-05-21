import { useEffect, useState } from "react"

export default function SideNave({ toggleShowSidNav }) {
    const [right, setRight] = useState(true)

    useEffect(() => {
        setRight(false)
    }, [])

    return (
        <div className=' z-[1000] w-screen h-screen bg-black fixed top-0 left-0 bg-opacity-20 p-5'>
            <div className="w-full h-full flex justify-end">
                <div className={` bg-white rounded h-full w-[400px] p-5 transition-all duration-200 ease-in-out ${right ? "translate-x-[450px]" : "translate-x-0"}`}>
                    <button onClick={toggleShowSidNav}>close</button>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus dolores quasi quidem magni commodi consectetur unde consequuntur, voluptatum illo ullam necessitatibus hic nostrum ratione perspiciatis minus veritatis, repudiandae ad vero?</p>
                </div>
            </div>
        </div>
    )
}
