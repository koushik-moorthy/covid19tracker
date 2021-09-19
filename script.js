var button= document.querySelector('.submit');
const api_url='https://cors-anywhere.herokuapp.com/https://api.covid19india.org/state_district_wise.json';
const state_url='https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json';
var search=document.getElementById("search");

button.addEventListener('click', function(){
		getData(api_url);
})
function myfun(search){
	var search=document.getElementById("search");
	search.value=search.value[0].toUpperCase()+(search.value).slice(1);
}
async function getData(api_url){
	const response=await fetch(api_url);
	const data=await response.json();
	let locarr=data['Tamil Nadu']['districtData'][search.value];

	var table = document.getElementById('overall-table');
	var table1 = document.getElementById('latest-table');

			var row = `<tr>
							<td>${search.value}</td>
							<td>${locarr.active}</td>
							<td>${locarr.confirmed}</td>
							<td>${locarr.deceased}</td>
							<td>${locarr.recovered}</td>
					  </tr>`
			table.innerHTML += row


			var row1 = `<tr>
							<td>${search.value}</td>
							<td>${locarr.delta.confirmed}</td>
							<td>${locarr.delta.deceased}</td>
							<td>${locarr.delta.recovered}</td>
					  </tr>`
			table1.innerHTML += row1
}
async function loadData(){
	const response=await fetch(state_url);
	const data=await response.json();
	let locarr=data['statewise'][2];
	var table = document.getElementById('tn-overall-table');
	var table1 = document.getElementById('tn-latest-table');
	document.getElementById('time').innerHTML=locarr.lastupdatedtime;

	var row = `<tr>
							<td>${locarr.active}</td>
							<td>${locarr.confirmed}</td>
							<td>${locarr.deaths}</td>
							<td>${locarr.recovered}</td>
					  </tr>`
			table.innerHTML += row


	var row1 = `<tr>
					<td>${locarr.deltaconfirmed}</td>
					<td>${locarr.deltadeaths}</td>
					<td>${locarr.deltarecovered}</td>
				</tr>`
			table1.innerHTML += row1

	const response1=await fetch(api_url);
	const data1=await response1.json();
	var districts=['Airport Quarantine','Ariyalur','Chengalpattu','Chennai','Coimbatore','Cuddalore','Dharmapuri','Dindigul','Erode','Kallakurichi','Kancheepuram','Kanyakumari','Karur','Krishnagiri','Madurai','Nagapattinam','Namakkal','Nilgiris','Other State','Perambalur','Pudukkottai','Railway Quarantine','Ramanathapuram','Ranipet','Salem','Sivaganga','Tenkasi','Thanjavur','Theni','Thiruvallur','Thiruvarur','Thoothukkudi','Tiruchirappalli','Tirunelveli','Tirupathur','Tiruppur','Tiruvannamalai','Vellore','Viluppuram','Virudhunagar'];
	var table2 = document.getElementById('total-table');
	var count=0;
	for(var i=0;i<districts.length;i++){
		let distarr=data1['Tamil Nadu']['districtData'][(districts[i])];

			var row2 = `<tr>
							<td>${(districts[i])}</td>
							<td>${distarr.active}</td>
							<td>${distarr.confirmed}</td>
							<td>${distarr.deceased}</td>
							<td>${distarr.recovered}</td>
					  </tr>`
			table2.innerHTML += row2

	}
}







