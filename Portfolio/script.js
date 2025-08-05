document.querySelector('.cross').style.display='none'; // Hide the cross icon initially
document.querySelector('.hamburger').addEventListener("click", () => { // Toggle sidebar visibility on hamburger click
    document.querySelector('.sidebar').classList.toggle('sidebarGo'); // Toggle the sidebar class
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display='inline' // Show the hamburger icon
        document.querySelector('.cross').style.display='none'   // Hide the cross icon
    }
    else{
        document.querySelector('.ham').style.display='none' // Hide the hamburger icon
        document.querySelector('.cross').style.display='inline' // Show the cross icon
    }
})