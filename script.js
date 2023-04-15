const calculateTemp = () => {
     const numberTemp = document.getElementById('temp').value;
     //console.log(numberTemp);
     const tempType = document.getElementById('temp_type');
     const valueTemp = temp_type.options[tempType.selectedIndex].value;
     //console.log(valueTemp);

     const celsiusToFahrenheit = (cel) => {
        let fahrenheit = Math.round((cel*9/5) + 32);
        return fahrenheit;
     }
     
     const fahrenheitToCelsius = (fehr) => {
        let celsius = Math.round((fehr-32) * 5/9);
        return celsius;
     } 

     let result;
     if(valueTemp == 'cel'){
        result = celsiusToFahrenheit(numberTemp);
        document.getElementById('tempresult').innerHTML = `Result <br> ${result}°Fahrenheit `;
         }else{
            result = fahrenheitToCelsius(numberTemp);
            document.getElementById('tempresult').innerHTML = `Result <br> ${result}°Celsius`;
         }
}