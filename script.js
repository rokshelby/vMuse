
function openModal() {

    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
     setTimeout(() => {
       modal.classList.add("show");
     },10);
}
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.classList.remove("show");

    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}
