'use strict';

/**
 * @ngdoc component
 * @name mcp.component:mp-edit-app-appBuildConfig
 * @description
 * # mp-edit-app-config
 */
angular.module('mobileControlPanelApp').component('mpEditAppConfig', {
  template: `<div>
              <div class="row edit mp-app-config">
                <div class="col-lg-6">
                  <h3>Edit</h3>
                  <form novalidate class="form-horizontal" name="appBuildConfig">
                    <dl class="dl-horizontal left">
                      <div ng-class="{'has-error': appBuildConfig.repoUri.$touched && appBuildConfig.repoUri.$error.required}">
                        <dt>Repo URL</dt>
                        <dd><input ng-model="$ctrl.config.spec.source.git.uri" name="repoUri" type="text" id="repo-uri" class="form-control" required></dd>
                      </div>
                      <div>
                        <dt>Jenkins Job Name</dt>
                        <dd>{{$ctrl.config.metadata.name}}</dd>
                      </div>
                      <div>
                        <dt>Branch</dt>
                        <dd><input ng-model="$ctrl.config.spec.source.git.ref" type="text" id="branch-name" class="form-control"></dd>
                      </div>
                      <div>
                        <dt>Jenkinsfile Path</dt>
                        <dd><input ng-model="$ctrl.config.spec.strategy.jenkinsPipelineStrategy.jenkinsfilePath" type="text" id="jenkins-path" class="form-control"></dd>
                      </div>
                    </dl>
                    <button ng-disabled="appBuildConfig.$invalid || appBuildConfig.$pristine" ng-click="$ctrl.update(appBuildConfig.$valid)" class="btn btn-primary">Update</button>
                    <button ng-click="$ctrl.cancel()" class="btn btn-default">Cancel</button>
                  </form>
                </div>
              </div>
            </div>`,
  bindings: {
    config: '<',
    updated: '&',
    cancelled: '&'
  },
  controller: [
    function() {
      this.update = function(isValid) {
        if (!isValid) {
          return;
        }

        this.updated()(this.config);
      };

      this.cancel = function() {
        this.cancelled()();
      };
    }
  ]
});
