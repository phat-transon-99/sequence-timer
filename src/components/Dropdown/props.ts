export type DropdownItem = {
  title: string,
  value: string
};

export type Props = {
  value?: string,
  title: string,
  items: DropdownItem[],
  onItemSelected: (item?: DropdownItem) => void
};
