import React from 'react';
import { shallow } from 'enzyme';

import App from '../../../src/components/app/App';

describe('App Component', () => {
    it('renders without crashing', () => {
        const app = shallow(<App />);
        
        expect(app.exists()).toBe(true);
    });
});

