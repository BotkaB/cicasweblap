window.addEventListener("load", init);
var kepek = [
    {
        cim: "01-es kép",
        eleresiut:"./kepek/01.jpg",
        leírás:"Ez a első cicás kép",
    },
    {
        cim: "02-es kép",
        eleresiut:"./kepek/02.jpg",
        leírás:"Ez a második cicás kép",
    },
    {
        cim: "03-es kép",
        eleresiut:"./kepek/03.jpg",
        leírás:"Ez a harmadik cicás kép",
    },
    {
        cim: "04-es kép",
        eleresiut:"./kepek/04.jpg",
        leírás:"Ez a negyedik cicás kép",
    },
    {
        cim: "05-es kép",
        eleresiut:"./kepek/05.jpg",
        leírás:"Ez a ötödik cicás kép",
    },
    {
        cim: "06-es kép",
        eleresiut:"./kepek/06.jpg",
        leírás:"Ez a hatodik cicás kép",
    },
]
var aktualisKepIndex=0;

function ID(elem){
    return document.getElementById(elem);
}
function CLASS(elem){
    return document.getElementsByClassName(elem);
}

function $(elem){
    return document.querySelectorAll(elem);
}
function init(){
    kiirKepek()

    ID("galeria").style.backgroundColor="pink";
    for (let i = 0; i < kepek.length; i++) {
        /*CLASS("kepek")[i].style.border="12px solid gray"
        CLASS("kepek")[i].style.padding="12px"
        $("#galeria div img")[i].style.backgroundColor="purple"*/
        $("#galeria div")[i].className="divekFormazasa"
        $("#galeria div img")[i].addEventListener("click", kattintas);
    }
    $("#bal")[0].addEventListener("click", bal)
    $("#jobb")[0].addEventListener("click", jobb)
}


function kepMegjelenit(){

    var txt="<img src='"+kepek[aktualisKepIndex].eleresiut+"' alt='"+ kepek[aktualisKepIndex].cim +"'>";

    ID("nagykep").innerHTML=txt;
}
function bal(){
    aktualisKepIndex--;
    if(aktualisKepIndex<0){
        aktualisKepIndex=kepek.lenght-1
     
    }
    kepMegjelenit()

}

function jobb(){
    aktualisKepIndex++;
    if(aktualisKepIndex>kepek.lenght-1 ){
        aktualisKepIndex=0
     
    }
    kepMegjelenit()

}

function kattintas(event){
    //console.log(event.target.id)
    aktualisKepIndex=event.target.id;
    console.log(kepek[aktualisKepIndex]);
    /*var txt="<img src='"+kepek[aktualisKepIndex].eleresiut+"' alt='"+ kepek[aktualisKepIndex].cim +"'>";

    ID("nagykep").innerHTML=txt;*/
    kepMegjelenit();

}
function kiirKepek(){
    var txt = " ";
    for (let i = 0; i < kepek.length; i++) {
        txt = txt + "<div>" + "<h3>"+ kepek[i].cim +"</h3>" + "<img id='"+i+"' src='"+ kepek[i].eleresiut+ "' class='kepek' alt='cicás képek'/>"+
        "<p>"+kepek[i].leírás+"</p> </div>"
    }
    ID("galeria").innerHTML = txt;
}