let books=[
    {
        masach:"ABC",
        tensach:"HTMLCOBfddaffafdfdAN",
        giaban:3000
    },
    {
        masach:"NGD",
        tensach:"Javascriptcoban",
        giaban:4000
    },
    {
        masach:"GKH",
        tensach:"Atienderatien",
        giaban:2500 
    }
];
let order=[
    {
        madon:"HAFA",
        tenkhach:"nguyen thai  van",
        diachi:{
            tinh:"tiengiang",
            huyen:"cai be",
            sonha:132,
        }
    },
    {
        madon:"Hafd",
        tenkhach:"nguyen quoc huy ",
        diachi:{
            tinh:"ben tre ",
            huyen:"dong trom",
            sonha:324,
        }
    },
    {
        madon:"HafaA",
        tenkhach:"nduc thang",
        diachi:{
            tinh:"tiengiang",
            huyen:"cai lay",
            sonha:132,
        },
    },
];
function laygiasach(gia1,gia2){
    let temp=[];
    for( let i=0;i<books.length;i++){
        if(books[i].giaban>=gia1&&books[i].giaban<=gia2){
            temp.push(books[i])
        }
    }
    return temp;
}
// let kq=laygiasach(3000, 4000)
// console.log(kq);
function laytensach(x){
    const keyword =x.toUpperCase();
    let sachgiong=[];
    for(var i=0;i<books.length;i++){
     if(books[i].tensach.toLocaleUpperCase().indexOf(keyword)!=-1)
    {
        sachgiong.push(books[i])
    }
}
     return sachgiong;

}
function sapxeptangdan(){
    let tempt;
    for(var i=0;i<books.length-1;i++){
        for(var  j=i;j<books.length;j++){
            if(books[i].tensach>books[j].tensach){
                tempt=books[i];
                books[i]=books[j];
                books[j]=tempt;
            }
        }
    }
};

function giacaonhat(){
    let giamax=books[0];
    for(var  i =0;i<books.length;i++){
        if(books[i].giaban>giamax.giaban){
            giamax=books[i];
        }
    }
    return giamax;

}
