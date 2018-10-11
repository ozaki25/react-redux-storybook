import React from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from '.';

const stories = storiesOf('atoms/TextInput', module);

stories.addParameters({ info: { text: '入力域コンポーネント' } });

stories.add('通常パターン', () => <TextInput />);
