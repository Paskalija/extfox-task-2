import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import data from "./api";
import "./App.css";

const HomePage = () => {
    const [cards, setCards] = useState([]);
    const [visible, setVisible] = useState(7);

    const showMoreCards = () => {
        setVisible((prevValue) => prevValue + 1);
    };

    useEffect(() => {
        setCards(data);

    }, []);


    return (
        <Container>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {cards.slice(0, visible).map((card) => (
                    <div class="col">
                        <div class="card h-100" key={card.id}>
                            <img src={card.img} class="card-img-top h-100" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{card.title}</h5>
                                <p class="card-text">{card.recipe}</p>

                            </div>
                        </div>
                    </div>
                ))}
               
                <Button   variant="outline-warning morecards" onClick={showMoreCards}  > Load More </Button>

            </div>

        </Container>
    )
}

export default HomePage;



