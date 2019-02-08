let a=10;
let b=20;
let c=30;

function app(){
	if(frm.chk1.checked==true)
		frm.txt.value=a;
	else
		frm.txt.value=0;
	if(frm.chk2.checked==true)
		frm.txt1.value=b;
	else
		frm.txt1.value=0;
	if(frm.chk3.checked==true)
		frm.txt2.value=c;
	else
		frm.txt2.value=0;

	let sum;
	if(frm.chk1.checked || frm.chk2.checked || frm.chk3.checked==true){
		x=parseInt(frm.txt.value);
		y=parseInt(frm.txt1.value);
		z=parseInt(frm.txt2.value);
		sum=x+y+z;
		frm.txt3.value=sum;
	} else
		frm.txt3.value=0;
}















	let end = new Date('09/17/2018 00:00 AM');

	    let _second = 1000;
	    let _minute = _second * 60;
	    let _hour = _minute * 60;
	    let _day = _hour * 24;
	    let timer;

	    function showRemaining() {
	        let now = new Date();
	        let distance = end - now;
	        if (distance < 0) {

	            clearInterval(timer);
	            document.getElementById('countdown').innerHTML = "EXPIRED!";

	            return;
	        }
	        let days = Math.floor(distance / _day);
	        let hours = Math.floor((distance % _day) / _hour);
	        let minutes = Math.floor((distance % _hour) / _minute);
	        let seconds = Math.floor((distance % _minute) / _second);

	        document.getElementById('countdown').innerHTML = days + "days ";
	        document.getElementById('countdown').innerHTML += hours + "hrs ";
	        document.getElementById('countdown').innerHTML += minutes + "mins ";
	        document.getElementById('countdown').innerHTML += seconds + "secs";
	    }

	    timer = setInterval(showRemaining, 1000);















	    <button onclick="myFunction()">Try it</button>

	    <p id="demo"></p>

	    <script>
	    function myFunction() {
	        let txt;
	        if (confirm("Press a button!")) {
	            txt = "You pressed OK!";
	        } else {
	            txt = "You pressed Cancel!";
	        }
	        document.getElementById("demo").innerHTML = txt;
	    }
	    </script>


