import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Title from '.';

const stories = storiesOf('atoms/Title', module);

stories.add('通常パターン', () => <Title>{text('text', 'タイトル')}</Title>);
