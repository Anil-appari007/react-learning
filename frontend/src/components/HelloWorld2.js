import react,{Fragment} from "react";
import "../css/App.css"
function HelloWorld2(props){
    return(
        <Fragment>
            {/* <h1 className="h1-green">HelloWorld2 from jsx....</h1> */}
            <h1 className="h1-green">{props.msg}</h1>
        </Fragment>
    )
}

export default HelloWorld2