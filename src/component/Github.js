import React, { Component } from 'react';

export default class Github extends Component{
    constructor(props){
        super(props);

        this.state = {
            githubInput : ''
        };

        this.setGithub = this.setGithub.bind(this);
    }

    setGithub = (e) => {
        this.setState({
            githubInput : e.target.value
        })
    };

    render(){

        const { githubList, onSelectedGithub } = this.props;

        return(
            <div>
                <input type="text" placeholder="Github ID" onChange={this.setGithub} />
                <button onClick={() => onSelectedGithub(this.state.githubInput)}>SEND</button>
                {githubList.map((el, index) => {
                    return(
                        <div key={index}>
                            {el.login} / {el.id} / <img src={el.avatar_url} alt="" style={{width: "25px", height: "20px"}} />
                        </div>
                    )
                })}
            </div>
        )
    }
}