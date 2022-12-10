import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { DropdownItem, Props } from '../props';
import List from './list';
import Selector from './selector';

function DropDown({ title, items, onItemSelected }: Props): JSX.Element {
  // Show text
  const [text, setText] = useState(title);
  const [isListVisible, setListVisibile] = useState(true);

  // On list item selected
  const onListItemSelected = useCallback((item: DropdownItem) => {
    onItemSelected(item);
    setText(item.title);
    setListVisibile(false);
  }, []);

  // Select pressed
  const onSelectorPressed = useCallback(() => {
    setListVisibile(!isListVisible);
  }, [isListVisible]);

  // On pressed outside
  const onPressedOutside = useCallback(() => {
    setListVisibile(false);
  }, []);

  return (
    <View>
      <Selector title={text} onPress={onSelectorPressed} />
      <List
        visible={isListVisible}
        items={items}
        onPress={onListItemSelected}
        onDismiss={onPressedOutside}
      />
    </View>
  );
}

export default DropDown;
