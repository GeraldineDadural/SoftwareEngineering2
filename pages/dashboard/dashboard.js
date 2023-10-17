function dashboard(){
    document.getElementById("dashboardcomponents").style.display = "block";
    document.getElementById("usercomponents").style.display = "none";
    document.getElementById("supplierscomponents").style.display = "none";
    document.getElementById("categorycomponents").style.display = "none";
    document.getElementById("productcomponents").style.display = "none";
    document.getElementById("reportscomponent").style.display = "none";
    document.getElementById("profilecomponents").style.display = "none";

}
function user(){
    document.getElementById("dashboardcomponents").style.display = "none";
    document.getElementById("usercomponents").style.display = "block";
    document.getElementById("supplierscomponents").style.display = "none";
    document.getElementById("categorycomponents").style.display = "none";
    document.getElementById("productcomponents").style.display = "none";
    document.getElementById("reportscomponent").style.display = "none";
    document.getElementById("profilecomponents").style.display = "none";
}
function adduser(){
    document.getElementById("adduserform").style.display = "block";
    document.getElementById("blur").style.display = "block";
}
function useraccclose(){
    document.getElementById("adduserform").style.display = "none";
    document.getElementById("blur").style.display = "none";
}
function suppliers(){
    document.getElementById("dashboardcomponents").style.display = "none";
    document.getElementById("usercomponents").style.display = "none";
    document.getElementById("supplierscomponents").style.display = "block";
    document.getElementById("categorycomponents").style.display = "none";
    document.getElementById("productcomponents").style.display = "none";
    document.getElementById("reportscomponent").style.display = "none";
    document.getElementById("profilecomponents").style.display = "none";
}
function addsupplier(){
    document.getElementById("addsuppform").style.display = "block";
    document.getElementById("blur2").style.display = "block";
}
function suppaccclose(){
    document.getElementById("addsuppform").style.display = "none";
    document.getElementById("blur2").style.display = "none";
}
function category(){
    document.getElementById("categorycomponents").style.display = "block";
    document.getElementById("usercomponents").style.display = "none";
    document.getElementById("supplierscomponents").style.display = "none";
    document.getElementById("dashboardcomponents").style.display = "none";
    document.getElementById("productcomponents").style.display = "none";
    document.getElementById("reportscomponent").style.display = "none";
    document.getElementById("profilecomponents").style.display = "none";
}
function addcategory(){
    document.getElementById("addcatform").style.display = "block";
    document.getElementById("blur3").style.display = "block";
}
function cataccclose(){
    document.getElementById("addcatform").style.display = "none";
    document.getElementById("blur3").style.display = "none";
}
function product(){
    document.getElementById("productcomponents").style.display = "block";
    document.getElementById("categorycomponents").style.display = "none";
    document.getElementById("usercomponents").style.display = "none";
    document.getElementById("supplierscomponents").style.display = "none";
    document.getElementById("dashboardcomponents").style.display = "none";
    document.getElementById("reportscomponent").style.display = "none";
    document.getElementById("profilecomponents").style.display = "none";
}
function addproduct(){
    document.getElementById("addproform").style.display = "block";
    document.getElementById("blur4").style.display = "block";
}
function proaccclose(){
    document.getElementById("addproform").style.display = "none";
    document.getElementById("blur4").style.display = "none";
}
function reports(){ document.getElementById("productcomponents").style.display = "none";
document.getElementById("categorycomponents").style.display = "none";
document.getElementById("usercomponents").style.display = "none";
document.getElementById("supplierscomponents").style.display = "none";
document.getElementById("dashboardcomponents").style.display = "none";
    document.getElementById("reportscomponent").style.display = "block";
    document.getElementById("profilecomponents").style.display = "none";
}
function profile(){
    document.getElementById("profilecomponents").style.display = "block";
    document.getElementById("productcomponents").style.display = "none";
    document.getElementById("categorycomponents").style.display = "none";
    document.getElementById("usercomponents").style.display = "none";
    document.getElementById("supplierscomponents").style.display = "none";
    document.getElementById("dashboardcomponents").style.display = "none";
    document.getElementById("reportscomponent").style.display = "none";
}
