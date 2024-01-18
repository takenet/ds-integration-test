export interface Props {
  title?: string;
  navigation?: Navigation[];
  isOpen?: boolean;
}

export interface Navigation {
  name?: string;
  href?: any;
  icon?: string;
}
