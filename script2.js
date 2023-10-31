let searchBox=document.querySelector(".search input");
let searchBtn=document.querySelector(".search button");

async function getweather(city){
    try {
        let res=await fetch(`https://goweather.herokuapp.com/weather/${city}`)
        
        let data=await res.json();
        console.log(data);
        document.querySelector(".city").innerHTML=`${city}`;
        document.querySelector(".temp").innerHTML=data.temperature;
        document.querySelector(".wind").innerHTML=data.wind;
        document.querySelector(".disc").innerHTML=data.description;
       
        }

    catch (Error){
        console.log(Error)
        }
}

searchBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    let city=(searchBox.value);
    getweather(city);
})
