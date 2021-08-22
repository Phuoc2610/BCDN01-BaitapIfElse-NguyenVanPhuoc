/**
 * Khối 1: input
 * a : số nguyên 1
 * b : số nguyên 2
 * c : số nguyên 3
 * ketQua 
 * 
 * Khối 2: các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: lập ra các TH có thể xảy ra
 * B3: hiển thị lên UI
 * 
 * Khối 3: output
 * ketQua
 */
document.getElementById("btnNum").onclick = function () {
    var a = parseInt(document.getElementById("inputNum1").value);
    var b = parseInt(document.getElementById("inputNum2").value);
    var c = parseInt(document.getElementById("inputNum3").value);
    var ketQua = 0;
    console.log(a, b, c);

    if (a > b && b > c) {
        // console.log(c, b, a);
        ketQua = c + "<" + b + "<" + a;

    } else if (a > c && c > b) {
        // console.log(b, c, a);
        ketQua = b + "<" + c + "<" + a;

    } else if (b > a && a > c) {
        // console.log(c, a, b);
        ketQua = c + "<" + a + "<" + b;

    } else if (b > c && c > a) {
        // console.log(a, c, b);
        ketQua = a + "<" + c + "<" + b;

    } else if (c > b && b > a) {
        // console.log(a, b, c);
        ketQua = a + "<" + b + "<" + c;

    } else {
        // console.log(b, a, c);
        ketQua = b + "<" + a + "<" + c;
    }
    document.getElementById("txtNum").innerHTML = ketQua;

}

/**
 * Khối 1: input
 * who : ai đang xử dụng
 * loiChao
 * 
 * Khối 2: các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: lập ra các TH có thể xảy ra
 * B3: hiển thị lên UI
 * 
 * Khối 3: output
 * loiChao
 */
document.getElementById("btnWho").onclick = function () {
    var who = document.getElementById("inputWho").value;
    var loiChao = 0;
    if (who == "Bố" || who == "B") {
        loiChao = "Xin chào bố";
    } else if (who == "Mẹ" || who == "M") {
        loiChao = "xin chào mẹ";
    } else if (who == "anh Trai" || who == "A") {
        loiChao = "xin chào anh trai";
    } else if (who == "em Gái" || who == "E") {
        loiChao = "xin chào em gái";
    } else {
        loiChao = "xin vui lòng nhập đúng cú pháp: Bố(B),Mẹ(M),anh Trai(A),em Gái(E)";
    }
    document.getElementById("txtWho").innerHTML = loiChao;
}

/**
 * Khối 1: input
 * soNguyen1
 * soNguyen2
 * soNguyen3
 * ketQua
 * 
 * Khối 2: các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: lập ra các TH có thể xảy ra
 * B3: hiển thị lên UI
 * 
 * Khối 3: output
 * ketQua
 */
document.getElementById("btnSoNguyen").onclick = function () {
    var soNguyen1 = parseInt(document.getElementById("SoNguyen1").value);
    var soNguyen2 = parseInt(document.getElementById("SoNguyen2").value);
    var soNguyen3 = parseInt(document.getElementById("SoNguyen3").value);
    var ketQua = 0;
    console.log(soNguyen1, soNguyen2, soNguyen3);
    if (soNguyen1 % 2 == 0 && soNguyen2 % 2 == 0 && soNguyen3 % 2 == 0) {
        ketQua = "có 3 số chẵn:" + soNguyen1 + "," + soNguyen2 + "," + soNguyen3;
    } else if (soNguyen1 % 2 == 0 && soNguyen2 % 2 == 0) {
        ketQua = "có 2 số chẵn:" + soNguyen1 + "," + soNguyen2 + " <br>có 1 số lẻ:" + soNguyen3;
    } else if (soNguyen1 % 2 == 0 && soNguyen3 % 2 == 0) {
        ketQua = "có 2 số chẵn:" + soNguyen1 + "," + soNguyen3 + " <br>có 1 số lẻ:" + soNguyen2;
    } else if (soNguyen2 % 2 == 0 && soNguyen3 % 2 == 0) {
        ketQua = "có 2 số chẵn:" + soNguyen2 + "," + soNguyen3 + " <br>có 1 số lẻ:" + soNguyen1;
    } else if (soNguyen1 % 2 == 0) {
        ketQua = "có 1 số chẵn:" + soNguyen1 + " <br>có 2 số lẻ:" + soNguyen2 + "," + soNguyen3;
    } else if (soNguyen2 % 2 == 0) {
        ketQua = "có 1 số chẵn:" + soNguyen2 + " <br>có 2 số lẻ:" + soNguyen1 + "," + soNguyen3;
    } else if (soNguyen3 % 2 == 0) {
        ketQua = "có 1 số chẵn:" + soNguyen3 + " <br>có 2 số lẻ:" + soNguyen1 + "," + soNguyen2;
    } else {
        ketQua = "có 3 số lẻ:" + soNguyen1 + "," + soNguyen2 + "," + soNguyen3;
    }
    document.getElementById("txtSoNguyen").innerHTML = ketQua;
}

