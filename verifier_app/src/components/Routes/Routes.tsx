import './Routes.css'
import {Link} from "react-router-dom";
import {GrFormAdd, MdAdd, MdDelete, MdSearch} from "react-icons/all";
import {useEffect} from "react";

interface PropTypes {
    setPage(a:string) : void;
}

export const Routes = (props:PropTypes) => {
    useEffect(
        () => {props.setPage("Home")},
        []
    )
    return(
        <div id={"Routes"} className={"flex flex-col justify-center items-center text-center"}>
            <div id={"router-menu"} className={"flex flex-col justify-evenly items-center"}>
                <Link to="/create" onClick={()=>props.setPage("Add")}>
                    <div className={"route-menu-item inline-flex items-center"}>

                            <MdAdd style={{color:"white"}} className={"fill-current w-4 h-4 mr-2"}/>

                            <span>Add</span>

                    </div>
                </Link>
                <Link to="/view" onClick={()=>props.setPage("View")}>
                    <div className={"route-menu-item inline-flex items-center"}>
                        <MdSearch style={{color:"white"}} className={"fill-current w-4 h-4 mr-2"}/>
                        View
                    </div>
                </Link>
            </div>
        </div>
    )
}
