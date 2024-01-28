const wrapper = document.getElementById("popupWrapper");
const popup = wrapper.querySelector("div#popup");

popup.querySelector("div#titlebar > i#close").addEventListener("click", () => {
    wrapper.style.display = "none";
})

function showPopup(victim) {
    wrapper.style.display = "flex";
    
    popup.querySelector("#name").textContent = victim.Name;
    popup.querySelector("#born").textContent = victim.Born;
    popup.querySelector("#died").textContent = victim.Died;
    popup.querySelector("#age").textContent = victim.Age;
    popup.querySelector("#ethnicity").textContent = victim.Ethnicity;
    popup.querySelector("#note").textContent = victim.Notability;
}