/**
 * Khối 1: input
 * a : cạnh 1
 * b : cạnh 2
 * c : cạnh 3
 * ketQua
 * 
 * Khối 2: các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: nếu a == b && b == c
 * => ketQua = "tam giác đều"
 * B3: nếu (a == b) || (b == c) || (a == c)
 * => ketQua = "tam giác cân";
 * B4: nếu (a * a == b * b + c * c)
 * => ketQua = "tam giác vuông"
 * B5: hiển thị lên UI
 * 
 * Khối 3: output
 * ketQua
 */
document.getElementById("btnKetQua").onclick = function () {
    var a = parseInt(document.getElementById("inputCanh1").value);
    var b = parseInt(document.getElementById("inputCanh2").value);
    var c = parseInt(document.getElementById("inputCanh3").value);
    var ketQua = 0;
    // console.log(a, b, c);

    if (a == b && b == c) {
        ketQua = "tam giác đều";
    } else if ((a == b) || (b == c) || (a == c)) {
        ketQua = "tam giác cân";
    } else if ((a * a == b * b + c * c) || (b * b == a * a + c * c) || (c * c == a * a + b * b)) {
        ketQua = "tam giác vuông";
    } else {
        ketQua = "tam giác khác";
    }
    document.getElementById("txtKetQua").innerHTML = ketQua;
}

/**
 * Khối 1: input
 * day 
 * month
 * year
 * nextDay
 * lastDay
 * nextMonth
 * lastMonth
 * nextYear
 * lastYear
 * 
 * Khối 2: các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: lập ra các TH có thể xảy ra
 * B3: hiển thị lên UI
 * 
 * Khối 3: output
 * ngày tiếp theo
 * ngày trước đó
 */
document.getElementById("btnDay").onclick = function () {
    var day = parseInt(document.getElementById("inputDay").value);
    var month = parseInt(document.getElementById("inputMonth").value);
    var year = parseInt(document.getElementById("inputYear").value);
    var nextDay = 0;
    var lastDay = 0;
    var nextMonth = 0;
    var lastMonth = 0;
    var nextYear = 0;
    var lastYear = 0;

    // console.log(day, month, year);
    // if(year%4===0 && year%100!==0 && year%400!==0){
    //     console.log("năm nhuận");
    // }else{
    //     console.log("năm thường");
    // }
    nextMonth = month;
    lastMonth = month;
    lastYear = year;
    nextYear = year;
    nextDay = day + 1;
    lastDay = day - 1;
    switch (day) {
        case 1:
            if (month == 1) {
                nextDay = day + 1;
                lastDay = 31;
                lastMonth = 12;
                lastYear = year - 1;
            }
            if (month == 3 && year % 4 !== 0) {
                nextDay = day + 1;
                lastDay = 28;
                lastMonth = month - 1;
            }
            if (month == 3 && year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) {
                nextDay = day + 1;
                lastDay = 29;
                lastMonth = month - 1;
            }
            if (month == 4 || month == 6 || month == 9 || month == 11) {
                nextDay = day + 1;
                lastDay = 31;
                lastMonth = month - 1;
            }
            if (month == 5 || month == 7 || month == 8 || month == 10) {
                nextDay = day + 1;
                lastDay = 30;
                lastMonth = month - 1;
            }
            break;
        case 28:
            if (month == 2 && year % 4 !== 0) {
                nextDay = 1;
                lastDay = 27;
                nextMonth = 3;
                // console.log("28");
            }
            break;
        case 29:
            if (month == 2 && year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) {
                nextDay = 1;
                lastDay = 28;
                nextMonth = 3;
            }
            // console.log("29");
            break;
        case 30:
            if (month == 4 || month == 6 || month == 9 || month == 11) {
                nextDay = 1;
                nextMonth = month + 1;
                lastDay = day - 1;
            }
        case 31:
            if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10) {
                nextDay = 1;
                lastDay = day - 1;
                nextMonth = month + 1;
            }
            if (month == 12) {
                nextDay = 1;
                lastDay = day - 1;
                nextMonth = 1;
                nextYear = year + 1;
            }
            break;
        default:
    }

    document.getElementById("txtDay").innerHTML = "Ngày tiếp theo: " + nextDay + "/" + nextMonth + "/" + nextYear + "<br>Ngày trước đó: " + lastDay + "/" + lastMonth + "/" + lastYear;
}
/**
 * Khối 1: input
 * month
 * year
 *
 * Khối 2: các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: nếu tháng 2 năm nhuận (year%4===0 && year%100!==0 && year%400!==0)
 * => days = 29;
 * B3: nếu tháng 2 năm thường
 * => days = 28;
 * B4: nếu tháng 4,6,9,11
 * => days= 30;
 * B5: nếu tháng 1,3,5,7,8,10,12
 * => days = 31;
 * B6: hiển thị lên UI
 * 
 * Khối 3: output
 * days : số ngày của tháng đó
 */
