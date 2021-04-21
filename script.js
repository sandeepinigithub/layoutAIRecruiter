var dropDown = false;
var showDetail_var = false;

// nav function
function toggle() {
  if (!dropDown) {
    dropDown = true;
    document.querySelectorAll(".toggle")[0].style.display = "initial";
    document.querySelectorAll(".toggle")[1].style.display = "initial";
    document.querySelectorAll(".toggle")[2].style.display = "initial";
    document.querySelectorAll(".toggle")[3].style.display = "initial";
  } else closetoggle();
}

function closetoggle() {
  if (dropDown) {
    dropDown = false;
    document.querySelectorAll(".toggle")[1].style.display = "none";
    document.querySelectorAll(".toggle")[2].style.display = "none";
    document.querySelectorAll(".toggle")[3].style.display = "none";
    document.querySelectorAll(".toggle")[0].style.display = "none";
  }
}
// container funtion
function showDetail() {
  if (!showDetail_var) {
    showDetail_var = true;
    document.querySelectorAll(".l-info")[0].style.display = "initial";
    document.querySelectorAll(".l-info")[1].style.display = "initial";
    document.querySelectorAll(".l-info")[2].style.display = "initial";
  } else closeshowDetail();
}

function closeshowDetail() {
  if (showDetail_var) {
    showDetail_var = false;
    document.querySelectorAll(".l-info")[0].style.display = "none";
    document.querySelectorAll(".l-info")[1].style.display = "none";
    document.querySelectorAll(".l-info")[2].style.display = "none";
  }
}
