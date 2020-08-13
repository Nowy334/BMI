if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    })
}



let bmi;

document.querySelector('.info').style.display = 'none';

document.querySelector('.button').addEventListener('click', function(){
    let result = document.querySelector('.result');
    let info = document.querySelector('.info');
    let info2 = document.querySelector('.info2');
    let weight = document.querySelector('.weight__name').value;
    let growth = document.querySelector('.growth__name').value / 100;
    
    
    bmi = weight / (growth*growth);
    let finalBmi = bmi.toPrecision(4);

    let correctWeightStart = (18.5 * (growth * growth)).toPrecision(3);
    let correctWeightEnd = (24.98 * (growth * growth)).toPrecision(3);
    
    
    
    
    if(bmi){
        info.style.display = 'block';
        if(finalBmi < 16.0){

            result.innerHTML = 'Wskaźnik BMI wynosi: ' + '<span style="color: red;">' + finalBmi + '</span>';
            info.textContent = 'Jest bardzo źle. Twoje bmi wskazuje na wygłodzenie. Odrazu udaj się do lekarza!';
            info2.textContent =  'Prawidłowa waga dla twojego wzrostu to ' + correctWeightStart +' - ' + correctWeightEnd + ' kg';
        }else if(finalBmi >= 16.0 && finalBmi < 16.99){

            result.innerHTML = 'Wskaźnik BMI wynosi: ' + '<span style="color: red;">' + finalBmi + '</span>';
            info.textContent = 'Jest bardzo źle. Twoje bmi wskazuje na wychudzenie. Odrazu udaj się do lekarza!';
            info2.textContent =  'Prawidłowa waga dla twojego wzrostu to ' + correctWeightStart +' - ' + correctWeightEnd + ' kg';

        }else if(finalBmi >= 16.99 && finalBmi < 18.49){

            result.innerHTML = 'Wskaźnik BMI wynosi: ' + '<span style="color: red;">' + finalBmi + '</span>';
            info.textContent = 'Niedobrze. Twoje bmi wskazuje na niedowage. Musisz więcej jeść!';
            info2.textContent =  'Prawidłowa waga dla twojego wzrostu to ' + correctWeightStart +' - ' + correctWeightEnd + ' kg';

        }else if(finalBmi >= 18.49 && bmi < 24.99){

            result.innerHTML = 'Wskaźnik BMI wynosi: ' + '<span>' + finalBmi + '</span>';
            info.textContent = 'Świetnie. Twoja waga jest w sam raz. Nie masz powodów do niepokoju. Oby tak dalej!';
            info2.textContent =  '';

        }else if(finalBmi >= 24.99 && finalBmi < 29.99){

            result.innerHTML = 'Wskaźnik BMI wynosi: ' + '<span style="color: #e6a427;">' + finalBmi + '</span>';
            info.textContent = 'Masz nadwagę. Jesteś o krok od otyłości, ale możesz jej uniknąć!';
            info2.textContent =  'Prawidłowa waga dla twojego wzrostu to ' + correctWeightStart +' - ' + correctWeightEnd + ' kg';

        }else if(finalBmi >= 29.99 && finalBmi < 34.99){

            result.innerHTML = 'Wskaźnik BMI wynosi: ' + '<span style="color: red;">' + finalBmi + '</span>';
            info.textContent = 'Niestety, Twój wynik wskazuje, że już chorujesz na otyłość I stopnia. Koniecznie skontaktuj się z lekarzem!';
            info2.textContent =  'Prawidłowa waga dla twojego wzrostu to ' + correctWeightStart +' - ' + correctWeightEnd + ' kg';

        }else if(finalBmi >= 34.99 && finalBmi <=39.99){

            result.innerHTML = 'Wskaźnik BMI wynosi: ' + '<span style="color: red;">' + finalBmi + '</span>';
            info.textContent = 'Niestety, Twój wynik wskazuje, że chorujesz na otyłość II stopnia. Koniecznie skontaktuj się z lekarzem!';
            info2.textContent =  'Prawidłowa waga dla twojego wzrostu to ' + correctWeightStart +' - ' + correctWeightEnd + ' kg';

        }else if(finalBmi >=40){

            result.innerHTML = 'Wskaźnik BMI wynosi: ' + '<span style="color: red;">' + finalBmi + '</span>';
            info.textContent = 'Jest bardzo źle! Chorujesz na otyłość III stopnia - tzw. otyłość olbrzymią. Natychmiast skonsultuj się z lekarzem!'
            info2.textContent =  'Prawidłowa waga dla twojego wzrostu to ' + correctWeightStart +' - ' + correctWeightEnd + ' kg';
        }

    }else{
        result.textContent = 'Nie wprowadziłeś żadnych wartości';
    }
});