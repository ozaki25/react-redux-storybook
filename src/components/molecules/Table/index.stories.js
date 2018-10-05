import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'src/components/atoms/Button';
import Table from '.';

const stories = storiesOf('molecules/Table', module);

const editButton = <Button>編集</Button>;
const removeButton = <Button>削除</Button>;
const header = ['チーム', '名前', 'ポジション', '', ''];
const body = [
  ['エンゼルス', '大谷翔平', '投手', editButton, removeButton],
  ['日本ハム', '中田翔', '一塁手', editButton, removeButton],
  ['カブス', 'ダルビッシュ有', '投手', editButton, removeButton],
];

stories.add('Table', () => <Table header={header} body={body} />);
