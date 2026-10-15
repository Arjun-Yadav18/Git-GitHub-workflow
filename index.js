const btn = document.getElementById("btn")
const addText = document.getElementById("addText");
const clickHandler = () => {
    const p = document.createElement('p');
    p.textContent = "You are learning about the workflow of git and github and it's main four working areas."
    addText.append(p);
}
btn.addEventListener('click', () => {
    clickHandler();
})
