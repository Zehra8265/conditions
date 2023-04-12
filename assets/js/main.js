
//1. Verilmiş 3 rəqəmli ədədin bütün
//  rəqəmlərinin bi-birindən fərqli olub olmadığını 
//  tapan alqoritmi yazın(Məsələn: input 223, output 
//     "bütün rəqəmlər bərabər deyil " (false) ).

var num=prompt("Eded daxil edin ")
if(num>99 && num<1000){
var teklik=num%10;
var onluq=((num-teklik)%100)/10;
var a=(onluq*10)+teklik;
var yuzluk=(num-a)/100;
if(teklik==onluq==yuzluk)
{
    alert("Beraberdir")
}
else{
    alert("Beraber deyil")
}

}
else{
    alert("3 reqemli eded daxil edin!")
} 




// 2. İstifadəçi char tipindən dəyər daxil
//  edib (input) char 'a' hərfinə bərabərdirsə ekrana
//   "Azərbaycan dili seçildi" yazısı gəlsin(output), 
//   'r' hərfinə bərabərdirsə "Rus dili seçildi" yazısı gəlsin (output).
//    Digər bütün hallarda 
//  "Yanlış sorğu" yazısı gəlsin(output).

var herf=prompt("herf daxil edin")
switch(herf){
    case "a":
    console.log("Azerbaycan dili seçildi")
    break;
    case "r":
        console.log("Rus dili sechildi")
        break;
        default:
            console.log("yanlisdir!");
            break;
}
