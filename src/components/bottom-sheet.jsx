import React, { useRef,useState } from "react"
import "./bottom-sheet.css"

function Bottomsheet (){

    const [fullbtn, setfullbtn] = useState(0)
    const [halfbtn, sethalfbtn] = useState(0)

    const navref = useRef();
    const conref = useRef();

    const shownavref=()=> {
        navref.current.classList.remove("responsivefull","responsivehalf");
        navref.current.classList.toggle("responsive")
        setfullbtn(0)
        sethalfbtn(0)
    }
    const showfullnavref=()=> {
        if(fullbtn === 0){
            navref.current.classList.remove("responsive","responsivehalf")
            navref.current.classList.toggle("responsivefull")
            navref.current.classList.toggle("responsive")
            setfullbtn(1)
            sethalfbtn(0)
        }
    }
    const showhalfnavref=()=> {
        if(halfbtn === 0){
            navref.current.classList.remove("responsive","responsivefull")
            navref.current.classList.toggle("responsivehalf")
            navref.current.classList.toggle("responsive")
            sethalfbtn(1)
            setfullbtn(0)
        }
    }
    return (
        <div className="nav-container" ref={conref}>
            <p className="para">Bottom sheet</p>
            <nav ref={navref}>
                <button className="nav-btn" onClick={showfullnavref}>Fully open</button>
                <button className="nav-btn" onClick={showhalfnavref}>Half open</button>
                <button className="nav-btn" onClick={shownavref}>
                    Closed
                </button>
            </nav>
            <button className="nav-btn" onClick={shownavref}>
                Open
            </button>
        </div>
    )
}

export default Bottomsheet