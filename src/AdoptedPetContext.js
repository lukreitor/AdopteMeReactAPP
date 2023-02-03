import { createContext } from 'react';

const AdoptedPetContext = createContext({
    adoptedPets: [],
    addAdoptedPet: () => {}
});

export default AdoptedPetContext;
