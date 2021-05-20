let friend = {
    name: 'José',
    weight: 86.7,
    fatten(weight=0){
        console.log('Fed up.')
        this.weight += weight
    }
}
console.log(`${friend.name} weighs ${friend.weight}.`)
friend.fatten(2.5)
console.log(`${friend.name} weighs now ${friend.weight}.`)