import React from 'react';

import { Button, Paper } from '@material-ui/core';

export default function Result(props) {

    const {weights} = props

    const bread = {
        white: "Белый хлеб",
        black: "Чёрный хлеб",
        sdoba: "Сдоба",
        lavash: "Лаваш",
        pizza: "Пицца",
        chiabutta: "Чиабата",
        tortilia: "Тортилья",
      }
    
    const weightArray = []
    for(let key in weights)
    {
        weightArray.push(weights[key])
    }
    const maxRate = Math.max(...weightArray)

    const breadResult = []
    for(let key in weights)
    {
        if(weights[key] === maxRate) breadResult.push(bread[key])
    }
    

    return (
        <Paper className="p-4">
            <div>
            Поздравляю, вы {breadResult[0]}!
            </div>
            {breadResult.length>1 &&
            <div>
                {`Возможно вы также: ${breadResult.reduce((total,current)=>{return `${total}, ${current}`})}`}
            </div>}
        </Paper>
    )

}