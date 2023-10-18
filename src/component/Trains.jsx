import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export const Trains=()=>{
    const[train,setTrain]=useState("");
    const[data,setData]=useState([]);

    return(
        <Card >
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                       <TextField  onChange={((e)=>setTrain(e.target.value))} fullWidth label="Search Here..." />
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained"  onClick={( )=>setData([...data,train])} fullWidth style={{height:"53px"}}>submit</Button>
                    </Grid>
                    <Grid item xs={2}>
                       <img src="./images/Engine.jpg" alt="engine"  style={{height:"330px",width:"260px",marginTop:"-45px"}} /> 
                    </Grid>
                    {
                        data.map((item)=>
                            <Grid item xs={item} fullWidth>
                                <img src="./images/Boogi.jpg" alt="" style={{height:"200px"}} />
                            </Grid>
                        )
                    }
                </Grid>
            </CardContent>
        </Card>
    );
}