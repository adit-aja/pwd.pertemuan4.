function disp_alert(){
    alert("alert di box ini adlah sebuah onload")
}
function disp_confrim(){
    alert("apakah anda yakin?")
}
function disp_prompt(){
    var name = prompt ("please enter your name")
    if(name!=null && name!=""){
        document.write("hallo "+ name+" ganteg ,selamat datang")
    }
}
function pushData(){
    var kota=["cianju","bandung","jakarta"];
    document.write(kota);
    document.write("<br>");
    kota.push("pandeglag");
    document.write(kota);
}
function popData(){
    var kota=["cianju","bandung","jakarta"];
    document.write(kota);
    document.write("<br>");
    kota.pop();
    document.write(kota);
}
function unshitData(){
    var kota=["cianju","bandung","jakarta"];
    document.write(kota);
    document.write("<br>");
    kota.anshit();
    document.write(kota);
}
function concatData(){
    var kota=["cianju","bandung","jakarta"];
    var buah=["durian","rambutan","leci"]
    document.write(kota);
    document.write("<br>");
    document.write(buah);
    var gabung = kota.concat(buah);
}
function indexData(){
    var kota=["cianju","bandung","jakarta"];
    document.write(kota.indexOf("bandung"));
}
function reverseData(){
    var kota=["cianju","bandung","jakarta"];
    document.write(kota);
    document.write("<br>");
    kota.reverse();
    document.write(kota);
}
function documen(){
    myelement=document.getElementById("intro");
    document.getElementById("demo").innerHTML="texs dari halaman intro adalah"+
    myelement.innerHTML
}

console.log('hello wold');
var nama ='Tibigis';
console.log('helo'+nama);

alas=4;
tutup=6;
selimut=4;
luas=2*3.14*tutup*(tutup+selimut);
console.log(luas)


