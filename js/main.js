// Variables

let number_user = 0;
let i = 0;
let k = 0;

let table_all_numbers = [];
let sum_numbers;
let biggest_number = 0;
let smallest_number = 0;
let average;
let for_all_sequences_growing_numbers = [];
let sequence_growing_numbers = [];
let sequence_growing_numbers_to_compare_1 = [];
let sequence_growing_numbers_to_compare_2 = [];

let previous_number_user;
let counter = 0;

//Function to reboot the HTML input and the JS values
function allToZero() {

    document.getElementById('number_user').value = '';
    document.getElementById('amount_numbers').value = '';
    document.getElementById('sum_numbers').value = '';
    document.getElementById('biggest_number').value = '';
    document.getElementById('smallest_number').value = '';
    document.getElementById('average').value = '';
    document.getElementById('list_all_numbers').value = '';
    document.getElementById('sequence_growing_numbers').value = '';

    i = 0;//"i" is linked to the sequence of growing numbers
    table_all_numbers.splice(0, table_all_numbers.length);
    sequence_growing_numbers.splice(0, sequence_growing_numbers.length);

}

//Code itself

//Lines under: detect that the page is reloaded and erased all data
window.onbeforeunload = function () {
    allToZero();

}

// Lines under: Detect when the user pushes 'Soumettre'
document.getElementById('submit').addEventListener('click', function (event) {

    number_user = document.getElementById('number_user').value;
    number_user = parseInt(number_user, 10);

    table_all_numbers[i] = number_user;
    i++; //"i" is linked to the sequence of growing numbers
    //Line under: display the amount of numbers given by the user
    document.getElementById('amount_numbers').value = table_all_numbers.length;

    //Lines under: calculation and display of the sum of the numbers given by the user
    sum_numbers = 0;
    for (let j = 0; j < table_all_numbers.length; j++) {
        sum_numbers = sum_numbers + table_all_numbers[j];
        document.getElementById('sum_numbers').value = sum_numbers;

    }

    //Lines under: calculation and display of the biggest number given by the user
    if (table_all_numbers.length == 1) {
        document.getElementById('biggest_number').value = number_user;
    }
    else {
        biggest_number = table_all_numbers[0];
        for (let k = 0; k < table_all_numbers.length; k++) {
            if (biggest_number < table_all_numbers[k + 1]) {
                biggest_number = table_all_numbers[k + 1];
                document.getElementById('biggest_number').value = biggest_number;
            }
        }
    }

    //Lines under: calculation and display of the smallest number given by the user
    if (table_all_numbers.length == 1) {
        document.getElementById('smallest_number').value = number_user;
    }
    else {
        smallest_number = table_all_numbers[0];
        for (let l = 0; l < table_all_numbers.length; l++) {
            if (smallest_number > table_all_numbers[l + 1]) {
                smallest_number = table_all_numbers[l + 1];
                document.getElementById('smallest_number').value = smallest_number;
            }
        }
    }

    //Lines under: calculation and display of the average of the numbers given by the user 
    average = sum_numbers / table_all_numbers.length;
    document.getElementById('average').value = average;

    //Line under: display of list of all numbers
    document.getElementById('list_all_numbers').value = table_all_numbers;

    //Lines under: calculation and display the longuest sequence of growing numbers 
    //sequence_growing_numbers.splice(0, sequence_growing_numbers.length);
/*
    let switching = 1;

    if (table_all_numbers.length == 1) {
        document.getElementById('sequence_growing_numbers').value = number_user;
        sequence_growing_numbers_to_compare_1.push(number_user);
    }

    else{

        previous_number_user = table_all_numbers[(table_all_numbers.length-2)];


        if (switching = 1 && number_user>=previous_number_user){

            sequence_growing_numbers_to_compare_1.push(number_user);
            document.getElementById('sequence_growing_numbers').value = sequence_growing_numbers_to_compare_1;
        }

        else{
            switching = 2;
            if (switching = 2 && number_user>=previous_number_user){
                sequence_growing_numbers_to_compare_2.push(number_user);
                document.getElementById('sequence_growing_numbers').value = sequence_growing_numbers_to_compare_1;
            }


            if(switching = 2){
                sequence_growing_numbers_to_compare_2.push(number_user);
            }

            if(number_user>=previous_number_user){
                sequence_growing_numbers_to_compare_2.push(number_user);

                if(sequence_growing_numbers_to_compare_1.length>=sequence_growing_numbers_to_compare_2.length){
                    document.getElementById('sequence_growing_numbers').value = sequence_growing_numbers_to_compare_1;
                }

                else{
                    document.getElementById('sequence_growing_numbers').value = sequence_growing_numbers_to_compare_2;
                    sequence_growing_numbers_to_compare_1.splice(0, sequence_growing_numbers_to_compare_1.length);
                    switching = 1;
                }
            }
        }
    }

*/
/*
    else{
        previous_number_user = table_all_numbers[(table_all_numbers.length-2)];

        if(number_user >= previous_number_user) { 
            sequence_growing_numbers_to_compare_1.push(number_user);
        }
        else{
            sequence_growing_numbers_to_compare_2.push(number_user);
        }
        if(sequence_growing_numbers_to_compare_1.length>sequence_growing_numbers_to_compare_2.length){
            console.log('on est dans la comparaison 1');
            document.getElementById('sequence_growing_numbers').value = sequence_growing_numbers_to_compare_1;
        }
        else{
            console.log('on est dans la comparaison 2');
            document.getElementById('sequence_growing_numbers').value = sequence_growing_numbers_to_compare_2;
        }

    } 
*/


    /* if (table_all_numbers.length == 1) {
         document.getElementById('sequence_growing_numbers').value = number_user;
     }
     else{
 
         previous_number_user = table_all_numbers[counter];
         sequence_growing_numbers.push(table_all_numbers[counter]);
 
         if(number_user >= previous_number_user)
         {       
             sequence_growing_numbers.push(number_user);
             if(sequence_growing_numbers_to_compare != null){
                 if(sequence_growing_numbers.length>=sequence_growing_numbers_to_compare.length){
                     document.getElementById('sequence_growing_numbers').value = sequence_growing_numbers;
                 }
                 else{
                     document.getElementById('sequence_growing_numbers').value = sequence_growing_numbers_to_compare;
                     sequence_growing_numbers = sequence_growing_numbers_to_compare;
                 }
             }
             else{
                 document.getElementById('sequence_growing_numbers').value = sequence_growing_numbers;
             }
         }
         else{
             document.getElementById('sequence_growing_numbers').value = sequence_growing_numbers;
             sequence_growing_numbers.splice(0, sequence_growing_numbers.length);
         }
 
 
         sequence_growing_numbers_to_compare;
 
         counter++;
     }*/

    /*
    for_all_sequences_growing_numbers.splice(0, for_all_sequences_growing_numbers.length);
    indiceK = 0;
    for (var l=0; l < (table_all_numbers.length-1); l++ ){
        if(table_all_numbers[l] <= table_all_numbers[l+1]){
            for_all_sequences_growing_numbers[indiceK].push(['Un', 'deux']);
        }
        else{
            indiceK++;
        }
        console.log(for_all_sequences_growing_numbers);
    }

    
    for (var l = 0; l < table_all_numbers.length; l++) {
        if(table_all_numbers[l]<table_all_numbers[l+1]){
            sequence_growing_numbers.push(table_all_numbers[l]);
            if(table_all_numbers[l+1]>table_all_numbers[l+2]){
                sequence_growing_numbers.push(table_all_numbers[l+1]);
            }
        }
    }
    

    for (var l = 0; l < table_all_numbers.length; l++) {
        if(table_all_numbers[l]<table_all_numbers[l+1]){
            sequence_growing_numbers.push(table_all_numbers[l]);           
        }
    }
    document.getElementById('sequence_growing_numbers').value = sequence_growing_numbers;*/


    event.preventDefault();
});

// Detect when the user pushes 'Soumettre'
document.getElementById('restart').addEventListener('click', function (event) {

    allToZero();

    event.preventDefault();
});


/*
        if(number_user > last_number_user) {
            count = count + 1;
            for_all_sequences_growing_numbers.push(number_user);
        }

        else {
            count = 1;
            for_all_sequences_growing_numbers = [number_user];
        }

        last_number_user = number_user;

        if(count > lastmc) {
             lastmc = count;
             sequence_growing_numbers = for_all_sequences_growing_numbers;
             document.getElementById('sequence_growing_numbers').value = sequence_growing_numbers;
        }
        */
