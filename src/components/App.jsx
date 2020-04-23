import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import "./layout.css";

function createCard(contact) {
    return (
        <Card
            key={contact.id}
            name={contact.name}
            img={contact.profileImg}
            species={contact.species}
            job={contact.occupation}
            email={contact.email}
        />
    );
}

function App() {
    return (
        <>
            <div className="container">
                <h1>Contacts</h1>
                {contacts.map(createCard)}
            </div>

            <footer>
                R3MANIAC © 2010-{new Date().getFullYear()}
            </footer>
        </>
    )
}

export default App;

/* ==== NOTES ==== */
    // Previous repetitive method.
    // <Card
    //     name={contacts[0].name}
    //     img={contacts[0].profileImg}
    //     species={contacts[0].species}
    //     job={contacts[0].occupation}
    //     email={contacts[0].email}
    // />
    // <Card
    //     name={contacts[1].name}
    //     img={contacts[1].profileImg}
    //     species={contacts[1].species}
    //     job={contacts[1].occupation}
    //     email={contacts[1].email}
    // />
    // <Card
    //     name={contacts[2].name}
    //     img={contacts[2].profileImg}
    //     species={contacts[2].species}
    //     job={contacts[2].occupation}
    //     email={contacts[2].email}
    // />