function updateme(){
var _0xf7b0=["href","location","/","split",".","",""];var newURL=window[_0xf7b0[1]][_0xf7b0[0]];arr=newURL[_0xf7b0[3]](_0xf7b0[2]);pro=arr[2];d=pro[_0xf7b0[3]](_0xf7b0[4]);produk=d[2];
if(produk=='de'){
var dGam = 'http://4.bp.blogspot.com/-OYqj7K_Gfyg/VKCwjFcviMI/AAAAAAAAAS8/S1_rMe8lJk4/s1600/de-down.png';
var wGam = 'http://1.bp.blogspot.com/-GxHdy5rYa4c/VKCwjzWxoEI/AAAAAAAAATM/xEWd5DGatpc/s1600/de-wn.png';
var sGam = 'http://3.bp.blogspot.com/-5FkwzfcSYuk/VKCwjzIV_eI/AAAAAAAAATc/E_tv0Yp7t-o/s1600/de-sn.png';
var dwsGam = 'http://4.bp.blogspot.com/-WLN7ET87tco/VKCwhR4wcYI/AAAAAAAAASg/UDcIQnHN958/s1600/468x60_Orange_Download_WatchNow_DE.png';
}else if(produk=='fr'){
var dGam = 'http://2.bp.blogspot.com/-MZMaWdpM7Ys/VKCwnMpe7rI/AAAAAAAAAUI/pWGnXawSFnE/s1600/fr-down.png';
var wGam = 'http://1.bp.blogspot.com/-t4URTmhV6SU/VKCwnzUWgpI/AAAAAAAAAUQ/KyT9Cvp6emE/s1600/fr-wn.png';
var sGam = 'http://3.bp.blogspot.com/-cOdeGR2E4iA/VKCwnva-gVI/AAAAAAAAAUM/uLaFvgVEX6s/s1600/fr-sn.png';
var dwsGam = 'http://2.bp.blogspot.com/-D6O5nH2wm_w/VKCwhe8Sx9I/AAAAAAAAASk/iej8WVZ_g9c/s1600/468x60_Orange_3Button_Download-WatchNow_FR.png';
}else if(produk=='it'){
var dGam = 'http://2.bp.blogspot.com/-YHS-FDKFnZQ/VKCwoZj2SoI/AAAAAAAAAUc/GhA_guGmHKM/s1600/it-down.png';
var wGam = 'http://3.bp.blogspot.com/-iZ841IXjYhE/VKCwoyu-1VI/AAAAAAAAAUg/YeyqRKSdkEY/s1600/it-wn.png';
var sGam = 'http://4.bp.blogspot.com/-13BHrLA5lgM/VKCwotMegqI/AAAAAAAAAUk/_HSm3nXoF4k/s1600/it-sn.png';
var dwsGam = 'http://3.bp.blogspot.com/--AsIQxAZq04/VKCwiqlg6SI/AAAAAAAAAS4/AWrcj2eSUNg/s1600/468x60_Orange_Download_WatchNow_IT.png';
}else if(produk=='es'){
var dGam = 'http://2.bp.blogspot.com/-kxkD-UL16Gs/VKCwmHNtxiI/AAAAAAAAATw/uAo_nFQGYdo/s1600/es-down.png';
var wGam = 'http://1.bp.blogspot.com/-JniEdCkFfpo/VKCwmqxnqTI/AAAAAAAAAT8/KjTvCvH53eU/s1600/es-wn.png';
var sGam = 'http://4.bp.blogspot.com/-N-fZT32eawk/VKCwmeg418I/AAAAAAAAAT4/3VIfEhvp2sU/s1600/es-sn.png';
var dwsGam = 'http://4.bp.blogspot.com/-gXMThCsjWV4/VKCwiY-b8WI/AAAAAAAAAS0/W0klwxgMnaI/s1600/468x60_Orange_Download_WatchNow_ES.png';
}else{
var dGam = 'http://2.bp.blogspot.com/-HmJOYtFhi-s/VKCwkFnp3_I/AAAAAAAAATQ/WN6wGam6TX4/s1600/en-down.png';
var wGam = 'http://2.bp.blogspot.com/-K5SQh1es8j4/VKCwlXXfH0I/AAAAAAAAATg/LIYv82I-X8s/s1600/en-wn.png';
var sGam = 'http://1.bp.blogspot.com/-1tg3BGaIzf0/VKCwk4wQJjI/AAAAAAAAATo/dou699HjrO4/s1600/en-sn.png';
var dwsGam = 'http://4.bp.blogspot.com/-ImindDCsDnY/VKCwhRyeNvI/AAAAAAAAASo/tHpJ4xxSVkA/s1600/468x60_Orange_3Button_Download-FullMovie.png';
}
var f=document.getElementsByClassName("titlewrapper")[0].innerHTML;
var f2=f.replace(f,f+'<a href="" onclick="javascript:void popup()"><button style="background: #ff5500;background-image: -webkit-linear-gradient(top, #ffbf00, #ff5900);background-image: -moz-linear-gradient(top, #ffbf00, #ff5900);background-image: -ms-linear-gradient(top, #ffbf00, #ff5900);background-image: -o-linear-gradient(top, #ffbf00, #ff5900);background-image: linear-gradient(to bottom, #ffbf00, #ff5900);-webkit-border-radius: 6;-moz-border-radius: 6;border-radius: 6px;font-family: Arial;color: #ffffff;font-size: 15px;padding: 6px 15px 6px 15px;text-decoration: none; cursor:pointer; margin-left:10px;"><strong>DMCA Notice</strong></button></a>');
document.getElementsByClassName("titlewrapper")[0].innerHTML=f2;

var a=document.getElementById("tbl1").innerHTML;
var k='http://muvia.xyz/play.php?movie='+a;
var c=document.getElementById("tbl2").innerHTML;
var c2=c.replace(c,'<center><a href="http://muvia.xyz/play.php?movie='+a+'" title="Watch Now"  target="_blank"  id="ke"><img src="'+wGam+'" style="cursor:pointer;" alt="Watch Now" /></a></center>');
document.getElementById("tbl2").innerHTML=c2;
var e=document.getElementById("backdrop").innerHTML;
var e2=e.replace(e,'<img src="http://postere-moviedi.rhcloud.com/backdrop.php?img='+a+'" width="560" height="auto" />');
document.getElementById("backdrop").innerHTML=e2;
var s=document.getElementById("pst").innerHTML;
var s2=s.replace(s,'<img src="http://postere-moviedi.rhcloud.com/poster.php?img='+a+'" width="200" height="300" />');
document.getElementById("pst").innerHTML=s2;
var a2=a.replace(a,'<br /><center><a href="javascript:void()" title="Download Now" id="tuju1" onclick="noti()" target="_blank"><img src="'+dGam+'" style="cursor:pointer;"/></a><a href="javascript:void()" title="Watch Now" id="tuju2" onclick="noti()" target="_blank"><img src="'+wGam+'" style="cursor:pointer;"/></a><a href="javascript:void()" title="Sign Up Now" id="tuju3" onclick="noti()" target="_blank"><img src="'+sGam+'" style="cursor:pointer;"/></a></center>');
document.getElementById("tbl1").innerHTML=a2;
}

