import React from "react";
import Card from "react-bootstrap/Card";
import Didac from "./didac.jpg"

function GitHubCard(){
    return(
        <div>
            <Card style={{width: "18rem"}}>
                <Card.Img 
                style={{width:'200px'}} vatiant='top' src={Didac}
                />
                <Card.Body>
                    <Card.Title>
                        Didac Fernandez
                    </Card.Title>
                    <Card.Text>
                        Studying the SDSU Software Development Program Boot Camp
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard