import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary with 1 expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary
        expenseCount={1}
        expensesTotal={1223}
    />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with 2 expenses correctly', () => {
    const wrapper = shallow(<ExpensesSummary
        expenseCount={2}
        expensesTotal={1255}
    />);
    expect(wrapper).toMatchSnapshot();
});