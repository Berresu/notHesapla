function hesapla(){
    let sinav1= document.getElementById("sinav1").value;
    let sinav2= document.getElementById("sinav2").value;
    let performans=document.getElementById("performans").value;
    let sonuc=document.getElementById("sonuc");
    
     let ortalama=(sinav1*1+sinav2*1+performans*1)/3;


    if(ortalama>=50){
        sonuc.innerHTML="HELAL OLSUN GEÇTİNİZ  ortalamanız= " +ortalama.toFixed(2);
   }
   else{
      sonuc.innerHTML="KALDIN:( 2. DÖNEM DÜZELTİRSİN ortalaman= " +ortalama.toFixed(2);
   }
}