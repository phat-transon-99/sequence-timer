import React, { useCallback, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';
import { Props } from '../props';

export default function NativeDropdown({ value, items, onItemSelected }: Props): JSX.Element {
  const [selected, setSelected] = useState<string | undefined>(value);

  const onChosen = useCallback((item: string) => {
    setSelected(item);
    onItemSelected(items.find((entry) => entry.value === item));
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
