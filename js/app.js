var vm = {
    array: ko.observableArray()
};

vm.array.push('St.Lawrence Market');
vm.array.push('CN Tower');
vm.array.push('Nathan Philips Square');
vm.array.push("Royal Ontario Museum");
vm.array.push("Art Gallery Of Ontario")

ko.applyBindings(vm);
