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
    },
    {
        Title: "C# Căn bản",
        Category: "C#",
        Author: "Túng Văn thiếu",
        DateCreated: "07/06/2018",
        DatePublic: "10/07/2018",
        Status: "Sắp xuất bản"
    },
    {
        Title: ".Net MVC Căn bản",
        Category: ".Net",
        Author: "Cú Văn Mèo",
        DateCreated: "08/09/2018",
        DatePublic: "15/09/2018",
        Status: "Xuất bản"
    },
    {
        Title: "Python Căn Bản",
        Category: "PyThon",
        Author: "Doremon",
        DateCreated: "27/06/2017",
        DatePublic: "20/07/2017",
        Status: "Xuất bản"
    },
    {
        Title: "Machine learning",
        Category: "AI",
        Author: "NoBiTa",
        DateCreated: "27/06/2018",
        DatePublic: "19/07/2018",
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
//
function sortDataCategoryUp(){
    DaTa.sort(function(a,b){
        if(a.Category>b.Category){
            return -1;
        } else if (a.Category <b.Category){
            return 1;
        }else
        return 0;
    })
};
function sortDataCategoryDown(){
    DaTa.sort(function(a,b){
        if(a.Category>b.Category){
            return 1;
        } else if (a.Category <b.Category){
            return -1;
        }else
        return 0;
    })
};
function sortAuthorUp(){
    DaTa.sort(function(a,b){
        if(a.Author>b.Author){
            return -1;
        } else if (a.Author<b.Author){
            return 1;
        }else
        return 0;
    })
}
function sortAuthorDown(){
    DaTa.sort(function(a,b){
        if(a.Category>b.Category){
            return 1;
        } else if (a.Category <b.Category){
            return -1;
        }else
        return 0;
    })
}
function sortCreateDateUp(){
    DaTa.sort(function(a,b){
        if(a.DateCreated>b.DateCreated){
            return -1;
        } else if (a.DateCreated<b.DateCreated){
            return 1;
        }else
        return 0;
    })
};
function  sortCreateDateDown(){
    DaTa.sort(function(a,b){
        if(a.Category>b.Category){
            return -1;
        } else if (a.Category <b.Category){
            return 1;
        }else
        return 0;
    })
};
function sortPublicDateUp(){
    DaTa.sort(function(a,b){
        if(a.DateCreated>b.DateCreated){
            return -1;
        } else if (a.DateCreated<b.DateCreated){
            return 1;
        }else
        return 0;
    })
};
function sortPublicDateDown(){
    DaTa.sort(function(a,b){
        if(a.Category>b.Category){
            return -1;
        } else if (a.Category <b.Category){
            return 1;
        }else
        return 0;
    })
};
function  sortStatusUp(){
    DaTa.sort(function(a,b){
        if(a.DateCreated>b.DateCreated){
            return -1;
        } else if (a.DateCreated<b.DateCreated){
            return 1;
        }else
        return 0;
    })
};
function sortStatusDown(){
    DaTa.sort(function(a,b){
        if(a.Category>b.Category){
            return -1;
        } else if (a.Category <b.Category){
            return 1;
        }else
        return 0;
    })
};
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

   var i=1;
    $('.fas1').click(function () {
            console.log(this.classList.contains('fa-sort'))
           if(this.classList.contains('fa-sort')  ) {
               sortUp();
               return;
           }
           
           if(this.classList.contains('fa-sort-up')) {
                sortDown();
                return;
            }
            if( this.classList.contains('fa-sort-down')){
                sortOver();
            }
            
    })
    //
    $('.fas2').click(function () {
        console.log(this.classList.contains('fa-sort'))
       if(this.classList.contains('fa-sort')  ) {
           sortUp1();
           return;
       }
       
       if(this.classList.contains('fa-sort-up')) {
            sortDown1();
            return;
        }
        if( this.classList.contains('fa-sort-down')){
            sortOver1();
        }
        
})
    $('.fas3').click(function(){
        if(this.classList.contains('fa-sort')){
            sortUp2();
            return;
        }
        if(this.classList.contains('fa-sort-up')){
            sortDown2();
            return;
        }
        if(this.classList.contains('fa-sort-down')){
            sortOver2();
        }
    })

    $('.fas4').click(function(){
        if(this.classList.contains('fa-sort')){
            sortUp3();
            return;
        }
        if(this.classList.contains('fa-sort-up')){
            sortDown3();
            return;
        }
        if(this.classList.contains('fa-sort-down')){
            sortOver3();
        }
    })
    $('.fas5').click(function(){
        if(this.classList.contains('fa-sort')){
            sortUp4();
            return;
        }
        if(this.classList.contains('fa-sort-up')){
            sortDown4();
            return;
        }
        if(this.classList.contains('fa-sort-down')){
            sortOver4();
        }
    })

    $('.fas6').click(function(){
        if(this.classList.contains('fa-sort')){
            sortUp5();
            return;
        }
        if(this.classList.contains('fa-sort-up')){
            sortDown5();
            return;
        }
        if(this.classList.contains('fa-sort-down')){
            sortOver5();
        }
    })

})

