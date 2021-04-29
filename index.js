const content=document.getElementById('content')
const date=document.getElementById('date')
const time=document.getElementById('time')

const btn=document.getElementById('btn')
const delbtn=document.getElementById('delbtn')
const list=document.getElementById('list')

//宣告一個空陣列，裝輸入的內容
const listName=[]

//渲染頁面會重複使用所以另外抓出來寫函式
function render(){
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
    }

//點擊輸入按鈕
btn.addEventListener('click',function enter(){
    
    listName.push({
        content:content.value,
        date:date.value,
        time:time.value,
    })
    render()})

//點擊刪除按鈕
delbtn.addEventListener('click',function del(){

    listName.pop()
    
    render()
})
