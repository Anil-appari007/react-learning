import react,{Fragment, useState} from "react";
import "../css/App.css"
function App(props){
    const [isTrue, setIsTrue] = useState(false)
    const toggleTrue = () =>{
        if (isTrue){
            setIsTrue(false)
            return
        }
        setIsTrue(true)
    }
    return(
        <Fragment>
            {/* <h1 className="h1-green">HelloWorld2 from jsx....</h1> */}
            <h1 className="h1-green">{props.msg}</h1>
            {isTrue &&
                <Fragment>
                    <p1>render on true</p1>
                </Fragment>
            }
            <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>Toggle isTrue</a>

        </Fragment>
    )
}

export default App