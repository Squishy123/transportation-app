var vm = {
  array: ko.observableArray(),
  filter: function(name) {
    this.array.forEach(function(e) {
      
    });
  }
};

vm.array.push({
  name: 'St.Lawrence Market',
  onClick: function() {
    console.log("You Clicked " + this.name);
    openLocation(this.name);
  }
});

vm.array.push({
  name: 'CN Tower',
  onClick: function() {
    console.log("You Clicked " + this.name);
    openLocation(this.name);
  }
});

vm.array.push({
  name: 'Nathan Philips Square',
  onClick: function() {
    console.log("You Clicked " + this.name);
    openLocation(this.name);
  }
});

vm.array.push({
  name: 'Royal Ontario Museum',
  onClick: function() {
    console.log("You Clicked " + this.name);
    openLocation(this.name);
  }
});

vm.array.push({
  name: 'Art Gallery Of Ontario',
  onClick: function() {
    console.log("You Clicked " + this.name);
    openLocation(this.name);
  }
});

ko.applyBindings(vm);
