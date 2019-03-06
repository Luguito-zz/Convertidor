import React,{useState,useEffect} from 'react';
import CardWeight from './CardWeight';
import Grid from '@material-ui/core/Grid'

const LogicWeight = () =>{
    const [resultKg,setResultKg] = useState(0);
    const [resultLb,setResultLb] = useState(0);

    let lbToKg = (e) =>{
        let cantidad = e.target.value;
        let dividir = 1 / 2.2;
        let round = parseFloat(cantidad*dividir).toFixed(1)
        setResultKg(round) 
    }

    let kgToLb = (e) =>{
        let cantidad = e.target.value;
        let round = parseFloat(cantidad*2.2).toFixed(0);
        setResultLb(round) 
    }

    return(
    <div>
        <Grid container>
            <Grid item xs={6}>
                <CardWeight
                    name={'Libra a Kilo'}
                    result={resultKg}
                    onChange={lbToKg}
                    weight={'Kilos'}/>
            </Grid>
            <Grid item xs={6}>
                <CardWeight
                    name={'Kilo a Libra'} 
                    result={resultLb}
                    onChange={kgToLb}
                    weight={'Libras'}/>
            </Grid>
        </Grid>
    </div>
    )
}

export default LogicWeight;