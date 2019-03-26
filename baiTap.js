// Bài 1: Viết chương trình nhập điểm của một sinh viên cho các môn: Vật lý, Hóa học, và Sinh học.
// Sau đó hiển thị điểm trung bình và tổng của những điểm này.
// Bài 2:  Viết chương trình nhập một giá trị là độ 0C (Celsius) và chuyển nó sang độ 0F (Fahrenheit).
// [Hướng dẫn: C/5 = (F-32)/9]
// Bài 3: Viết chương trình tính diện tích hình tròn
// Bài 4: Viết chương trình chu vi hình tròn

function bai1() {
    let diemVL = parseInt(prompt("Nhap diem Vat Li"));
    let diemHH = parseInt(prompt("Nhap diem Hoa Hoc"));
    let diemSH = parseInt(prompt("Nhap diem Sinh Hoc"));

    let avg = (diemHH + diemSH + diemVL) / 3
    return document.write("<br>Diem trung binh la " + avg );

}
bai1();

function bai2() {
    let doC = parseInt(prompt("Nhap vao nhiet do C"));
    let doF = (doC*9+160)/5;
    return document.write("<br>"+doC +" do C la "+doF+" do F");
}
bai2();

var r = parseInt(prompt("Nhap ban kinh R:"));

function bai3() {
    let s = r*r*Math.PI;
    return document.write("<br>Dien tich hinh tron la ",s);
}
bai3();

function bai4() {
    let c = 2*r*Math.PI;
    return document.write("<br>Dien tich hinh tron la ",c);
}
bai4();