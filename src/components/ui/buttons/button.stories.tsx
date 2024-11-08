import { Meta, StoryObj } from "@storybook/react";
import { LocalIcon } from "src/assets/icons";
import { Button } from "./button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const FilledSm: Story = {
  args: {
    children: "Button",
    variant: "filled",
    size: "sm",
  },
};

export const FilledMd: Story = {
  args: {
    children: "Button",
    variant: "filled",
    size: "md",
  },
};

export const FilledLg: Story = {
  args: {
    children: "Button",
    variant: "filled",
    size: "lg",
  },
};

export const OutlinedSm: Story = {
  args: {
    children: "Button",
    variant: "outlined",
    size: "sm",
  },
};

export const OutlinedMd: Story = {
  args: {
    children: "Button",
    variant: "outlined",
    size: "md",
  },
};

export const OutlinedLg: Story = {
  args: {
    children: "Button",
    variant: "outlined",
    size: "lg",
  },
};

export const Icon: Story = {
  args: {
    children: <LocalIcon iconName="circleInfo" />,
    variant: "ghost",
    size: "icon",
  },
};
