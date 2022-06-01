// Bài 1: Tính tiền lương nhân viên
/**
 * Tổng tiền lương nhân viên
 * Lương 1 ngày: 100000
 * Cho người dùng nhập vào số ngày làm
 * Công thức tính lương: Lương 1 ngày * số ngày làm
 * 
 * 
 * - Đầu vào:
 *      + luong1Ngay = 100000
 *      + soNgayLam 
 * - Xử lý:
 *      + Tao bien luong1Ngay gan gia tri la 100000
 *      + Tao bien soNgayLam gan gia tri la 0
 *      
 *      + tienLuong = luong1Ngay * soNgayLam
 * 
 * - Đầu ra:
 *      + tienLuong = ?
 */

var luong1Ngay = 100000;
var soNgayLam = 0;

soNgayLam = 5;

tienLuong = luong1Ngay * soNgayLam;

console.log("Bai 1: Tien luong la: " + (tienLuong.toLocaleString()) + ' VND');


//Bài 2: Tính giá trị trung bình
/**
 * Viết chương trình nhập vào 5 số thực
 * Tính giá trị trung bình của 5 số này và xuất ra màn mình
 * 
 * Gợi ý: Giá trị trung bình là tổng của 5 số người dùng nhập chia cho 5
 * 
 * 
 * - Đầu vào:
 *      + n1
 *      + n2
 *      + n3
 *      + n4
 *      + n5
 * - Xử lý: 
 *      + Tao bien n1 gan gia tri la 1
 *      + Tao bien n2 gan gia tri la 2
 *      + Tao bien n3 gan gia tri la 3
 *      + Tao bien n4 gan gia tri la 4
 *      + Tao bien n5 gan gia tri la 5
 * 
 *       + tong = n1 + n2 + n3 + n4 + n5
 *      
 *       + giaTriTrungBinh = tong / 5
 * - Đầu ra:
 *      + giaTriTrungBinh = ?
 */

//Tao bien
var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var n5 = 0;

// gan gia tri
n1 = 1;
n2 = 2;
n3 = 3;
n4 = 4;
n5 = 5;

tong = n1 + n2 + n3 + n4 + n5;

giaTriTrungBinh = tong / 5;

console.log("Bai 2: Gia tri trung binh la: " + giaTriTrungBinh);


//Bai 3: Quy đổi tiền
/**
 * Giá USD hiện nay là 23500 VND
 * Viết chương trình quy đổi tiền từ USD sang VND
 * Cho người dùng nhập vào số tiền USD
 * Tính và xuất ra số tiên sau khi quy đổi
 * 
 * Giả sử: 
 *      + 2 USD => 47000 VND
 * 
 * - Đầu vào: 
 *      + gia1USD = 23500 VND
 * 
 * - Xử lý:
 *      + Tao bien gia1USD gan gia tri la 23.500 VND
 *      + Tao bien giaNhap gan gia tri la 2
 *      + Tao bien giaQuy doi gan gia tri la 0
 * 
 *      + giaQuyDoi = giaNhap * gia1USD
 *  
 *- Đầu ra: 
        + giaQuyDoi = ?
 * 
 */

var gia1USD = 23500;
var giaNhap = 0;
var giaQuyDoi = 0;

giaNhap = 2;

giaQuyDoi = giaNhap * gia1USD;

console.log("Bài 3: Gia sau khi quy doi la: " + giaQuyDoi.toLocaleString() + ' VND');


//Bài 4: Tính diện tích, chu vi hình chữ nhật
/**
 * Viết chương trình nhập vào 2 chiều dài và chiều rộng của HCN
 * TÍnh và xuất ra diện tích, chu vi của HCN đó
 * 
 * - Đầu vào: 
 *      + chieuDai
 *      + chieuRong
 * 
 * - Xử lý:
 *      + Tao bienchieuDai gan gia tri là 5
 *      + Tao bien chieuRong gan gia tri la 3
 *      + Tao bien dienTich gan gia tri la 0
 *      + Tao bien chuVi gan gia tri la 0
 * 
 *      + dienTich = chieuDai * chieuRong
 *      + chuVi = (chieuDai + chieuRong) * 2
 * 
 * - Đầu ra:
 *      + dienTich = ?
 *      + chuVi = ?
 * 
 */

var chieuDai = 0;
var chieuRong = 0;

chieuDai = 5;
chieuRong = 3;

var dienTich = 0;
var chuVi = 0;

dienTich = chieuDai * chieuRong;
chuVi = (chieuDai + chieuRong) * 2;

console.log("Bài 4: Dien tich cua HCN la: " + dienTich);
console.log("Chu vi cua HCN la: " + chuVi);


//Bài 5: Tính tổng 2 ký số
/**
 * Viết chương trình nhập vào 1 số có 2 chữ số (VD: 12, 44, 83)
 * Tính tổng 2 ký số của số vừa nhập
 * Ví dụ: 
 * 12 => Tổng là 1 + 2 = 3
 * 44 => Tổng là 4 + 4 = 8
 * 
 * Gợi ý:
 * Hàng đơn vị: n % 10;
 * Hàng chục: n / 10;
 * 
 * - Đầu vào:
 *      n = 44
 * - Xử lý:
 *      + Tach lay hang don vi la n % 10
 *      + Tach lay hang chuc la n / 10 => làm tròn số Math.floor(n / 10)
 * 
 *      + tong = hangDonVi + hangChuc
 * - Đầu ra: 
 *      + tong = ?
 */

var n = 44;

var hangDonVi = n % 10;
var hangChuc = Math.floor(n / 10);

tong2KySo = hangDonVi + hangChuc;

console.log("Bai 5: Tong 2 ky so la: " + tong2KySo);


