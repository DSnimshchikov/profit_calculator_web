import React from 'react';
import { shallow } from 'enzyme';
import Filter from 'Filter.js';

describe('<Filter />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Filter />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "filter-component"', function () {
      expect(component.hasClass('filter-component')).to.equal(true);
    });
  });
});
