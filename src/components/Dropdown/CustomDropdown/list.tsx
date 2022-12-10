import React from 'react';
import {
  FlatList, Text, TouchableOpacity, View,
} from 'react-native';
import { CustomFontText } from '../../Text';
import styles from './list.style';
import { DropdownItem } from '../props';

type ListProps = {
  visible: boolean,
  items: DropdownItem[],
  onPress: (item: DropdownItem) => void
  onDismiss: () => void
};

type ListItemProps = {
  item: DropdownItem,
  onPress: () => void;
};

function ListItem({ item, onPress }: ListItemProps): JSX.Element {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      <CustomFontText>
        <Text style={styles.listItemText}>{ item.title }</Text>
      </CustomFontText>
    </TouchableOpacity>
  );
}

function List({
  visible, items, onPress, onDismiss,
}: ListProps): JSX.Element | null {
  return (
    visible
      ? (
        <View style={styles.container}>
          <TouchableOpacity style={styles.listWrapper} onPress={onDismiss}>
            <FlatList
              contentContainerStyle={styles.list}
              data={items}
              renderItem={(entry) => (
                <ListItem
                  item={entry.item}
                  onPress={() => onPress(entry.item)}
                />
              )}
              keyExtractor={(item) => item.value}
            />
          </TouchableOpacity>
        </View>
      )
      : null
  );
}

export default List;
