import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from 'src/components/atoms/Button';
import Table from '.';

const stories = storiesOf('molecules/Table', module);

const editButton = <Button onClick={action('edit')}>編集</Button>;
const removeButton = <Button onClick={action('remove')}>削除</Button>;

const header = ['チーム', '名前', 'ポジション', '', ''];
const body = [
  ['エンゼルス', '大谷翔平', '投手', editButton, removeButton],
  ['日本ハム', '中田翔', '一塁手', editButton, removeButton],
  ['カブス', 'ダルビッシュ有', '投手', editButton, removeButton],
];

stories.add('ボタン付き', () => <Table header={header} body={body} />);
