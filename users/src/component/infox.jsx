import React from "react";

export default class Info extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            (<div>
                <p style={{fontSize: '20px', backgroundColor : 'green', }}>
                   Prenom : {this.props.name} <br/>  Nom de famille : {this.props.username} <br/> E-mail : {this.props.email}
                </p>
                </div>)
        )
    }
}