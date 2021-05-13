import React from 'react';

import Search from './Search';

export default {
  title: 'Search',
  component: Search,
  argTypes: {
    variant: { 
        name: 'variant',
        type: { name: 'string', required: false },
        control: { type: 'string' } 
    },
  },
};

const Template = (args) => <Search {...args} >Search</Search>;

export const Large = Template.bind({});
Large.args = {
  variant: 'large',
  placeholder: 'This is placeholder'
};

export const Small = Template.bind({});
Small.args = {
    variant: 'small',
    placeholder: 'This is placeholder'
}