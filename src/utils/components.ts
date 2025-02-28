import Accordion from '../pages/baseComponents/accordion';
import Alert from '../pages/baseComponents/alert';
import Autocomplete from '../pages/baseComponents/autocomplete';
import Avatar from '../pages/baseComponents/avatar';
import Badge from '../pages/baseComponents/badge';
import Button from '../pages/baseComponents/button';
import Card from '../pages/baseComponents/card';
import ChipClickable from '../pages/baseComponents/chip-clickable';
import ChipSelected from '../pages/baseComponents/chip-selected';
import ChipTag from '../pages/baseComponents/chip-tag';
import Checkbox from '../pages/baseComponents/checkbox';
import Dropdown from '../pages/baseComponents/dropdown';
import Icon from '../pages/baseComponents/icon';
import IconButton from '../pages/baseComponents/icon-button';
import Illustration from '../pages/baseComponents/illustration';
import Image from '../pages/baseComponents/image';
import Input from '../pages/baseComponents/input';
import InputPassword from '../pages/baseComponents/input-password';
import ListRadio from '../pages/baseComponents/list-radio';
import ListCheckbox from '../pages/baseComponents/list-checkbox';
import ListSwitch from '../pages/baseComponents/list-switch';
import LoadingBar from '../pages/baseComponents/loading-bar';
import LoadingPage from '../pages/baseComponents/loading-page';
import LoadingSpinner from '../pages/baseComponents/loading-spinner';
import Navbar from '../pages/baseComponents/navbar';
import RadioButton from '../pages/baseComponents/radio-button';
import Paper from '../pages/baseComponents/paper';
import ProgressBar from '../pages/baseComponents/progress-bar';
import Radio from '../pages/baseComponents/radio';
import Select from '../pages/baseComponents/select';
import SelectChips from '../pages/baseComponents/select-chips';
import SelectOptions from '../pages/baseComponents/select-options';
import Skeleton from '../pages/baseComponents/skeleton';
import Slider from '../pages/baseComponents/slider';
import Switch from '../pages/baseComponents/switch';
import Tooltip from '../pages/baseComponents/tooltip';
import Typo from '../pages/baseComponents/typo';

import Banner from '../pages/teamComponents/banner';
import ChipClickableClose from '../pages/teamComponents/chip-clickable-close';
import Datepicker from '../pages/teamComponents/datepicker';
import InputEditable from '../pages/teamComponents/input-editable';
import InputPhoneNumber from '../pages/teamComponents/input-phone-number';
import Modal from '../pages/teamComponents/modal';
import Pagination from '../pages/teamComponents/pagination';
import Sidebar from '../pages/teamComponents/sidebar';
import Stepper from '../pages/teamComponents/stepper';
import Table from '../pages/teamComponents/table';
import Tabs from '../pages/teamComponents/tabs';
import Toast from '../pages/teamComponents/toast';
import Upload from '../pages/teamComponents/upload';
import Carousel from '../pages/teamComponents/carousel';

