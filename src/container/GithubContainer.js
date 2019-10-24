import React, { Component } from 'react';
import { connect } from 'react-redux';
import Github from '../component/Github';
import { getPost } from '../store/modules/github';

class GithubContainer extends Component{

    // When the value of state is changed, it will call the render function.
    // There will be unnecessary rendering along with degrade performance and difficult optimization
    // To deal with, use shouldComponentUpdate API to check the validation both current and next value
    // Depending on returning boolean value, able to control rendering and it could improve the performace

    shouldComponentUpdate = (nextProps, nextState) => {
        const { githubList } = this.props;

        if(githubList !== nextProps.githubList){
            return true; // rendering
        }
        else{
            return false; // no rendering
        }
    }

    onSelectedGithub = (postId) => {
        const { getPost } = this.props;
        getPost(postId);
    };

    render(){

        const { githubList } = this.props;

        return(
            <Github
                githubList={githubList}
                onSelectedGithub={this.onSelectedGithub}
            />
        )

    }
};

const mapStateToProps = (state) => {
    return {
        githubList : state.githubReducer.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPost : (postId) => { dispatch(getPost(postId)) }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GithubContainer);