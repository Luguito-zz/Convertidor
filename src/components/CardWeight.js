import React from 'react';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './css/Weight.scss'

const CardWeight = (props) =>{
    return(
        <div>
            <Card className="card-margin">
                <CardContent>
                    <h1>{props.name}</h1>
                    <h2>{props.result}{props.weight}</h2>
                </CardContent>
                <CardActions className="input-margin">
                    <Input type="number"  onChange={props.onChange}/>
                </CardActions>
            </Card>
    </div>
    )
}

export default CardWeight;