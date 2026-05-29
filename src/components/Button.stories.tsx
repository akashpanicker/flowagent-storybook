import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "neutral", "positive", "warning", "negative"],
    },
    size: { control: "radio", options: ["compact", "small", "medium", "large"] },
    disabled: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const Default: Story = {
  args: { label: "Button", variant: "primary", size: "medium", disabled: false },
};

export const AllVariants: Story = {
  render: () => (
    <div className="p-6 font-sans space-y-8">
      {(["large", "medium", "small", "compact"] as const).map((size) => (
        <div key={size} className="space-y-2">
          <p className="text-caption-12 font-semibold text-neutral-500 uppercase tracking-wide">
            {size}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {(
              ["primary", "secondary", "tertiary", "neutral", "positive", "warning", "negative"] as const
            ).map((v) => (
              <Button key={v} label={cap(v)} variant={v} size={size} />
            ))}
            <Button label="Disabled" variant="primary" size={size} disabled />
          </div>
        </div>
      ))}
    </div>
  ),
};
