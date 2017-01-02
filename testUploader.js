(function(angular) {
  'use strict';
function TestUploaderController($scope, $element, $attrs) {
  var ctrl = this;
  ctrl.options = {
    maxFileSize: 5000000,
    type: "POST",
    url:'https://upload.wistia.com/',
    acceptFileTypes: /(\.|\/)(avi|mp4|mov)$/i,
    dataType: 'json',
    autoUpload: true,
    loadImageNoRevoke: true,
    disableImageLoad: true,
    formData: {
      api_password: '8697b84951e481b9c121123f43e8dec1e375049d0e262239462cfcf3b864aa48',
      project_id: 'zh6toltsrl'
    }
  };
}

angular.module('testApp').component('testUploader', {
  templateUrl: 'testUploader.html',
  controller: TestUploaderController,
  bindings: {
    hero: '='
  }
});
})(window.angular);