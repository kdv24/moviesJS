var Ticket = {
  getPrice: function(){
    return 15 - (this.old_release * 2)
              - (this.age_discount * 2)
              - (this.showing * 3);
  }
};


// $(document).ready(function(){
//   $()
//
// });
