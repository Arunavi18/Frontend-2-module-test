//document.getElementById("image2").disabled = true;
//document.getElementById("image3").disabled = true;
//document.getElementById("image4").disabled = true;

// array to store registration details

let formDetailsArray = [];

let form = document.getElementById('form');
let displaydetails = document.getElementById('displaydetails');
let dicewithscore = document.getElementById('dicewithscore');
let congratsPic = document.getElementById('congratsPic');

//picture 1 function

function registsrationFormFunction() {
    
form.classList.remove('hidded');
displaydetails.classList.add('hidded');
dicewithscore.classList.add('hidded');
congratsPic.classList.add('hidded');
}
//Collecting user details

function submitFormFunction(e) {
    console.log(e);
    e.preventDefault();
    let name = document.getElementById('name').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    if(name && username && email) {
        let obj = {
            Name: name,
            Username: username,
            Email: email,
        }
      formDetailsArray.push(obj);
      //document.getElementById('image2').disabled = false;
      //document.getElementById('image1').disabled = true;
      alert('Registered Successfully!!')
      form.classList.add('hidded');
    } else {
        alert(`Required all the fields`)
    }
}

//Picture 2 function displaying details

function registeredDetailsFunction() {
    

    document.getElementById('details').innerHTML = `Name: ${formDetailsArray[0].Name}, UserName: ${formDetailsArray[0].Username}, Email: ${formDetailsArray[0].Email}`
    //document.getElementById('image3').disabled = false;
    //document.getElementById('image2').disabled = true;
    form.classList.add('hidded');
displaydetails.classList.remove('hidded');
dicewithscore.classList.add('hidded');
congratsPic.classList.add('hidded');
}



//picture3 function dice game
let attempt = 2;
function diceGameAndScoreFunction() {
    attempt--;
    console.log(`remaining attempts= ${attempt}` );
    document.getElementById('attempts').innerText = attempt;
    //document.getElementById('image3').disabled = true;
    form.classList.add('hidded');
displaydetails.classList.add('hidded');
dicewithscore.classList.remove('hidded');
congratsPic.classList.add('hidded');
}

//Dicegame function 
let RemainingClicks = 3;
let totalScore = 0;
function diceClick() {
    RemainingClicks--;
    document.getElementById('diceClicks').innerText = RemainingClicks;
    let randomNo = Math.floor(Math.random() * 6) + 1;
    totalScore += randomNo;
    document.getElementById('score').innerText = totalScore;
    if(RemainingClicks === 0) {
        document.getElementById('score').innerText = totalScore;
        if(totalScore > 10) {
            alert(`Congrulations!!`);
            document.getElementById('dicewithscore').classList.add('hidded');
            document.getElementById('image4').disabled = false;
        } else {
            if(attempt != 0)
            {
                alert(`Try again!!`);
                //document.getElementById('image3').disabled = false;
                RemainingClicks = 3;
                totalScore = 0;
                //document.getElementById('dicepic').disabled = false;
                document.getElementById('dicewithscore').classList.add('hidded');
                console.log(`RemainingClicks = ${RemainingClicks}`);
                console.log(`totalScore = $(totalScore)`);
            } else {
                document.getElementById('score').innerText = totalScore;
                alert(`Sorry Better luck next time!!`);
                document.getElementById('dicewithscore').classList.add('hidden');
               //document.getElementById('tryAgainPic').classList.remove('hidden');
            }


        }
    }
}

function couponCodeFunction() {
    console.log("abc");
    document.getElementById('image4').disabled = true;
    let coupon = ' ';
    for(let i = 0; i < 12; i++) {
    coupon += Math.floor(Math.random() * 10);
    }
    form.classList.add('hidded');
    displaydetails.classList.add('hidded');
dicewithscore.classList.add('hidded');
congratsPic.classList.remove('hidded');

    alert(`Congrulations!!, you have generated coupon code is ${coupon}`)
}
