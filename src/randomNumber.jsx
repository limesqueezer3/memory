export function randomIntSet(quantity, max){
    const set = new Set()
    while(set.size < quantity) {
        set.add(Math.floor(Math.random() * max) + 1)
    }
    return set
}