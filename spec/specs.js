describe('Ticket', function(){
  describe('getPrice()', function(){
    it('will return the price for one full price ticket', function(){
      var testTicket = Object.create(Ticket);
      testTicket.old_release = 0;
      testTicket.age_discount= 0;
      testTicket.showing = 0;
      expect(testTicket.getPrice()).to.equal(15);
    });
    it('will return the price for an older movie', function(){
      var testTicket = Object.create(Ticket);
      testTicket.old_release = 1;
      testTicket.age_discount = 0;
      testTicket.showing = 0;
      expect(testTicket.getPrice()).to.equal(13);
    });
    it('will return the price for an older movie with an age discount', function(){
      var testTicket = Object.create(Ticket);
      testTicket.old_release = 1;
      testTicket.age_discount = 1;
      testTicket.showing = 0;
      expect(testTicket.getPrice()).to.equal(11);
    });
    it('will return the price of an older movie with an age discount shown before 5pm', function(){
      var testTicket = Object.create(Ticket);
      testTicket.old_release = 1;
      testTicket.age_discount = 1;
      testTicket.showing = 1;
      expect(testTicket.getPrice()).to.equal(8);
    });
  });
});
