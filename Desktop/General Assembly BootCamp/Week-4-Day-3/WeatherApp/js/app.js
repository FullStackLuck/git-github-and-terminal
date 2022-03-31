///grab elements I will need

const $input =$("input");
const $button =$("button");
const $aside =$("aside");

// add event to button
$button.on("click", ()=>{
    
    const searchCity = $input.val();

    $.ajax(`http://api.openweathermap.org/geo/1.0/direct?q=${searchCity},&appid=57d409a274ff79a02574a79cd33a4297`).then((location) =>{

    console.log(location)

    const lat =location[0].lat
    const lon =location[0].lon
    console.log(lat,lon)

    $.ajax(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=57d409a274ff79a02574a79cd33a4297`).then((data) =>{

    console.log(data);

    $($aside).html(`
    <h1>City: ${data.name}</h1>
    <h2>Temperature: ${data.main.temp} Degrees</h2>
    <h3>Today's Forecast: ${data.weather[0].description}</h3>
    <h3>Feels like ${data.main.feels_like}</h3>

    `)

    $inputValue=""
    
    
})
})
})