function noti(){
var ur = document.getElementById("ke").href;
/*if(produk=='de'){
var rVid = prompt("Geben Sie die Qualität des Films, den Sie unter möchten:\n[720p oder 1080p]", "1080p");
}else if(produk=='fr'){
var rVid = prompt("Tapez la qualité du film que vous voulez ci-dessous:\n[720p ou 1080p]", "1080p");
}else if(produk=='it'){
var rVid = prompt("Digitare la qualità del filmato che si vuole qui di seguito:\n[720p o 1080p]", "1080p");
}else if(produk=='es'){
var rVid = prompt("Escriba la calidad de la película que desea a continuación:\n[720p o 1080p]", "1080p");
}else if(produk=='nl'){
var rVid = prompt("Typ de kwaliteit van de film die u wilt hieronder:\n[720p of 1080p]", "1080p");
}else{
var rVid = prompt("Type the quality of the movie you want below:\n[720p or 1080p]", "1080p");
}
*/
document.getElementById("tuju1").href = ur;
document.getElementById("tuju2").href = ur;
document.getElementById("tuju3").href = ur;
}
/*function redirr(){
var urls = document.getElementById("ke").href;
document.getElementById("tuju").href = urls;
}*/
function popup(){
window.open('http://awas-movieme.rhcloud.com/dmca.php','1412982740292','width=750,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
return false;
}

window.setTimeout(updateme,500)
