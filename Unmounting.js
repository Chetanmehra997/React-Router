import React from "react"

class Unmounting extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <> 
            <h5>Unmounting</h5><br/>
           <div>
                This method is called when a component is being removed from the DOM:
                
          </div>
          <br/>
            <span>
             componentWillUnmount()
             </span>
            </>
        )
    }
}

export default Unmounting;