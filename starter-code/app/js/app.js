angular
  .module('CardsAgainstAssembly', [])
  .controller('CardsController', CardsController)
  .controller('PlayersController', PlayersController)
  .directive('card', CardViewDirective)
  .directive('scores', PlayerViewDirective);

function CardsController() {
  var vm = this;
  vm.questions = [
    {question: "What is Batman's guilty pleasure?"},
    {question: "I'm sorry professor, I couldn't complete my homework because _________."},
    {question: "I get by with a little help from _________."},
    {question: "_________. It's a trap!"},
    {question: "The class field trip was completely ruined by _________."},
    {question: "Use the ________ Luke!"},
    {question: "My favorite duck is _________."},
    {question: "What's my secret power?"}
  ];
}

function PlayersController(){
  var vm = this;
  vm.players = [
    {name: 'Chon', points: 2},
    {name: 'Shawn', points: 16},
    {name: 'Shaun', points: 12},
    {name: 'Shonn', points: 6},
    {name: 'Chonne', points: 9},
    {name: 'Sean', points: 21}
  ];
}

function CardViewDirective(){
  var directive = {
    restrict : 'E',
    replace : true,
    templateUrl : './templates/_cardView.html'
  };
  return directive;
}

function PlayerViewDirective(){
  var directive = {
    restrict : 'E',
    replace : true,
    templateUrl : './templates/_playerView.html'
  };
  return directive;
}
