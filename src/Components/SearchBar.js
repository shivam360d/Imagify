import React from 'react';
class SearchBar extends React.Component{
state= { term: ''};

onFormSubmit = event =>{
    event.preventDefault();
    //calling the function, passed as a prop by parent, so that we can get the input value in the parent component
    //onSubmit is the prop, do not confuse it with the event handler.
    this.props.onSubmit(this.state.term);
}

    render(){
        return (
            <div className="ui segment" >
                <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                <label>Image Search</label>
                <input type="text" value={this.state.term} onChange={(e)=>{this.setState({term: e.target.value})}}/></div>
                </form>
            </div>
        );
    }
}

export default SearchBar;