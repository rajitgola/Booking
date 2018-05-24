import { Component } from '@angular/core';

class Booking  {
  	"totalSeats" : number ;
    "bookedSeats" : number;
    "availSeats" : number;
  	"rowNo" : number;
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

  booking		 		 : Booking[] = [];

  ticketsRemaining	 : number = this.seats;
  bookedSeats : any ;

  constructor(){
  	for(var i =0 ;i < this.rowsNum ; i++){
  		var booking = new Booking;
  		booking.totalSeats =  this.seatPerRow;
      booking.bookedSeats = 0;
      booking.availSeats = this.seatPerRow;
  		booking.rowNo = i;
  		this.booking.push(booking);
  	}
    console.log(this.booking);
  }

  bookTickets(numberic : string){
    var number = parseInt(numberic);
  	// console.log(typeof number);
  	if(number > this.ticketsRemaining){
  		alert('All booked!');
  	}
    else{
        for(var i =0 ; i<this.rowsNum; i++ ){
            if(this.booking[i].availSeats >= number){
              this.booking[i].availSeats = this.booking[i].availSeats - number ;
              this.booking[i].bookedSeats = this.booking[i].bookedSeats + number ;
              this.ticketsRemaining = this.ticketsRemaining - number;
              console.log(this.booking);
              return ;
            }
        }

        var num = number ;
        for(var i =0 ; i<this.rowsNum; i++ ){
            if(this.booking[i].bookedSeats < this.booking[i].totalSeats){
              console.log(this.booking[i]);
              let avail = this.booking[i].availSeats ;
              var temp = avail % num ;
              if(avail > num){
                this.booking[i].availSeats = this.booking[i].availSeats - num ;
                this.booking[i].bookedSeats = this.booking[i].bookedSeats + num ;
                num = 0 ;
            }else if (avail < num){
                this.booking[i].availSeats = this.booking[i].availSeats - avail ;
                this.booking[i].bookedSeats = this.booking[i].bookedSeats + avail ;
                num = num - avail ;              
            }
              console.log(num);

                if(num <= 0){
                  console.log(this.booking);
                  return ;
                }              
            }
        }
    }
  }



}


