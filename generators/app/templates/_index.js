import angular from 'angular';
import <%= componentName %>Component from './<%= componentFileName %>.component';

const <%= componentName %> = angular
  .module(<%= moduleName %>, [])
  .component('<%= componentFileName %>', <%= componentName %>Component)
  .name;

export default <%= componentName %>;
