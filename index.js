(function(angular) {
  'use strict';
angular.module('testApp', ['blueimp.fileupload']).controller('MainCtrl', function MainCtrl() {
  this.hero = {
    name: 'Test'
  };
});
})(window.angular);