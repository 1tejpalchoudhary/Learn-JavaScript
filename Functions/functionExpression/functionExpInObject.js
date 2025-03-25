const person =  {
    name : "Tejpal",
    address: "Jaipur, Rajasthan, 302012",
    greet: function(name){
        console.log("Hello I am "+ this.name +" and I belongs to ", this.address);
    }
};

person.greet("dj");