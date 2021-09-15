import React from "react"

class Updating extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <> 
           <h5> Updating</h5> <br/>

           <div>
            An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:
            </div>
            <br/>
            <span>
            static getDerivedStateFromProps()
            <br/>
            shouldComponentUpdate()
            <br/>
            render()
            <br/>
            getSnapshotBeforeUpdate()
            <br/>
            componentDidUpdate()
            <br/>
            </span>
            </>
        )
    }
}

export default Updating;