export const components = [
  {
    name: 'Base Components',
    path: '/base-components/*',
    pages: [
      {
        name: 'Accordion',
        description:
          'Um accordion é uma lista de cabeçalhos empilhados verticalmente que revelam ou ocultam seções de conteúdo associadas.',
        href: '/base-components/accordion',
        icon: 'file-java-script',
        component: Accordion,
      },
      {
        name: 'Alert',
        description: 'É uma entrada de texto normal aprimorada por um painel de opções sugeridas.',
        href: '/base-components/alert',
        icon: 'file-java-script',
        component: Alert,
      },
      {
        name: 'Autocomplete',
        description: 'É uma entrada de texto normal aprimorada por um painel de opções sugeridas.',
        href: '/base-components/autocomplete',
        icon: 'file-java-script',
        component: Autocomplete,
      },
      {
        name: 'Avatar',
        description: 'São imagens circulares para representar o usuário.',
        href: '/base-components/avatar',
        icon: 'file-java-script',
        component: Avatar,
      },
      {
        name: 'Badge',
        description: 'O badge é um componente usado para prover informação sobre novas atualizações e notificações.',
        href: '/base-components/badge',
        icon: 'file-java-script',
        component: Badge,
      },
      {
        name: 'Button',
        description:
          'O BlipDS inclui vários estilos de botões predefinidos, cada um servindo a seu próprio propósito semântico, com alguns extras adicionados para mais controle.',
        href: '/base-components/button',
        icon: 'file-java-script',
        component: Button,
      },
      {
        name: 'Card',
        description: 'Os cards contêm conteúdo e ações sobre um único assunto.',
        href: '/base-components/card',
        icon: 'file-java-script',
        component: Card,
      },
      {
        name: 'Checkbox',
        description:
          'O checkbox permite que o usuário selecione um ou mais itens de um conjunto. Podem ser usadas para ativar ou desativar uma opção.',
        href: '/base-components/checkbox',
        icon: 'file-java-script',
        component: Checkbox,
      },
      {
        name: 'Chip Clickable',
        description:
          'Os chips são usados para itens que precisam ser rotulados, categorizados ou organizados, usando palavras-chave que os descrevam.',
        href: '/base-components/chip-clickable',
        icon: 'file-java-script',
        component: ChipClickable,
      },
      {
        name: 'Chip Selected',
        description:
          'Os chips são usados para itens que precisam ser rotulados, categorizados ou organizados, usando palavras-chave que os descrevam.',
        href: '/base-components/chip-selected',
        icon: 'file-java-script',
        component: ChipSelected,
      },
      {
        name: 'Chip Tag',
        description:
          'Os chips são usados para itens que precisam ser rotulados, categorizados ou organizados, usando palavras-chave que os descrevam.',
        href: '/base-components/chip-tag',
        icon: 'file-java-script',
        component: ChipTag,
      },
      {
        name: 'Dropdown',
        description:
          'Dropdown são espaços que se abrem abaixo de um componente para habilitar seleções ou listagens de itens',
        href: '/base-components/dropdown',
        icon: 'file-java-script',
        component: Dropdown,
      },
      {
        name: 'Icon',
        description: 'Orientação e sugestões para usar ícones com o BlipDS.',
        href: '/base-components/icon',
        icon: 'file-java-script',
        component: Icon,
      },
      {
        name: 'Icon Button',
        description: 'Um elemento clicável que permite os usuários tomarem ações e decisões com um simples toque.',
        href: '/base-components/icon-button',
        icon: 'file-java-script',
        component: IconButton,
      },
      {
        name: 'Illustration',
        description: 'Componente disponível para uso de ilustrações em código, sem exportação ou upload de imagens.',
        href: '/base-components/illustration',
        icon: 'file-java-script',
        component: Illustration,
      },
      {
        name: 'Image',
        description: 'Um componente para exibir imagens com suporte a carregamento assíncrono e tratamento de erros.',
        href: '/base-components/image',
        icon: 'file-java-script',
        component: Image,
      },
      {
        name: 'Input',
        description: 'Os inputs são usados para que os usuários insiram e editem textos.',
        href: '/base-components/input',
        icon: 'file-java-script',
        component: Input,
      },
      {
        name: 'Input Password',
        description: 'Os inputs são usados para que os usuários insiram e editem textos.',
        href: '/base-components/input-password',
        icon: 'file-java-script',
        component: InputPassword,
      },
      {
        name: 'List Checkbox',
        description: 'As listas são índices verticais contínuos de texto e outros elementos.',
        href: '/base-components/list-checkbox',
        icon: 'file-java-script',
        component: ListCheckbox,
      },
      {
        name: 'List Radio',
        description: 'As listas são índices verticais contínuos de texto e outros elementos.',
        href: '/base-components/list-radio',
        icon: 'file-java-script',
        component: ListRadio,
      },
      {
        name: 'List Switch',
        description: 'As listas são índices verticais contínuos de texto e outros elementos.',
        href: '/base-components/list-switch',
        icon: 'file-java-script',
        component: ListSwitch,
      },
      {
        name: 'Loading Bar',
        description: 'Uma barra horizontal que indica o progresso da atividade realizada.',
        href: '/base-components/loading-bar',
        icon: 'file-java-script',
        component: LoadingBar,
      },
      {
        name: 'Loading Page',
        description: 'O componente de loading ajuda a notificar o usuário que o carregamento está em andamento.',
        href: '/base-components/loading-page',
        icon: 'file-java-script',
        component: LoadingPage,
      },
      {
        name: 'Loading Spinner',
        description: 'O componente de loading ajuda a notificar o usuário que o carregamento está em andamento.',
        href: '/base-components/loading-spinner',
        icon: 'file-java-script',
        component: LoadingSpinner,
      },
      {
        name: 'Navbar',
        description:
          'Utilize para possibilitar ao usuário acessar funcionalidades de um produto que não necessariamente são relacionadas a um mesmo contexto.',
        href: '/base-components/navbar',
        icon: 'file-java-script',
        component: Navbar,
      },
      {
        name: 'Paper',
        description: 'No BlipDS as propriedades físicas de um papel são traduzidas para a tela.',
        href: '/base-components/paper',
        icon: 'file-java-script',
        component: Paper,
      },
      {
        name: 'Progress Bar',
        description: 'Um progress bar mostra a quantidade de um processo.',
        href: '/base-components/progress-bar',
        icon: 'file-java-script',
        component: ProgressBar,
      },
      {
        name: 'Radio Button',
        description: 'Os botões de opção permitem que o usuário selecione uma opção de um conjunto.',
        href: '/base-components/radio-button',
        icon: 'file-java-script',
        component: RadioButton,
      },
      {
        name: 'Radio',
        description: 'Os botões de opção permitem que o usuário selecione uma opção de um conjunto.',
        href: '/base-components/radio',
        icon: 'file-java-script',
        component: Radio,
      },
      {
        name: 'Select ',
        description:
          'Os componentes de select são usados ​​para coletar informações fornecidas pelo usuário em uma lista de opções.',
        href: '/base-components/select ',
        icon: 'file-java-script',
        component: Select,
      },
      {
        name: 'Select Chips',
        description:
          'Os componentes de select são usados ​​para coletar informações fornecidas pelo usuário em uma lista de opções.',
        href: '/base-components/select-chips',
        icon: 'file-java-script',
        component: SelectChips,
      },
      {
        name: 'Select Options',
        description:
          'Os componentes de select são usados ​​para coletar informações fornecidas pelo usuário em uma lista de opções.',
        href: '/base-components/select-options',
        icon: 'file-java-script',
        component: SelectOptions,
      },
      {
        name: 'Skeleton',
        description:
          'O componente Skeleton comunica que os dados em determinados elementos da tela estão sendo carregados e que a tela não está congelada.',
        href: '/base-components/skeleton',
        icon: 'file-java-script',
        component: Skeleton,
      },
      {
        name: 'Slider',
        description: 'O componente slider permite que o usuário faça seleções a partir de um intervalo de valores.',
        href: '/base-components/slider',
        icon: 'file-java-script',
        component: Slider,
      },
      {
        name: 'Switch',
        description:
          'A opção que o interruptor controla, juntamente com o estado atual, deve ser claramente explícita no rótulo em linha correspondente.',
        href: '/base-components/switch',
        icon: 'file-java-script',
        component: Switch,
      },
      {
        name: 'Tooltip',
        description: 'Exibem texto informativo quando os usuários passam o mouse, focalizam ou tocam em um elemento.',
        href: '/base-components/tooltip',
        icon: 'file-java-script',
        component: Tooltip,
      },
      {
        name: 'Typo',
        description:
          'O BlipDS inclui uma variedade de escalas e tipos de textos que atendem as necessidades do produto.',
        href: '/base-components/typo',
        icon: 'file-java-script',
        component: Typo,
      },
    ],
  },
  {
    name: 'Team Components',
    path: '/team-components/*',
    pages: [
      {
        name: 'Banner',
        description: 'É uma entrada de texto normal aprimorada por um painel de opções sugeridas.',
        href: '/team-components/banner',
        icon: 'file-java-script',
        component: Banner,
      },
      {
        name: 'Carousel',
        description:
          'Um componente de carrossel é um elemento de interface usados para exibir conteúdo variado de maneira dinâmica. ',
        href: '/team-components/carousel',
        icon: 'file-java-script',
        component: Carousel,
      },
      {
        name: 'Chip Clickable',
        description:
          'Os chips são usados para itens que precisam ser rotulados, categorizados ou organizados, usando palavras-chave que os descrevam.',
        href: '/team-components/chipclickable',
        icon: 'file-java-script',
        component: ChipClickableClose,
      },
      {
        name: 'Datepicker',
        description: 'O Date Picker permitem que os usuários selecionem uma data ou um intervalo de datas.',
        href: '/team-components/datepicker',
        icon: 'file-java-script',
        component: Datepicker,
      },
      {
        name: 'Input Editable',
        description: 'Os inputs são usados para que os usuários insiram e editem textos.',
        href: '/team-components/input-editable',
        icon: 'file-java-script',
        component: InputEditable,
      },
      {
        name: 'Input Phone Number',
        description: 'Os inputs são usados para que os usuários insiram e editem textos.',
        href: '/team-components/input-phone-number',
        icon: 'file-java-script',
        component: InputPhoneNumber,
      },
      {
        name: 'Modal',
        description:
          'Um modal é um tipo de janela que aparece na frente do conteúdo do aplicativo para fornecer informações críticas ou solicitar uma decisão.',
        href: '/team-components/modal',
        icon: 'file-java-script',
        component: Modal,
      },
      {
        name: 'Pagination',
        description:
          'O componente Pagination oferece aos usuários a capacidade de selecionar facilmente uma página específica dentro de um intervalo de páginas, proporcionando uma navegação intuitiva e eficiente.',
        href: '/team-components/pagination',
        icon: 'file-java-script',
        component: Pagination,
      },
      {
        name: 'Sidebar',
        description:
          'É uma caixa deslizante alternável de posição fixa, que pode ser usada para navegação, menus, detalhes, etc.',
        href: '/team-components/sidebar',
        icon: 'file-java-script',
        component: Sidebar,
      },
      {
        name: 'Stepper',
        description: 'Steppers transmitem o progresso por meio de etapas numeradas',
        href: '/team-components/stepper',
        icon: 'file-java-script',
        component: Stepper,
      },
      {
        name: 'Table',
        description: 'Use para listar ou editar conteúdos com muitas informações agregadas.',
        href: '/team-components/table',
        icon: 'file-java-script',
        component: Table,
      },
      {
        name: 'Tabs',
        description: 'As Tabs organizam o conteúdo em diferentes telas, conjuntos de dados e outras interações.',
        href: '/team-components/tabs',
        icon: 'file-java-script',
        component: Tabs,
      },
      {
        name: 'Toast',
        description: 'São mensagens temporárias com informações contextuais que aparecem no canto inferior da tela.',
        href: '/team-components/toast',
        icon: 'file-java-script',
        component: Toast,
      },
      {
        name: 'Upload',
        description: 'O upload permite que os usuários selecionem arquivos e enviem para o destino pré-configurado.',
        href: '/team-components/upload',
        icon: 'file-java-script',
        component: Upload,
      },
    ],
  },
];
