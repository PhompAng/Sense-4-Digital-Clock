var dn;
c1 = new Image(); c1.src = "file/clock/c1.png";
c2 = new Image(); c2.src = "file/clock/c2.png";
c3 = new Image(); c3.src = "file/clock/c3.png";
c4 = new Image(); c4.src = "file/clock/c4.png";
c5 = new Image(); c5.src = "file/clock/c5.png";
c6 = new Image(); c6.src = "file/clock/c6.png";
c7 = new Image(); c7.src = "file/clock/c7.png";
c8 = new Image(); c8.src = "file/clock/c8.png";
c9 = new Image(); c9.src = "file/clock/c9.png";
c0 = new Image(); c0.src = "file/clock/c0.png";
cb = new Image(); cb.src = "file/clock/cb.png";
cam = new Image(); cam.src = "file/clock/cam.png";
cpm = new Image(); cpm.src = "file/clock/cpm.png";
function extract(h,m,s,type) {
if (!document.images) return;
if (h <= 9) {
document.images.a.src = cb.src;
document.images.b.src = eval("c"+h+".src");
}
else {
document.images.a.src = eval("c"+Math.floor(h/10)+".src");
document.images.b.src = eval("c"+(h%10)+".src");
}
if (m <= 9) {
document.images.d.src = c0.src;
document.images.e.src = eval("c"+m+".src");
}
else {
document.images.d.src = eval("c"+Math.floor(m/10)+".src");
document.images.e.src = eval("c"+(m%10)+".src");
}
if (dn == "AM") document.j.src = cam.src;
else document.images.j.src = cpm.src;
}
function show3() {
if (!document.images)
return;
var Digital = new Date();
var hours = Digital.getHours();
var minutes = Digital.getMinutes();
var seconds = Digital.getSeconds();
dn = "AM";
if ((hours >= 12) && (minutes >= 1) || (hours >= 13)) {
dn = "PM";
hours = hours-12;
}
if (hours == 0)
hours = 12;
extract(hours, minutes, seconds, dn);
setTimeout("show3()", 1000);
}
