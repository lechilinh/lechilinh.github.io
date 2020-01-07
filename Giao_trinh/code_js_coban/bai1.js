// Bài 1 viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính hình cầu
function volumetricSherical(r) {
    let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
    //làm tròn thể tích sau hai số thập phân dùng toFixed(n)
    return volume.toFixed(2);
}



//Bài 2 Viết hàm truyền vào hai số nguyên , tính tổng tất cả các số nguyên nằm giữa chúng , ví dụ (3-8)->22 = (4+5+6+7)
// function totalRangeNumbers(a, b) {
//     let total = 0;
//     let i = 0;
//     while (a + i < b) {
//         i++;
//         if ((i + a) < b) {
//             total += i + a;
//         }
//     }
//     return total;
// }

// //[]<- (a,b) -> total
// function totalRangeNumbers1(a, b) {
//     let total = 0;
//     for (let i = a + 1; i < b; i++) {
//         total += i;
//     }

//     return total;

// }
function totalRangerNumbers(a,b){
    let total = 0;
    if(a < b){
    for(let i = a+1;i < b; i++){
        total+=i;
    }}else{
    
    for(let i = b+1;i<a;i++){
        total+=i;
    }
    } 
    return total;
    }
// RECURSIVE
// function range(a,b){
//     if(a == b){
//         return [a];
//     }else{
//         return [a,...range(a+1,b)];
//     }
// }

//Bai 3 cho 1 số  , kiểm tra số đó có phải số nguyên tố hay không, kết quả trả về true or false
// (số nguyên tố là số >1) and (chia hết cho 1 và chính nó)
// thuật toán đầu tiên : kiểm tra (2->n-1)nếu tồn tại số n chia hết thì return false else return true
function checkPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
// dựa vào tính chất mọi hợp số n đều có ước nguyên tố không vượt quá sqrt(n);vì vậy thuật toán chỉ cần chạy 2--->sqrt(n)
function checkPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
// 2 là số nguyên tố lẻ duy nhất, vậy ta các số chẵn đều return false; ta chỉ cần lặp các qua các số lẻ
function checkPrime(n) {
    if (n < 2) {
        return false;
    }
    if (n == 2) {
        return true;
    }
    if (n % 2 == 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

// Bài 4: cho 1 số nguyên dương bất kỳ, tính tổng tất cả các số nhỏ hơn hoặc bằng tham số truyền vào
function totalPrime(n) {
    let total = 0;
    for (let i = 2; i <= n; i++) {
        if (checkPrime(i)) {
            total += i;
        }
    }
    return total;
}
// Bài 5: cho 1 số nguyên dương , viết hàm tính tổng tất cả các ước số của số đó.
function totalDivisorOfNaturalNumber(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            total += i;
        }
    }
    return total;
}

//Bài 6: cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số chẵn thuộc dãy fibonaci mà nhỏ hơn  hoặc bằng tham số truyền vào

//b1: viết hàm tạo ra mảng các số fibonaci
function arrFibonaci(n) {
    let arr = [1, 1];
    for (let i = 2; i <= n; i++) {
        if ((arr[i - 2] + arr[i - 1]) <= n) {
            arr.push(arr[i - 2] + arr[i - 1]);
        }
    }
    return arr;
}
//b2 tính tổng các số chẵn trong mảng
function totalFibonaciEvenOfNumber(n) {
    let arr = arrFibonaci(n);
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            total += arr[i];
        }
    }
    return total;
}

// Xử lý chuỗi
// Bai 1 chuyen 1 chuỗi gồm nhiều từ thành chuỗi mới viets hoa các chữ cái viết hoa của mỗi từ
function convertStringFirstLetterUperCase(str) {
    let str1 = str.split(" ");
    for (let i = 0; i < str1.length; i++) {
        str1[i] = converFistLetterUppercase(str1[i]);
    }
    return str1.join(" ");
}

function converFistLetterUppercase(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);

}

// bai 2 chuyen 1 chuoi gom nhiều từ thành dạng Spinal case
// c1
function stringSpinalCase(str) {
    let str1 = str.split(" ");
    for (let i = 0; i < str1.length; i++) {
        str1[i] = str1[i].toLowerCase();
    }
    return str1.join("-");
}
// c2
function string(str){
    return str.split(' ').join('-').toLowerCase()
    
    }

