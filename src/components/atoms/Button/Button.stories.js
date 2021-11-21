import { Button } from './Button';
import { ReactComponent as PlusIcon } from 'assets/plus-square.svg';
import { ReactComponent as ShareIcon } from 'assets/share.svg';
import { ReactComponent as PlayIcon } from 'assets/play.svg';
import { ReactComponent as ReadIcon } from 'assets/text.svg';

const ButtonStory = {
  title: 'Atoms/Button',
  component: Button,

  argTypes: {},
};

export default ButtonStory;

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'CREATE',
  isBig: false,
  isPrimary: true,
};

const AddTemplate = (args) => (
  <Button {...args}>
    <PlusIcon />
  </Button>
);

export const Add = AddTemplate.bind({});

Add.args = {
  label: 'ADD NEW MESSAGE',
  isBig: false,
  isPrimary: true,
};

const ShareTemplate = (args) => (
  <Button {...args}>
    <ShareIcon />
  </Button>
);

export const Share = ShareTemplate.bind({});

Share.args = {
  label: 'SHARE THIS BOARD',
  isBig: true,
  isPrimary: true,
};

const PlayTemplate = (args) => (
  <Button {...args}>
    <PlayIcon />
  </Button>
);

export const Play = PlayTemplate.bind({});

Play.args = {
  label: 'PLAY',
  isBig: true,
  isPrimary: false,
};

const ReadTemplate = (args) => (
  <Button {...args}>
    <ReadIcon />
  </Button>
);

export const Read = ReadTemplate.bind({});

Read.args = {
  label: 'READ',
  isBig: true,
  isPrimary: true,
};
