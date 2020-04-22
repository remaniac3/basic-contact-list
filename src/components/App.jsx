import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import "./layout.css";

function App() {
    return (
        <div>
            <h2>Contacts</h2>

            <Card
                name={contacts[0].name}
                img={contacts[0].profileImg}
                species={contacts[0].species}
                job={contacts[0].occupation}
                email={contacts[0].email}
            />

            <Card
                name={contacts[1].name}
                img={contacts[1].profileImg}
                species={contacts[1].species}
                job={contacts[1].occupation}
                email={contacts[1].email}
            />

            <Card
                name={contacts[2].name}
                img={contacts[2].profileImg}
                species={contacts[2].species}
                job={contacts[2].occupation}
                email={contacts[2].email}
            />

        </div>
    )
}

export default App;