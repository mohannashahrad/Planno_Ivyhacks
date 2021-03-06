import React from 'react'
import { Card, Button } from 'react-bootstrap'

export const Task = (props) => {
    const { id, text, deadline } = props.task;
    const deleteTask = props.deleteTask;

    const handleSubmit = e => {
        e.preventDefault();
        deleteTask(id);
    }

    const CardText = () => {
        if (props.empty) {  
            return <Card.Text style= {{marginBottom: "0px"}}> Relax... <span style = {{float: "right"}}> ... or add a new task! </span></Card.Text>
        } else {
            return <Card.Text style= {{marginBottom: "0px"}}>{text} <span style = {{float: "right"}}> ... within {deadline} days </span></Card.Text>
        }
    }

    return (
        <div style={{ padding: "10px"}}>
        <Card className="task" style = {{width: "100%", color: "#fff", background: "#87C38F", padding: "0px 10px", textAlign: "left", align: "center"}}>
            <CardText />
            <Button onClick={handleSubmit} type="submit" className="delete-btn" style= {{backgroundColor: "#C55967", border:"0", textAlign:"left"}}> ✖ </Button>
        </Card>
        </div>
    )
}
