import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "neutral", "positive", "warning", "negative"],
    },
    style: { control: "select", options: ["subtle", "bold", "outline"] },
    size: { control: "radio", options: ["small", "medium"] },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { label: "Badge", variant: "primary", style: "subtle", size: "medium" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 justify-items-start gap-3 p-6 font-sans">
      {(["primary", "neutral", "positive", "warning", "negative"] as const).map((v) =>
        (["subtle", "bold", "outline"] as const).map((s) => (
          <Badge key={`${v}-${s}`} label={`${v} ${s}`} variant={v} style={s} />
        ))
      )}
    </div>
  ),
};
