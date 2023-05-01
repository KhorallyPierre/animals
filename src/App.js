import './app.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';



function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
    const [animals, setAnimals] = useState([])

    // this is an eventhandler for when user clicks on something. 
    const handleClick = () => {

        setAnimals([...animals, getRandomAnimal()])
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })
    return (
        <div className='app'>
            {/* onClick is the event */}
            <button onClick={handleClick}> Add animal</button>
            <div className="animal-list"> {renderedAnimals}</div>
        </div>
    );
}

export default App