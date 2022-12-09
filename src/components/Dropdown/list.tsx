import React from 'react';
import {
  FlatList, Modal, Text, TouchableOpacity, Animated,
} from 'react-native';
import { CustomFontText } from '../Text';
import styles from './list.style';

type ListProps = {
  visible: boolean,
  items: string[],
  onPress: (item: string) => void
  onDismiss: () => void
};

type ListItemProps = {
  item: string,
  onPress: () => void;
};

function ListItem({ item, onPress }: ListItemProps): JSX.Element {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      <CustomFontText>
        <Text style={styles.listItemText}>{ item }</Text>
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
        <Animated.View style={styles.list}>
          <FlatList
            data={items}
            renderItem={(entry) => (
              <ListItem
                item={entry.item}
                key={entry.item}
                onPress={() => onPress(entry.item)}
              />
            )}
          />
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
}

export default List;
