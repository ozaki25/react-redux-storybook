import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import COMPONENT_NAME from '.';

const stories = storiesOf('atoms/COMPONENT_NAME', module);

stories.add('COMPONENT_NAME', () => (
  <COMPONENT_NAME onClick={action('click')}>{text('text', 'text')}</COMPONENT_NAME>
));
