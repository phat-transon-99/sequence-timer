import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import List from './list';
import Selector from './selector';

type Props = {
  title: string,
  items: string[],
};

function DropDown({ title, items }: Props): JSX.Element {
  // Show text
  const [text, setText] = useState(title);
  const [isListVisible, setListVisibile] = useState(true);

  // On list item selected
  const onListItemSelected = useCallback((item: string) => {
    setText(item);
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
