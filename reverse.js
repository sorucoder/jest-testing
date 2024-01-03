export default function reverse(array) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    while (leftIndex < rightIndex) {
        [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]];
        leftIndex++;
        rightIndex--;
    }
    return array;
}