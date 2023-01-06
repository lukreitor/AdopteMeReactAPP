import Pet from './Pet';

const Results = ({ pets }) => {
    return (
        <div className="search">
            {!pets.length ? (
                <h1>No Pets Found</h1>
            ) : (
                pets.map((pet) => (
                    <Pet
                        //{...pet} -> spread operator, it will pass all the properties of the pet object to the Pet component
                        name={pet.name}
                        animal={pet.animal}
                        breed={pet.breed}
                        key={pet.id}
                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                        id={pet.id}
                    />
                ))
            )}
        </div>
    );
};

export default Results;
