
var apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWEwMzYwNGMtMDQwMy00MDc1LWE0NGItNThjOTIwNjIyODQ5Iiwia2V5X2lkIjoiMWM1MjUxOTItMjQzOC00MDZhLWJiZDgtOTczMDViZDU3Njc2IiwiaWF0IjoxNTUwMzE5Mzg2fQ.OReYaxoTq9PiZC5InfxNWT0pRtXWlTSNog6vQYNMerY';

function eventsData() {
	var headers = new Headers();

	headers.set('Authorization', 'Bearer '+apiKey);
	fetch('https://api.list.co.uk/v1/events?location=glasgow&order=ts', { headers: headers })
		.then(function(response) { 
		    return response.json(); 
		    
		})
		
		.then(function(data) {
			var ul = document.querySelector('#search-output');
				
			ul.innerHTML = '';
			data.forEach(function(result) {
			    	
				var rawTime = result.schedules[0].performances[0].ts;
				var eventTime = moment(rawTime).format("Do MMMM YYYY, h:mm a");
				
				var li = document.createElement('li');
				
				eventInfo = document.createElement('div');
				eventInfo.innerHTML = `<h3 class="event-title">${result.name}</h3>
				                            <p class="event-details"> @ ${result.schedules[0].place.name} <br>
				                            This event is on ${eventTime} and is ${result.schedules[0].ticket_summary}. <br>
				                            Click <a href="https://www.list.co.uk/event/${result.event_id}" target="_blank">here</a> for more info.<p>`;
				li.appendChild(eventInfo);
				ul.appendChild(li);
			});
	    });
		    
	
		
		
}

eventsData();




