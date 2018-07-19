app
.component('allElephants', {
  templateUrl: 'views/elephants.html',
  controller: 'ElephantsController as vm'
})
.component('sanctuary', {
  templateUrl: 'views/sanctuary.html',
  controller: 'SanctuaryController as vm'
})
.component('humans', {
  templateUrl: 'views/humans.html',
  controller: 'HumanController as vm'
})
.component('jbHeader', { templateUrl: 'views/templates/header.html' })
.component('navBar', { templateUrl: 'views/templates/nav.html' })