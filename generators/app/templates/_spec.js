import <%= moduleName %>Module from './'
import <%= componentName %>Controller from './<%= componentFileName %>.controller';
import <%= componentName %>Component from './<%= componentFileName %>.component';
import <%= componentName %>Template from './<%= componentFileName %>.html';

describe('<%= componentName %>', () => {
  let $rootScope, makeController;

  beforeEach(window.module(<%= moduleName %>Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new <%= componentName %>Controller();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    xit('has a foo property', () => {
      let controller = makeController();
      expect(controller).to.have.property('foo');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has foo in template', () => {
      expect(<%= componentName %>Template).to.match(/{{\s?\$ctrl\.foo\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = <%= componentName %>Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(<%= componentName %>Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(<%= componentName %>Controller);
      });
  });
});
