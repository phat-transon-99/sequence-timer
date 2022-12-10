import React, { useCallback, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';
import { Props } from '../props';

type Item = {
  itemValue: string,
  itemPosition: number
};

export default function NativeDropdown({ items, onItemSelected }: Props): JSX.Element {
  const [selected, setSelected] = useState<Item>();

  const onChosen = useCallback((item: Item) => {
    setSelected(item);
    onItemSelected(items[item.itemPosition]);
  }, [items]);

  return (
    <View>
      <Picker selectedValue={selected} onValueChange={onChosen}>
        {
            items.map(
              (item) => <Picker.Item value={item.value} label={item.title} key={item.value} />,
            )
        }
      </Picker>
    </View>
  );
}
