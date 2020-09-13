import React from 'react';

import { Button, Paper } from '@material-ui/core';

export default function Question(props) {

    const {addFunction} = props;
    const {text} = props;

    const childrens = React.Children.toArray(props.children);

    return (
        <div className="question-container">
            <Paper elevation={3} className="m-2 p-4 question-box">
                {text}
            </Paper>
            <div className="answers-container">
                {childrens.map((answer, index) => {
                    return (
                        <Button
                            variant="contained"
                            onClick={() => { addFunction(answer.props.weights) }}
                            className={`m-2 bg-${index % 2 === 1 ? "primary" : "secondary"}`}
                        >
                            {answer}
                        </Button>
                    )
                })}
            </div>
        </div>
    )

}