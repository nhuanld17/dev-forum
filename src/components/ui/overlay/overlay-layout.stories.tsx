import { Meta, StoryObj } from "@storybook/react";
import { OverlayLayout } from "./overlay-layout";

const meta = {
  component: OverlayLayout,
} satisfies Meta<typeof OverlayLayout>;

export default meta;
type Story = StoryObj<typeof OverlayLayout>;

export const Default: Story = {};
