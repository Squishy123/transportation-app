var vm = {
  array: ko.observableArray()
};

vm.array.push({
  name: 'St.Lawrence Market',
  onClick: function() {
    console.log("You Clicked " + this.name);
    openLocation(0);
  }
});

vm.array.push({
  name: 'CN Tower',
  onClick: function() {
    console.log("You Clicked " + this.name);
    openLocation(1);
  }
});

vm.array.push({
  name: 'Nathan Philips Square',
  onClick: function() {
    console.log("You Clicked " + this.name);
    openLocation(2);
  }
});

vm.array.push({
  name: 'Royal Ontario Museum',
  onClick: function() {
    console.log("You Clicked " + this.name);
    openLocation(3);
  }
});

vm.array.push({
  name: 'Art Gallery Of Ontario',
  onClick: function() {
    console.log("You Clicked " + this.name);
    openLocation(4);
  }
});

ko.applyBindings(vm);
