
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';
import Center from '../Center/Center';
 // Ensure this is correctly imported from your project

export default {
  title: 'Form/Button',
  component: Button,
  decorators: [(Story) => <Center><Story /></Center>],
} as Meta;

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

Primary.storyName = 'Primary main';

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: 'primary',
  children: 'Primary Args',
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: 'secondary',
  children: 'Secondary Args',
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  children: 'Long Primary Args',
};
