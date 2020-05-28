class Hotel {
	hotelName = '';
	address = '';
	image = '';
	rooms = 40;
	numberOfBookedRooms = Math.floor(Math.random() * 40 + 1);

	constructor(hotelName, address, image) {
		this.hotelName = hotelName;
		this.address = address;
		this.image = image;
	}
	showAvailability() {
		// userNights = document.getElementById('userNights').value;
		return this.rooms - this.numberOfBookedRooms;
		// reserve = document.getElementById('reserve');
		// if (this.numberOfNights > userNights) {
		// 	output = document.getElementById('output').innerHTML;
		// 	output = `We have ${this.numberOfNights - userNights} left.`;
		// 	reserve.style.display = 'inline-block';
		// } else {
		// 	// define where to return
		// 	output = document.getElementById('output').innerHTML;
		// 	output = `Sorry, no available nights for ${this.hotelName}.`;
		// }
		// console.log(userNights);
	}
}
let hotel1 = new Hotel('Hilton', 'Vienna', 'Hilton.jpg');
let hotel2 = new Hotel('Donauhotel', 'Graz', 'Donauhotel.jpg');
let hotel3 = new Hotel('Ibis', 'München', 'Ibis.jpg');
hotelArray = [ hotel1, hotel2, hotel3 ];
function checkRooms() {
	document.getElementById('wrapper').innerHTML = '';
	for (i = 0; i < hotelArray.length; i++) {
		if (document.getElementById('userNights').value < hotelArray[i].showAvailability()) {
			document.getElementById(
				'wrapper'
			).innerHTML += `<div class="hotels" style="border: solid 2px blue; margin: 1%; background-color: lightgreen">
    <img src="${hotelArray[i].hotelName}.png" alt="hotelPicture">
    <p>${hotelArray[i].hotelName}</p>
    <label for="userNights">How many nights do you want to stay? </label> <br>
    <br>
    <p>"There are rooms available."</p>
    <button id="reserve" style="font-size: 1rem; width: 50%; margin: 0.5% auto;">I'll reserve</button>
</div>`;
		} else {
			document.getElementById(
				'wrapper'
			).innerHTML += `<div class="hotels" style="border: solid 2px blue; margin: 1%; background-color: red">
    <img src="${hotelArray[i].hotelName}.png" alt="hotelPicture">
    <p>${hotelArray[i].hotelName}</p>
    <label for="userNights">How many nights do you want to stay? </label> <br>
    <p>"Sorry, no rooms available right now."</p>
</div>`;
		}
	}
}
var button = document.getElementById('check');
button.addEventListener('click', checkRooms, false);