document.getElementById("btnDays").onclick = function () {
    var month = parseInt(document.getElementById("inputMonths").value);
    var year = parseInt(document.getElementById("inputYears").value);

    days = 0;

    // console.log(month, year);
    switch (month) {
        case 2:
            if (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) {
                days = 29;
            }
            if (month == 2 && year % 4 !== 0) {
                days = 28;
            }
            break;
        case 4: case 6: case 9: case 11:
            days = 30;
            break;
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            days = 31;
            break;
        default:
            days = "không hợp lệ"
    }
    document.getElementById("txtDays").innerHTML = "tháng " + month + " có:" + days + " ngày";
}

/**
 * Khối 1: input
 * num
 * unit
 * hundred
 * ten
 * ketQua
 *
 * Khối 2: các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: lấy số hàng trăm
 * hundred = Math.floor(num / 100);
 * B3: lấy số hàng chục
 * ten = Math.floor(num % 100 / 10);
 * B4: lấy số hàng đơn vị
 * unit = num % 100 % 10;
 * B5: với từng số ứng với 1 tên gọi
 * B6: hiển thị lên UI
 * 
 * Khối 3: output
 * ketQua
 */
document.getElementById("btnNum3").onclick = function () {
    var num = parseInt(document.getElementById("inputNum").value);
    var unit = 0;
    var hundred = 0;
    var ten = 0;
    var ketQua = 0;
    console.log(num);

    hundred = Math.floor(num / 100);
    ten = Math.floor(num % 100 / 10);
    unit = num % 100 % 10;
    switch (hundred) {
        case 1:
            hundred = "một trăm "
            break;
        case 2:
            hundred = "hai trăm "
            break;
        case 3:
            hundred = "ba trăm "
            break;
        case 4:
            hundred = "bốn trăm "
            break;
        case 5:
            hundred = "năm trăm "
            break;
        case 6:
            hundred = "sáu trăm "
            break;
        case 7:
            hundred = "bảy trăm "
            break;
        case 8:
            hundred = "tám trăm "
            break;
        case 9:
            hundred = "chín trăm "
            break;
        default:
    }
    
    switch (ten) {
        case 0 :
            if(unit==0){
                ten = ""
            }else{
                ten = "lẻ "
            }
            break;
        case 1:
            ten = "mười "
            break;
        case 2:
            ten = "hai mươi "
            break;
        case 3:
            ten = "ba mươi "
            break;
        case 4:
            ten = "bốn mươi "
            break;
        case 5:
            ten = "năm mươi "
            break;
        case 6:
            ten = "sáu mươi "
            break;
        case 7:
            ten = "bảy mươi "
            break;
        case 8:
            ten = "tám mươi "
            break;
        case 9:
            ten = "chín mươi "
            break;
        default:
    }

    switch (unit) {
        case 0:
            unit = ""
            break;
        case 1:
            if(ten==1){
                unit = "một"
            }
            else{
                unit = "mốt"
            }
            break;
        case 2:
            unit = "hai"
            break;
        case 3:
            unit = "ba"
            break;
        case 4:
            unit = "bốn"
            break;
        case 5:
            unit = "năm"
            break;
        case 6:
            unit = "sáu"
            break;
        case 7:
            unit = "bảy"
            break;
        case 8:
            unit = "tám"
            break;
        case 9:
            unit = "chín"
            break;
        default:
    }

    ketQua = hundred + ten + unit;
    document.getElementById("txtNum3").innerHTML = ketQua;
}



