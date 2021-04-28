let content=document.getElementById('content')
let date=document.getElementById('date')
let time=document.getElementById('time')

const btn=document.getElementById('btn')
const delbtn=document.getElementById('delbtn')
const list=document.getElementById('list')

//宣告一個空陣列，裝輸入的內容
const listName=[]

//點擊輸入按鈕
btn.addEventListener('click',function enter(){
    
    listName.push({
        content:content.value,
        date:date.value,
        time:time.value,
    })

    //讓輸入的資料呈現在網頁上(渲染頁面的list)
    let strHTML=''
    listName.forEach(function (item){
    strHTML=strHTML+`
    <div class="item">
        <div>
            <p>內容:${item.content}</p>
            <p>時間:${item.time} ${item.date}</p>
        </div>
    </div>
    `})
    list.innerHTML=strHTML
    })

//點擊刪除按鈕
delbtn.addEventListener('click',function del(){

    listName.pop()
    
    //刪除頁面上的資料(渲染頁面)
    let strHTML=''
    listName.forEach(function (item){
    strHTML=strHTML+`
    <div class="item">
        <div>
            <p>內容:${item.content}</p>
            <p>時間:${item.time} ${item.date}</p>
        </div>
    </div>
    `})
    list.innerHTML=strHTML

})
