var count = 0;
const saved = []

const increment = () => {
    count += 1;
    console.log(count)
    document.getElementById("count").innerText = count;
}

const save = () => {
    saved.push(count);
    count = 0;
    document.getElementById("count").innerText = count;
    document.getElementById("saved").innerText = saved.toString();
    document.getElementById("total").innerText = saved.reduce((a, b) => a + b, 0);
}

const reset = () => {
    count = 0;
    document.getElementById("count").innerText = count;
}
