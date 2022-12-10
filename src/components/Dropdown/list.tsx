import React from 'react';
import {
  FlatList, Modal, Text, TouchableOpacity, View,
} from 'react-native';
import { CustomFontText } from '../Text';
import styles from './list.style';

export type DropdownItem = {
  title: string,
  value: string
};

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
}: ListProps): JSX.Element {
  return (
    <Modal transparent visible={visible}>
      <TouchableOpacity style={styles.overlay} onPress={onDismiss} activeOpacity={1}>
        <View style={styles.list}>
          <FlatList
            data={items}
            renderItem={(entry) => (
              <ListItem
                item={entry.item}
                onPress={() => onPress(entry.item)}
              />
            )}
            keyExtractor={(item) => item.value}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

export default List;
