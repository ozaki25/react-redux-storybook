import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Table from '.';

const stories = storiesOf('molecules/Table', module);

const header = ['チーム', '名前', 'ポジション'];
const body = [
  ['エンゼルス', '大谷翔平', '投手'],
  ['日本ハム', '中田翔', '一塁手'],
  ['カブス', 'ダルビッシュ有', '投手'],
];

stories.add('Table', () => <Table header={header} body={body} />);
