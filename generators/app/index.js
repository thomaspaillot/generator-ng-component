'use strict';

var generator = require('yeoman-generator');
var _ = require('lodash');

module.exports = generator.Base.extend({
  constructor: function () {
    generator.Base.apply(this, arguments);
    this.argument('componentName', {type: String, required: true});
  },
  prompting: function() {
    return this.prompt([{
      type: 'input',
      name: 'moduleName',
      message: 'What’s your module name',
      store: true
    }]).then(function (answers) {
      this.props = answers;
    }.bind(this));
  },
  writing: {
    component: function () {
      this.props.componentName = _.upperFirst(this.componentName);
      this.props.componentFileName = _.kebabCase(this.componentName);
      var moduleFolderName = _.kebabCase(this.props.moduleName);
      var path = 'app/components/' + moduleFolderName;
      var pathAndPrefix = path + '/' + this.props.componentFileName;
      this.fs.copyTpl(
        this.templatePath('_index.js'),
        this.destinationPath(path + '/index.js'), this.props);
      this.fs.copyTpl(
        this.templatePath('_component.js'),
        this.destinationPath(pathAndPrefix + '.component.js'), this.props);
      this.fs.copyTpl(
        this.templatePath('_controller.js'),
        this.destinationPath(pathAndPrefix + '.controller.js'), this.props);
      this.fs.copyTpl(
        this.templatePath('_component.spec.js'),
        this.destinationPath(pathAndPrefix + '.spec.js'), this.props);
      this.fs.copy(
        this.templatePath('_component.html'),
        this.destinationPath(pathAndPrefix + '.html'));
    }
  }
});
