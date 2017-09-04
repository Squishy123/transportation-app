var vm = {
  array: ko.observableArray()
};

vm.array.push({
  name: 'St.Lawrence Market',
  filtered: true,
  onClick: function() {
    console.log("You Clicked " + this.name);
    openLocation(this.name);
  }
});

vm.array.push({
  name: 'CN Tower',
  filtered: true,
  onClick: function() {
    console.log("You Clicked " + this.name);
    openLocation(this.name);
  }
});

vm.array.push({
  name: 'Nathan Philips Square',
  filtered: true,
  onClick: function() {
    console.log("You Clicked " + this.name);
    openLocation(this.name);
  }
});

vm.array.push({
  name: 'Royal Ontario Museum',
  filtered: true,
  onClick: function() {
    console.log("You Clicked " + this.name);
    openLocation(this.name);
  }
});

vm.array.push({
  name: 'Art Gallery Of Ontario',
  filtered: true,
  onClick: function() {
    console.log("You Clicked " + this.name);
    openLocation(this.name);
  }
});

ko.applyBindings(vm);
