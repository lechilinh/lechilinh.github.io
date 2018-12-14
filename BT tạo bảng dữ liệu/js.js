const DaTa = [
    {
        Title: "Javascript căn bản",
        Category: "Javascript",
        Author: "Trần văn A",
        DateCreated: "20/06/2018",
        DatePublic: "20/07/2018",
        Status: "Xuất bản"
    },
    {
        Title: "CSS căn bản",
        Category: "CSS",
        Author: "Nguyễn văn B",
        DateCreated: "10/06/2015",
        DatePublic: "15/07/2015",
        Status: "Chờ xuất bản"
    },
    {
        Title: "HTML căn bản",
        Category: "HTML",
        Author: "Lò văn C",
        DateCreated: "25/06/2017",
        DatePublic: "20/07/2017",
        Status: "Sắp xuất bản"
    },
    {
        Title: "Jquery căn bản",
        Category: "Jquery",
        Author: "Hà văn D",
        DateCreated: "21/06/2018",
        DatePublic: "21/07/2018",
        Status: "Xuất bản"
    },
    {
        Title: "Sử dụng Google Devtool căn bản",
        Category: "Google devtool",
        Author: "Vàng văn F",
        DateCreated: "22/06/2018",
        DatePublic: "22/07/2018",
        Status: "Xuất bản"
    },
    {
        Title: "NodeJs căn bản",
        Category: "NodeJs",
        Author: "Phùng văn F",
        DateCreated: "12/06/2018",
        DatePublic: "15/07/2018",
        Status: "Xuất bản"
    },
    {
        Title: "Angular căn bản",
        Category: "Angular",
        Author: "Lũng Văn Cú",
        DateCreated: "17/06/2018",
        DatePublic: "15/07/2018",
        Status: "Xuất bản"
    },
    {
        Title: "Vue Js Căn bản",
        Category: "Vue Js",
        Author: "Tào Văn Tháo",
        DateCreated: "17/06/2017",
        DatePublic: "10/07/2018",
        Status: "Xuất bản"
    },
    {
        Title: "Lập trình hướng đối tượng với C++",
        Category: "C/C++",
        Author: "Lý Nhã Kỳ",
        DateCreated: "17/06/2016",
        DatePublic: "10/07/2017",
        Status: "Xuất bản"
    },
    {
        Title: "Java Căn bản",
        Category: "Java",
        Author: "Cù Văn Tèo",
        DateCreated: "17/06/2017",
        DatePublic: "10/07/2017",
        Status: "Xuất bản"
    }

]



function PasteData() {
    for (let i = 0; i < DaTa.length; i++) {
        for (let j = 6 * i; j < 6 * i + 1; j++) {
            $('.td')[j].append(DaTa[i].Title)
            $('.td')[j + 1].append(DaTa[i].Category)
            $('.td')[j + 2].append(DaTa[i].Author)
            $('.td')[j + 3].append(DaTa[i].DateCreated)
            $('.td')[j + 4].append(DaTa[i].DatePublic)
            $('.td')[j + 5].append(DaTa[i].Status)
        }
    }
}

function sortDataNameDown() {
    DaTa.sort(function (a, b) {
        if (a.Title > b.Title) {
            return 1;
        } else if (a.Title < b.Title) {
            return -1;
        } else
            return 0;

    })
}

function sortDataNameUp() {
    DaTa.sort(function (a, b) {
        if (a.Title > b.Title) {
            return -1;
        } else if (a.Title < b.Title) {
            return 1;
        } else
            return 0;

    })
}


function deleteData() {
    for (let i = 0; i < DaTa.length; i++) {
        for (let j = 6 * i; j < 6 * i + 1; j++) {
            $('.td')[j].innerHTML = "";
            $('.td')[j + 1].innerHTML = "";
            $('.td')[j + 2].innerHTML = "";
            $('.td')[j + 3].innerHTML = "";
            $('.td')[j + 4].innerHTML = "";
            $('.td')[j + 5].innerHTML = "";
        }
    }
}

$(document).ready(function () {

    PasteData();

   var i=0;
    $('.fas1').click(function () {
      
           if(i%2!=0){
               sortUp();
           }
         
        
        
         
        else {
            sortDown();
            i++;
           }
          
    })

})

function sortDown() {
    deleteData();
    sortDataNameDown();
    $('.fas1').hide();
    $('#th1').append("<i class='fas fa-sort-down'></i>")

    PasteData();
   
}
function sortUp() {
    deleteData();
    sortDataNameUp();
    $('.fas1').hide();
    $('#th1').append("<i class='fas fa-sort-up'></i>")

    PasteData();
   
}