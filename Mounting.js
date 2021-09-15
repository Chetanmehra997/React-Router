import React from "react"

class Mounting extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <> 
           <h5> Mounting </h5>
           <div>
            These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
            </div>
            <br/>

            <span>
            constructor()
            <br/>
            
            static getDerivedStateFromProps()
           <br/>
            render()
            <br/>
            componentDidMount()
            </span>
            </>
        )
    }
}

export default Mounting;