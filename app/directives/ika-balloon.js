import angular from 'angular';
import moment from 'moment';
import {appName} from '../constants';

const directiveName = 'ikaBalloon';

class IkaBalloonController {
  constructor($rootScope, $compile, $scope) {
    IkaBalloonController.$inject = ['$rootScope', '$compile', '$scope'];
    this.$scope = $scope;

    // Aliases
    this.$scope.twiId = this.squid.twitterId;
    this.$scope.ikaId = this.squid.ikaId;
  }

  /**
   * @param {number} time - unixtime
   * @returns {string}
   */
  relativeTime(time) {
    return moment(time, 'x').fromNow();
  }
}

function ddo() {
  return {
    restrict:         'E',
    templateUrl:      './app/directives/ika-balloon.html',
    controller:       IkaBalloonController,
    controllerAs:     directiveName,
    scope:            {},
    bindToController: {
      squid: '=ikaSquid'
    }
  };
}

angular.module(appName).directive(directiveName, ddo);

function ikaTwi() {
  return {
    restrict:         'E',
    template:         '<a ng-href="https://twitter.com/{{c.id}}">@{{c.id}}</a>',
    controller:       () => {},
    controllerAs:     'c',
    scope:            {},
    bindToController: {
      id: '=twiId'
    }
  };
}

angular.module(appName).directive('ikaTwi', ikaTwi);

function ikaIkaid() {
  return {
    restrict:         'E',
    template:         '<span class="ika-id-label">イカID:</span><span class="ika-id">{{c.id}}</span>',
    controller:       () => {},
    controllerAs:     'c',
    scope:            {},
    bindToController: {
      id: '=ikaId'
    }
  };
}

angular.module(appName).directive('ikaIkaid', ikaIkaid);