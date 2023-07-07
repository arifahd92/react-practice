import { useState } from "react"

function Wrapper(Component){
    return function hoc(props){// comp ka props attribute accessible
        let [count, setcount]=useState(0)
        function increment(){
            setcount(count+1)
        }
        return <Component village="sihoriya" val={count} fun={increment} {...props} />
    }
}
export default Wrapper