// Lấy modal
var modal = document.getElementById("myModal");

// Lấy nút mở modal
var btn = document.getElementById("openModalBtn");

// Lấy phần tử <span> đóng modal
var span = document.getElementsByClassName("close")[0];

// Khi người dùng nhấn vào nút, mở modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Khi người dùng nhấn vào <span> (x), đóng modal
span.onclick = function() {
    modal.style.display = "none";
}

// Khi người dùng nhấn vào bất cứ đâu bên ngoài modal, đóng modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
