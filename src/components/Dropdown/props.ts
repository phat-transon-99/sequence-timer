export type DropdownItem = {
  title: string,
  value: string
};

export type Props = {
  title: string,
  items: DropdownItem[],
  onItemSelected: (item?: DropdownItem) => void
};