function sortDown() {
    deleteData();
    sortDataNameDown();
    $('.fas1').removeClass('fa-sort-up');
    $('.fas1').addClass('fa-sort-down');

    PasteData();
   
}
//
function sortDown1() {
    deleteData();
   sortDataCategoryDown();
    $('.fas2').removeClass('fa-sort-up');
    $('.fas2').addClass('fa-sort-down');

    PasteData();
   
}

function sortUp() {
    deleteData();
    sortDataNameUp();
    $('.fas1').removeClass('fa-sort');
    $('.fas1').removeClass('fa-sort-down');
    $('.fas1').addClass('fa-sort-up');
    // $('#th1').append("<i class='fas fa-sort-up'></i>")

    PasteData();
   
}
//
function sortUp1() {
    deleteData();
    sortDataCategoryUp();
    $('.fas2').removeClass('fa-sort');
    $('.fas2').removeClass('fa-sort-down');
    $('.fas2').addClass('fa-sort-up');
    // $('#th1').append("<i class='fas fa-sort-up'></i>")

    PasteData();
   
}
function sortUp2(){
    deleteData();
    sortAuthorUp();
    $('.fas3').removeClass('fa-sort');
    $('.fas3').removeClass('fa-sort-down');
    $('.fas3').addClass('fa-sort-up');
    PasteData();
}
function  sortUp3(){
    deleteData();
    sortCreateDateUp();
    $('.fas4').removeClass('fa-sort');
    $('.fas4').removeClass('fa-sort-down');
    $('.fas4').addClass('fa-sort-up');
    PasteData();
};
function  sortUp4(){
    deleteData();
    sortPublicDateUp();
    $('.fas5').removeClass('fa-sort');
    $('.fas5').removeClass('fa-sort-down');
    $('.fas5').addClass('fa-sort-up');
    PasteData();
};
function  sortUp5(){
    deleteData();
    sortStatusUp();
    $('.fas6').removeClass('fa-sort');
    $('.fas6').removeClass('fa-sort-down');
    $('.fas6').addClass('fa-sort-up');
    PasteData();
};
function sortDown2(){
    deleteData();
    sortAuthorDown();
    $('.fas3').removeClass('fa-sort-up');
    $('.fas3').addClass('fa-sort-down');
    PasteData();
};
function  sortDown3(){
    deleteData();
    sortCreateDateDown();
    $('.fas4').removeClass('fa-sort-up');
    $('.fas4').addClass('fa-sort-down');
    PasteData();
};
function  sortDown4(){
    deleteData();
    sortPublicDateDown();
    $('.fas5').removeClass('fa-sort-up');
    $('.fas5').addClass('fa-sort-down');
    PasteData();
};
function  sortDown5(){
    deleteData();
    sortStatusDown();
    $('.fas6').removeClass('fa-sort-up');
    $('.fas6').addClass('fa-sort-down');
    PasteData();
};
function sortOver(){
    deleteData();
    sortNameOver();
    $('.fas1').removeClass('fa-sort-down');
    $('.fas1').removeClass('fa-sort-up');
    $('.fas1').addClass('fa-sort');
    PasteData();
}

function sortOver1(){
    deleteData();
    sortCategoryOver1();
    $('.fas2').removeClass('fa-sort-down');
    $('.fas2').removeClass('fa-sort-up');
    $('.fas2').addClass('fa-sort');
    PasteData();
}

function  sortOver2(){
    deleteData();
    sortAuthorOver1();
    $('.fas3').removeClass('fa-sort-down');
    $('.fas3').removeClass('fa-sort-up');
    $('.fas3').addClass('fa-sort');
    PasteData();
};
function  sortOver3(){
    deleteData();
    sortCreateDateOver();
    $('.fas4').removeClass('fa-sort-down');
    $('.fas4').removeClass('fa-sort-up');
    $('.fas4').addClass('fa-sort');
    PasteData();
};
function  sortOver4(){
    deleteData();
    sortPublicDateOver();
    $('.fas5').removeClass('fa-sort-down');
    $('.fas5').removeClass('fa-sort-up');
    $('.fas5').addClass('fa-sort');
    PasteData();
};
function  sortOver5(){
    deleteData();
    sortStatusOver();
    $('.fas6').removeClass('fa-sort-down');
    $('.fas6').removeClass('fa-sort-up');
    $('.fas6').addClass('fa-sort');
    PasteData();
};
function sortNameOver(){
    DaTa.sort(function(a,b){
       return b-a;
    
    })
}

function sortCategoryOver1(){
    DaTa.sort(function(a,b){
        return b-a;
    })

}

function sortAuthorOver1(){
    DaTa.sort(function(a,b){
        return b-a;
    })
};

function  sortCreateDateOver(){
    DaTa.sort(function(a,b){
        return b-a;
    })
};

function  sortPublicDateOver(){
    DaTa.sort(function(a,b){
        return b-a;
    })
};

function  sortStatusOver(){
    DaTa.sort(function(a,b){
        return b-a;
    })
};