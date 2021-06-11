const dogFilters = (name, dogs) => {
    console.log(name);
    console.log(dogs);

    const dog = dogs.filter(dog => dog.name.toLowerCase() === name.toLowerCase());

    return dog[0];
}

export default dogFilters;