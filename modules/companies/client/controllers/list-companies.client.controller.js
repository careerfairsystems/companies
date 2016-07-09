(function () {
  'use strict';

  angular
    .module('companies')
    .controller('CompaniesListController', CompaniesListController);

  CompaniesListController.$inject = ['CompaniesService', 'dateFilter', 'DTOptionsBuilder', 'DTColumnBuilder'];

  function CompaniesListController(CompaniesService, dateFilter, DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;

    vm.dateFilter = dateFilter;

    vm.companies = CompaniesService.query();

    vm.dtOptions = DTOptionsBuilder.fromSource('api/companies')
        .withDOM('frtip')
        .withPaginationType('full_numbers')
        // Active Buttons extension
        .withButtons([
          'columnsToggle',
          'colvis',
          'copy',
          'print',
          'excel',
          {
            text: 'Some button',
            key: '1',
            action: function (e, dt, node, config) {
              alert('Button activated');
            }
          }
        ]);
    vm.dtColumns = [
      DTColumnBuilder.newColumn('name').withTitle('Name'),
      DTColumnBuilder.newColumn('created').withTitle('Created'),
    ];

    vm.removeCompany = function (index, companies) {
      var a = 1;
    };

  }
})();
