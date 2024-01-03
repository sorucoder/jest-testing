export default function min(array) {
    let min = array[0];
    for (let index = 0; index < array.length; index++) {
        if (array[index] < min) {
            min = array[index];
        }
    }
    return min;
}