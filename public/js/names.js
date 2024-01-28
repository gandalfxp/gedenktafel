const names = document.getElementById("names");
const style = window.getComputedStyle(names, null);

var nameCount = (screen.height / 16) * (screen.width / 150);
for (let i = 0; i < nameCount; i++) {
    let name = document.createElement("span");
    let victim = dataset[Math.floor(Math.random()*dataset.length)]
    name.textContent = victim.Name;

    name.addEventListener("click", () => {
        showPopup(victim);
    })

    names.append(name);
}