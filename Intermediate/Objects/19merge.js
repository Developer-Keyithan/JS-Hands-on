function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const object1 = {
    name: 'John',
    age: 30
};

const object2 = {
    job: 'Engineer',
    city: 'New York'
};

const mergedObject = mergeObjects(object1, object2);

console.log(mergedObject);
