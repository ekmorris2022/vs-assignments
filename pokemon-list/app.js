const xhr = new XMLHttpRequest()

xhr.open("GET","https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        console.log(data.objects[0].pokemon)
        showData(data.objects[0].pokemon)
    }
}

function showData(arr) {
    for(let i = 0; i < arr.length; i++){
        console.log(arr.length)
        const p = document.createElement("p")
        p.textContent = JSON.stringify(arr[i])
        document.body.appendChild(p)
        
    }
}