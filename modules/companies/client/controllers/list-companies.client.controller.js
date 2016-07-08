(function () {
  'use strict';

  angular
    .module('companies')
    .controller('CompaniesListController', CompaniesListController);

  CompaniesListController.$inject = ['CompaniesService', 'dateFilter'];

  function CompaniesListController(CompaniesService, dateFilter) {
    var vm = this;

    vm.dateFilter = dateFilter;

    vm.companies = CompaniesService.query();

    vm.removeCompany = function (index, companies) {
      var a = 1;
    };

  }
})();
