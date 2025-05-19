function createCounter() {
    let count = $state(0)
    return {
        // value: count,
        getValue: ()=>{
            return count;
        },
        increment: () => {
            count += 1;
        },
        reset: () => {
            count = 0
        }
}
    
}
export default createCounter