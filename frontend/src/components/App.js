import react,{Fragment, useEffect, useRef, useState} from "react";
import "../css/App.css"
import Input from "./Input";
function App(props){
    const [isTrue, setIsTrue] = useState(false);
    const [crowd, setCrowd] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const dobRef = useRef(null);

    const toggleTrue = () =>{
        if (isTrue){
            setIsTrue(false)
            return
        }
        setIsTrue(true)
    }
    useEffect(() =>{
        console.log("useEffect started");
        let people = [
            {
                id: 1,
                firstName: "aaa",
                lastName: "alll",
                dob: "2024-12-22"
            },
            {
                id: 2,
                firstName: "bbbb",
                lastName: "blll",
                dob: "2024-12-23"
            }
        ]
        setCrowd(people);
    },[]);

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(firstName, lastName, dob)

        if (firstName != ""){
            addPerson(firstName, lastName, dob)
        }
    }
    const addPerson = (newfirstName, newlastName, newdob)=>{
        let newPerson = {
            id: crowd.length +1,
            firstName: newfirstName,
            lastName: newlastName,
            dob: newdob,
        }

        const newCrowd = crowd.concat(newPerson);
        setCrowd(newCrowd)
        setFirstName("");
        setLastName("");
        setDob("");

        //
        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        dobRef.current.value = "";
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

            <hr/>
            <form autoComplete="off" onSubmit={handleSubmit}>
            <Input
                title="first name"
                type="text"
                name="first-name-new"
                ref={firstNameRef}
                className="form-control"
                onChange={(event) => setFirstName(event.target.value)}
                >
            </Input>
            <Input
                title="last name"
                type="text"
                name="last-name-new"
                ref={lastNameRef}
                className="form-control"
                onChange={(event) => setLastName(event.target.value)}
                >
                </Input>
            <Input
                title="dob"
                type="date"
                name="dob-new"
                ref={dobRef}
                className="form-control"
                onChange={(event) => setDob(event.target.value)}
            ></Input>
            <input type="submit" value="submit" className="btn btn-primary"></input>
            </form>
            

            <div>
                firstName: {firstName}<br/>
                lastName: {lastName}<br/>
                dob: {dob}<br/>
            </div>
            <hr/>
            <h4>People</h4>
            <ul className="list-group">
                {crowd.map((m) =>(
                    <li key={m.id} className="list-group-item">{m.firstName} {m.lastName}</li>
                ))}
            </ul>

        </Fragment>
    )
}

export default App