import { Toast } from "./toast";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof Toast>;

export const Information: Story = {
    args: {
        title: "This is title",
        message: "This is an information message",
        type: "info",
        onDismiss: () => { },
    },
};

export const Success: Story = {
    args: {
        title: "This is title",
        message: "This is a success message",
        type: "success",
        onDismiss: () => { },
    },
};

export const Warning: Story = {
    args: {
        title: "This is title",
        message: "This is a warning message",
        type: "warning",
        onDismiss: () => { },
    },
};

export const Error: Story = {
    args: {
        title: "This is title",
        message: "This is an error message",
        type: "error",
        onDismiss: () => { },
    },
};

