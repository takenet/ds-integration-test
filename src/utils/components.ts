import Alert from '../pages/baseComponents/alert';
import Autocomplete from '../pages/baseComponents/autocomplete';
import Avatar from '../pages/baseComponents/avatar';
import Button from '../pages/baseComponents/button';
import ChipClickable from '../pages/baseComponents/chip-clickable';
import ChipSelected from '../pages/baseComponents/chip-selected';
import ChipTag from '../pages/baseComponents/chip-tag';
import Checkbox from '../pages/baseComponents/checkbox';
import Icon from '../pages/baseComponents/icon';
import Illustration from '../pages/baseComponents/illustration';
import Input from '../pages/baseComponents/input';
import InputPassword from '../pages/baseComponents/input-password';
import ListRadio from '../pages/baseComponents/list-radio';
import ListCheckbox from '../pages/baseComponents/list-checkbox';
import ListSwitch from '../pages/baseComponents/list-switch';
import RadioButton from '../pages/baseComponents/radio-button';
import Paper from '../pages/baseComponents/paper';
import ProgressBar from '../pages/baseComponents/progress-bar';
import Radio from '../pages/baseComponents/radio';
import Select from '../pages/baseComponents/select';
import SelectChips from '../pages/baseComponents/select-chips';
import Switch from '../pages/baseComponents/switch';
import Tooltip from '../pages/baseComponents/tooltip';
import Typo from '../pages/baseComponents/typo';
import IconButton from '../pages/baseComponents/icon-button';
import LoadingBar from '../pages/baseComponents/loading-bar';
import LoadingPage from '../pages/baseComponents/loading-page';
import LoadingSpinner from '../pages/baseComponents/loading-spinner';
import SelectOptions from '../pages/baseComponents/select-options';

import Banner from '../pages/teamComponents/banner';
import ChipClickableClose from '../pages/teamComponents/chip-clickable-close';
import Datepicker from '../pages/teamComponents/datepicker';
import InputEditable from '../pages/teamComponents/input-editable';
import InputPhoneNumber from '../pages/teamComponents/input-phone-number';
import Modal from '../pages/teamComponents/modal';
import Pagination from '../pages/teamComponents/pagination';
import Sidebar from '../pages/teamComponents/sidebar';
import Stepper from '../pages/teamComponents/stepper';
import Tabs from '../pages/teamComponents/tabs';
import Toast from '../pages/teamComponents/toast';

export const components = [
    {
      name: 'Base Components',
      path: '/base-components/*',
      pages: [
        { name: 'Alert', href: '/base-components/alert', icon: 'file-java-script', component: Alert },
        { name: 'Autocomplete', href: '/base-components/autocomplete', icon: 'file-java-script', component: Autocomplete },
        { name: 'Avatar', href: '/base-components/avatar', icon: 'file-java-script', component: Avatar },
        { name: 'Button', href: '/base-components/button', icon: 'file-java-script', component: Button },
        { name: 'Checkbox', href: '/base-components/checkbox', icon: 'file-java-script', component: Checkbox },
        { name: 'Chip Clickable', href: '/base-components/chip-clickable', icon: 'file-java-script', component: ChipClickable },
        { name: 'Chip Selected', href: '/base-components/chip-selected', icon: 'file-java-script', component: ChipSelected },
        { name: 'Chip Tag', href: '/base-components/chip-tag', icon: 'file-java-script', component: ChipTag },
        { name: 'Icon', href: '/base-components/icon', icon: 'file-java-script', component: Icon },
        { name: 'Icon Button', href: '/base-components/icon-button', icon: 'file-java-script', component: IconButton },
        { name: 'Illustration', href: '/base-components/illustration', icon: 'file-java-script', component: Illustration },
        { name: 'Input', href: '/base-components/input', icon: 'file-java-script', component: Input },
        { name: 'Input Password', href: '/base-components/input-password', icon: 'file-java-script', component: InputPassword },
        { name: 'List Checkbox', href: '/base-components/list-checkbox', icon: 'file-java-script', component: ListCheckbox },
        { name: 'List Radio', href: '/base-components/list-radio', icon: 'file-java-script', component: ListRadio },
        { name: 'List Switch', href: '/base-components/list-switch', icon: 'file-java-script', component: ListSwitch },
        { name: 'Loading Bar', href: '/base-components/loading-bar', icon: 'file-java-script', component: LoadingBar },
        { name: 'Loading Page', href: '/base-components/loading-page', icon: 'file-java-script', component: LoadingPage },
        { name: 'Loading Spinner', href: '/base-components/loading-spinner', icon: 'file-java-script', component: LoadingSpinner },
        { name: 'Paper', href: '/base-components/paper', icon: 'file-java-script', component: Paper },
        { name: 'Progress Bar', href: '/base-components/progress-bar', icon: 'file-java-script', component: ProgressBar },
        { name: 'Radio Button', href: '/base-components/radio-button', icon: 'file-java-script', component: RadioButton },
        { name: 'Radio', href: '/base-components/radio', icon: 'file-java-script', component: Radio },
        { name: 'Select ', href: '/base-components/select ', icon: 'file-java-script', component: Select },
        { name: 'Select Chips', href: '/base-components/select-chips', icon: 'file-java-script', component: SelectChips },
        { name: 'Select Options', href: '/base-components/select-options', icon: 'file-java-script', component: SelectOptions },
        { name: 'Switch', href: '/base-components/switch', icon: 'file-java-script', component: Switch },
        { name: 'Tooltip', href: '/base-components/tooltip', icon: 'file-java-script', component: Tooltip },
        { name: 'Typo', href: '/base-components/typo', icon: 'file-java-script', component: Typo },
      ],
    },
    {
      name: 'Team Components',
      path: '/team-components/*',
      pages: [
        { name: 'Banner', href: '/team-components/banner', icon: 'file-java-script', component: Banner },
        { name: 'Chip Clickable', href: '/team-components/chipclickable', icon: 'file-java-script', component: ChipClickableClose },
        { name: 'Datepicker', href: '/team-components/datepicker', icon: 'file-java-script', component: Datepicker },
        { name: 'Input Editable', href: '/team-components/input-editable', icon: 'file-java-script', component: InputEditable },
        { name: 'Input Phone Number', href: '/team-components/input-phone-number', icon: 'file-java-script', component: InputPhoneNumber },
        { name: 'Modal', href: '/team-components/modal', icon: 'file-java-script', component: Modal },
        { name: 'Pagination', href: '/team-components/pagination', icon: 'file-java-script', component: Pagination },
        { name: 'Sidebar', href: '/team-components/sidebar', icon: 'file-java-script', component: Sidebar },
        { name: 'Stepper', href: '/team-components/stepper', icon: 'file-java-script', component: Stepper },
        { name: 'Tabs', href: '/team-components/tabs', icon: 'file-java-script', component: Tabs },
        { name: 'Toast', href: '/team-components/toast', icon: 'file-java-script', component: Toast },
      ],
    },
  ];