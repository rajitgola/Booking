import { Component } from '@angular/core';

class Booking  {
  	"seatNo" : number ;
  	"isReserved" : boolean;
}

class ReservedSeats  {
	"rowNo"	  : number ;
	"booking" : Booking[];
	"seatsAvailable" : number ;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  seats 		 	 : number = 80 ;
  seatPerRow 	 	 : number = 7 ;
  rowsNum 		 	 : number = Math.ceil(this.seats / this.seatPerRow);

  rows		 		 : Booking[] = [];
  reservedSeats  	 : ReservedSeats[] = [];

  ticketsRemaining	 : number = this.seats;
  isBooked			 : boolean = false;

  constructor(){
  	for(var i =0 ;i < this.seatPerRow ; i++){
  		var booking = new Booking;
  		booking.seatNo =  i;
  		booking.isReserved = false;
  		this.rows.push(booking);
  	}

  	for(var j=0 ; j< this.rowsNum ; j++){
  		var rows = new ReservedSeats;
  		rows.rowNo =  j;
  		rows.booking = this.rows;
  		rows.seatsAvailable = this.seatPerRow
  		this.reservedSeats.push(rows);
  	}
  	// console.log(this.rows);
  	console.log(this.reservedSeats);
  }

  bookTickets(number : number){
  	console.log(number);
  	if(number > this.ticketsRemaining){
  		alert('All booked!');
  	}
  	else{
  		// var available = this.reservedSeats.map((obj)=>{
  		// 		if(obj.seatsAvailable > number){
  		// 			let val;
  		// 			val = obj.booking.map((o , index)=>{
  		// 				o.isReserved = ( (o.isReserved == false) && (index < number )) ? true : o.isReserved;
  		// 			 	return o;
  		// 			});
  		// 			return val;
  		// 		}
  		// });
  		for(var i = 0 ; i < this.reservedSeats.length ; i++){
  			for(var j=0 ; j < this.reservedSeats[i].booking.length ; j++ ){
  				if(this.reservedSeats[i].seatsAvailable >= number && !this.isBooked){
  					console.log('here');
  					this.reservedSeats[i].booking[j].isReserved = (j < number) ? true : false ;
  				}
  				else break;
  			}
  			this.isBooked = true;
  			if(this.isBooked){
  				this.reservedSeats[i].seatsAvailable = this.reservedSeats[i].seatsAvailable - number;
  				this.ticketsRemaining = this.ticketsRemaining - number ;
  			}
  		}
  	}
  	console.log(this.reservedSeats);
  }



}
