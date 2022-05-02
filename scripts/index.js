// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

let arr = JSON.parse(localStorage.getItem("news")) || [];


let getdata = async ()=>{
    try{
        let res = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=in");
        let data = await res.json();
       // append(data);
        console.log(data.articles1);
       
        
    }catch (err){
        console.log(err);
    }
}
 
getdata();






let getdata1 = async ()=>{
    try{
        let res = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk");
        let data = await res.json();
        console.log(data);
    }catch (err){
        console.log(err);
    }
}

getdata1();

let getdata2 = async ()=>{
    try{
        let res = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=us");
        let data = await res.json();
        console.log(data);
    }catch (err){
        console.log(err);
    }
}

getdata2();

let getdata3 = async ()=>{
    try{
        let res = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch");
        let data = await res.json();
        console.log(data);
    }catch (err){
        console.log(err);
    }
}

getdata3();


let getdata4 = async ()=>{
    try{
        let res = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk");
        let data = await res.json();
        console.log(data);
    }catch (err){
        console.log(err);
    }
}

getdata4();

let getdata5 = async ()=>{
    try{
        let res = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=nz");
        let data = await res.json();
        append(data);
        console.log(data);
    }catch (err){
        console.log(err);
    }
}

getdata5();



let append = (data) => {
    let container = document.getElementById("news");

    data.map((el) => {
        let p = document.createElement("p");
        p.innerText = el.title;

        container.append(p);

        arr.push(p);
        localStorage.setItem("news" , JSON.stringify(arr))
        
    })
}