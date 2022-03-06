// Dom Manipulation
const cityform=document.querySelector('form');
const time=document.querySelector('img.time');
const icon=document.querySelector('.icon img ');
const updateCity=async city=>{
    const cityDetails=await getCity(city);
    const weather=await getWeather(cityDetails.Key);

    return{cityDetails,weather};
}

cityform.addEventListener('submit',(e)=>{
    e.preventDefault();

    const city=cityform.city.value.trim();
    // trim used for remove extra spaces
    // cityform.reset() is used to user ny jo be likha hn wo khatam ho jay
    cityform.reset();
   updateCity(city)
   .then(data=>{
       updateUi(data)
    //    console.log(data);
   }).catch(e=>{
      alert(e);
   });
    // // updateCity(city)
    // .then((data) =>{
    //     updateCity(data);
    // })
})

// update UI
const card=document.querySelector('.card');
const details=card.querySelector('.details');

const updateUi=(data)=>{
    // const cityDetails=data.cityDetails;
    // const weather=data.weather;
    const {cityDetails,weather}=data;
    console.log(cityDetails);
    console.log(weather);

    details.innerHTML=`
<h4 class="my-5">${cityDetails.LocalizedName}</h4>
<div class="my-3">${weather.WeatherText}</div>
<div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&degC</span>
</div>
`
let timesource=null;

if(weather.IsDayTime){
    timesource='images/day.svg';
}
else{
    timesource='images/night.svg';
}
time.setAttribute('src', timesource);

let iconSource=`images/icons/${weather.WeatherIcon}.svg`;
icon.setAttribute('src',iconSource);

if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
}
}
// updateUi(data)

