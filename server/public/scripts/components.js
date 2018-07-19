app
  .component('allElephants', {
    template: '<h1>All Elephants {{ vm.title }}</h2>',
    controller: 'ElephantsController as vm'
  });