import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import List, { DropdownItem } from './list';
import Selector from './selector';

type Props = {
  title: string,
  items: DropdownItem[],
  onItemSelected: (item: DropdownItem) => void
};

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
    setListVisibile(true);
  }, []);

  // On pressed outside
  const onListPressedOutside = useCallback(() => {
    setListVisibile(false);
  }, []);

  return (
    <View>
      <Selector title={text} onPress={onSelectorPressed} />
      <List
        visible={isListVisible}
        items={items}
        onPress={onListItemSelected}
        onDismiss={onListPressedOutside}
      />
    </View>
  );
}

export default DropDown;
