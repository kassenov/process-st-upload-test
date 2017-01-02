(function(angular) {
  'use strict';
  
TestUploaderController.$inject = ['$scope', '$timeout'];

function TestUploaderController($scope, $timeout) {
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
    },
    start: function (e) {
      ctrl.error = null;
    },
    progress: function (e, data) {
      ctrl.progress = parseInt(data.loaded / data.total * 100, 10);
    },
    done: function (e, data) {
      ctrl.mediaHashId = data.result.hashed_id;
      $timeout(function() {
          var wistiaEmbed = Wistia.embed(ctrl.mediaHashId, {
          videoFoam: true,
          playerColor: "3B97D3"
        });
      }, 100);
    },
    fail: function (e, data) {
      ctrl.error = data.errorThrown;
    }
  };
}

angular.module('testApp').component('testUploader', {
  templateUrl: 'testUploader.html',
  controller: TestUploaderController
});
})(window.angular);