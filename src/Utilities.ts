
function multiplyTwo (array:number[]): number[] {
    return (
        array.map(item => item * 2));
}

function filterItems (array:number[], lessThen:number): number[] {
    return (
        array.filter(item => item < lessThen)
    )
}

export {multiplyTwo, filterItems};