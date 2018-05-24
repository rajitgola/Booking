import { Component } from '@angular/core';

class Booking  {
  	"totalSeats" : number ;
    "bookedSeats" : number;
    "availSeats" : number;
  	"rowNo" : number;
}

// class ReservedSeats  {
// 	"rowNo"	  : number ;
// 	"booking" : Booking[];
// 	"seatsAvailable" : number ;
// }

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
  // reservedSeats  	 : ReservedSeats[] = [];

  ticketsRemaining	 : number = this.seats;
  // isBooked			 : boolean = false;

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

  	// for(var j=0 ; j< this.rowsNum ; j++){
  	// 	var rows = new ReservedSeats;
  	// 	rows.rowNo =  j;
  	// 	rows.booking = this.rows;
  	// 	rows.seatsAvailable = this.seatPerRow
  	// 	this.reservedSeats.push(rows);
  	// }
  	// // console.log(this.rows);
  	// console.log(this.reservedSeats);
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

        // var availSeats = 0;
        var num = number ;
        for(var i =0 ; i<this.rowsNum; i++ ){
          // availSeats += this.booking[i].availSeats;
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
  	// console.log(this.booking);
  }



}


// import { Component } from '@angular/core';

// class Booking  {
//     "seatNo" : number ;
//     "isReserved" : boolean;
// }

// class ReservedSeats  {
//   "rowNo"    : number ;
//   "booking" : Booking[];
//   "seatsAvailable" : number ;
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {

//   seats         : number = 80 ;
//   seatPerRow       : number = 7 ;
//   rowsNum         : number = Math.ceil(this.seats / this.seatPerRow);

//   rows          : Booking[] = [];
//   reservedSeats     : ReservedSeats[] = [];

//   ticketsRemaining   : number = this.seats;
//   isBooked       : boolean = false;

//   constructor(){
//     for(var i =0 ;i < this.seatPerRow ; i++){
//       var booking = new Booking;
//       booking.seatNo =  i;
//       booking.isReserved = false;
//       this.rows.push(booking);
//     }

//     for(var j=0 ; j< this.rowsNum ; j++){
//       var rows = new ReservedSeats;
//       rows.rowNo =  j;
//       rows.booking = this.rows;
//       rows.seatsAvailable = this.seatPerRow
//       this.reservedSeats.push(rows);
//     }
//     // console.log(this.rows);
//     console.log(this.reservedSeats);
//   }

//   bookTickets(number : number){
//     console.log(number);
//     if(number > this.ticketsRemaining){
//       alert('All booked!');
//     }
//     else{
//       // var available = this.reservedSeats.map((obj)=>{
//       //     if(obj.seatsAvailable > number){
//       //       let val;
//       //       val = obj.booking.map((o , index)=>{
//       //         o.isReserved = ( (o.isReserved == false) && (index < number )) ? true : o.isReserved;
//       //          return o;
//       //       });
//       //       return val;
//       //     }
//       // });
//       for(var i = 0 ; i < this.reservedSeats.length ; i++){
//         for(var j=0 ; j < this.reservedSeats[i].booking.length ; j++ ){
//           if(this.reservedSeats[i].seatsAvailable >= number && !this.isBooked){
//             console.log(this.reservedSeats[i].rowNo);
//             this.reservedSeats[i].booking[j].isReserved = (j < number) ? true : false ;
//           }
//           else break;
//         }
//         this.isBooked = true;
//         // if(this.isBooked){
//         //   this.reservedSeats[i].seatsAvailable = this.reservedSeats[i].seatsAvailable - number;
//         //   this.ticketsRemaining = this.ticketsRemaining - number ;
//         // }
//       }
//     }
//     console.log(this.reservedSeats);
//   }



// }

