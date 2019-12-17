function gameStart() {

    var sayi;
    var tahmin;
    var hak = parseInt(prompt("Kaç tahmin hakkı istersiniz?"));
    var i = 1;


    sayi = Math.round(Math.random() * 20);
    do {
        tahmin = parseInt(prompt("Tahmini Giriniz: "));
        if (tahmin < sayi) {
            window.alert("Daha büyük bir sayı giriniz.");
        }
        if (tahmin > sayi) {
            window.alert("Daha küçük bir sayı giriniz.");
        }
        if (tahmin == sayi) {
            window.alert("Tebrikler bildiniz. Tuttuğum sayı: " + sayi);
            window.alert(i + ". hakkınızda bildiniz.");
            i++;
        }
        i++;
    }
    while ((tahmin != sayi) && i <= hak)
    if (hak == i - 1) {
        window.alert("Hakkınız kalmadı. Tutulan sayı : " + sayi);
    }
}