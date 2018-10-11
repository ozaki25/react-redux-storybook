import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '.';

const stories = storiesOf('atoms/Button', module);

stories.addParameters({ info: { text: 'ボタンコンポーネント' } });

stories.add('通常パターン', () => (
  <Button onClick={action('click')}>{text('label', 'ボタン')}</Button>
));

stories.add('非活性', () => (
  <Button onClick={action('click')} disabled>
    {text('label', 'ボタン')}
  </Button>
));

stories.add('幅広パターン', () => (
  <Button onClick={action('click')} wide>
    {text('label', 'ボタン')}
  </Button>
));

stories.add('幅広非活性', () => (
  <Button onClick={action('click')} wide disabled>
    {text('label', 'ボタン')}
  </Button>
));
