var Ticket = {
  getPrice: function(){
    return 15 - (this.old_release * 2)
              - (this.age_discount * 2)
              - (this.showing * 3);
  }
};


$(document).ready(function(){
  $('form#ticketmaster').submit(function(event){
    event.preventDefault();

    var vintage = $("select#vintage").val();
    var age = $("select#age_range").val();
    var showtime = $("select#showing").val();

    var ticket = Object.create(Ticket);

    ticket.old_release = vintage;
    ticket.age_discount = age;
    ticket.showing = showtime;

    var newTicket = ticket.getPrice();

    $('.ticket_price').text(newTicket);
  });

});
