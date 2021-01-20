import React, { Component } from 'react'
import NameListItem from '../NameListItem/index'

class DyamicText extends Component{
    constructor(props){
        super(props);
        this.state = {
            text:"text",
            count:0,
            userData:{
                name:"Israel"
            },
            usersCollection:[
                {
                    name:"israel"
                }
            ],
            stringsArray:[]
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
    }

    onChangeHandler( event ){
        //console.log( event )
        console.log( event.target.value)
        this.setState( { text: event.target.value })
    }

    clickHandler(){
        this.setState( { count:this.state.count + 1 } )

        this.setState( { stringsArray:[...this.state.stringsArray, this.state.text]})

    }

    componentDidMount(){
        //alert("el componente esta listo")
        this.setState({text:"Hola Koders"})
    }

    render(){
       
        return(
            <>
                <input onChange={this.onChangeHandler} className="form-control" />
                <h2>{ this.state.text ? this.state.text : "no hay texto en el state" }</h2>
                <button onClick={this.clickHandler}>Click me!</button>
                <p>{this.state.count}</p>
                <ul>
                    {
                        this.state.stringsArray.map( string => {
                            return  <NameListItem
                                        texto={string}
                                        otraProp = "otra prop"
                                    />
                        })
                    }
                    
                </ul>
            </>
        )
    }  
}

export default DyamicText