// Bai 3  Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau,
// không tính khoảng trắng,
// không phân biệt hoa thường),
// kết quả trả về true hoặc false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false. 

// function stringSymetry(str){
//      str = str.toLowerCase().split(" ").join("").split("");
//      let str1 = str.join("");
//      let rstr = str.reverse().join("");
//      if(str === rstr){
//          return true;
//      }
    
    
//     return false;
// }

function string(str){
    let newstr = str.split(' ').join('').toLowerCase();
    let newstrReverse = newstr.split('').reverse().join('');
    
    if(newstr === newstrReverse){return true}
    return false;
    }

// Bai4 Viết hàm truyền vào 2 chuỗi , kiểm tra xem chuỗi thứ nhất có chứa toàn bộ ký tự nằm trong chuỗi thứ 2 hay không 
// kết quả trả về true nếu có và false nếu không (không phân biệt hoa thường)
function checkString(str1,str2){
     str1 = str1.toLowerCase().split("");
     str2 = str2.toLowerCase().split("");
     for(let i =0;i<str2.length;i++){
        if(!str1.includes(str2[i])){
               return false; 
        }
     }
     return true;
}

// Xử lý mảng
// Bài 1: viết hàm loại bỏ các giá trị sai trong mảng . Các giá trị sai bao gồm : false, null, undefined, NaN, 0, "";
function removeValueFalseOfArray(arr){

	return arr.filter((item)=>item != "" && item != null && item != undefined && item != 0 && item != false && item != NaN)
}

// Bài 2: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ, 
// kết quả trả về là 1 mảng chỉ chứa những phần tử không đồng thời nằm trong 2 mảng truyền vào. 
//Ví dụ truyền vào [1, 2, 3] và [1, 3, 4, 5] thì kết quả trả về là mảng [2, 4, 5]. "Nhớ xắp sếp theo thứ tự tăng dần"

function array(arr1,arr2){
    let newArray = [];
    
    for(let i =0;i<arr1.length;i++){
        if(!arr2.includes(arr1[i])){newArray.push(arr1[i])}
    }
    for(let j =0;j< arr2.length;j++){
        if(!arr1.includes(arr2[j])){newArray.push(arr2[j])}
    }
    
    return newArray.sort((a,b)=>a-b);
    
    
    }

   // Bài 3: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd'']. 
    
   //c1
   function array(arrstr){

        let newArray = [];
        
        for(let i = 0; i< arrstr.length; i++){
            var maxlength = arrstr[0].length;
            if(arrstr[i].length > maxlength){maxlength = arrstr[i].length }
            
        }
        for(let j =0;j <arrstr.length;j++){
        if(arrstr[j].length == maxlength){newArray.push(arrstr[j])}
        }
        
        return newArray;
        }

// c2
function array(arrStr){
	
	let maxlength;
for(let i = 0; i< arrStr.length; i++){
             maxlength = arrStr[0].length;
            if(arrStr[i].length > maxlength){maxlength = arrStr[i].length }
            
        }

return	arrStr.filter((item)=>item.length == maxlength)


}

//  Bài 4: Cho 2 số nguyên dương m và n. Tạo ra 1 mảng 2 chiều m x n là các số nguyên liên tiếp (tính từ 1) theo kiểu ziczac.
// Ví dụ với m = 3 và n = 4 thì kết quả là mảng 2 chiều như sau           
//      [ [1, 2, 3, 4], [8, 7, 6, 5], [9, 10, 11, 12] ].
function createArrayZicZAc(m,n){
    // Khởi tạo mảng 1 chiều length m
    let arraym = new Array(m);
    // loop to create 2d array using 1d array 
    for(let i =0; i< arraym.length; i++){
       
        arraym[i] = new Array(n);
    }
    // lặp qua để tạo các mảng các phần tử 2 chiều
    let h =0;
    for(let i = 0;i <m;i++){
        for(let j = 0;j<n;j++){
            arraym[i][j] = h++;
        }
        if(i%2 != 0){
            arraym[i].reverse();
        }
    }

    return arraym;
}

