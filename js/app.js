var vm = {
    array: ko.observableArray()
};

vm.array.push('Marker 1');
vm.array.push('Marker 2');
vm.array.push('Marker 3');

ko.applyBindings(vm);
