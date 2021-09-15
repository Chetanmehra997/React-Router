import React from "react"
import {Link} from "react-router-dom"

class Nav extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <> 
                <div>

                <div>
                    <Link to="/">Mounting</Link>
                 </div>
                  <div>
                    <Link to="/updating">Updating</Link>
                 </div>
                 <div>
                    <Link to="/unmounting">Unmounting</Link>
                 </div>
                 </div>
            </>
        )
    }
}

export default Nav;