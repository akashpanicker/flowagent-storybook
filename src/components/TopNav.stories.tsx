import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TopNav } from "./TopNav";

const meta: Meta<typeof TopNav> = {
  title: "Components/TopNav",
  component: TopNav,
  decorators: [
    (Story) => (
      <div className="bg-neutral-50 p-8 font-sans">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof TopNav>;

const user = {
  initials: "SO",
  name: "Sasha Okafor",
  role: "Product Owner",
};

export const Default: Story = {
  args: {
    breadcrumbs: [{ label: "My Apps", href: "#" }, { label: "Create New App" }],
    user,
  },
};

export const SingleBreadcrumb: Story = {
  args: {
    breadcrumbs: [{ label: "Dashboard" }],
    user,
  },
};

export const DeepBreadcrumbs: Story = {
  args: {
    breadcrumbs: [
      { label: "My Apps", href: "#" },
      { label: "Acme Corp", href: "#" },
      { label: "Workflows", href: "#" },
      { label: "Onboarding", href: "#" },
      { label: "Step 3" },
    ],
    user,
  },
};

export const OverflowBreadcrumbs: Story = {
  args: {
    breadcrumbs: [
      { label: "My Apps", href: "#" },
      { label: "Acme Corp", href: "#" },
      { label: "Workflows", href: "#" },
      { label: "Onboarding", href: "#" },
      { label: "Sequences", href: "#" },
      { label: "Welcome Email", href: "#" },
      { label: "Edit" },
    ],
    user,
  },
};

export const AvatarOnly: Story = {
  args: {
    breadcrumbs: [{ label: "My Apps", href: "#" }, { label: "Create New App" }],
    user: { initials: "SO" },
  },
};

export const WithAvatarImage: Story = {
  args: {
    breadcrumbs: [{ label: "My Apps", href: "#" }, { label: "Create New App" }],
    user: { ...user, avatarSrc: "https://i.pravatar.cc/80?img=12" },
  },
};

export const Showcase: Story = {
  render: () => {
    const rows: { label: string; props: ComponentProps<typeof TopNav> }[] = [
      {
        label: "Default — name + role",
        props: {
          breadcrumbs: [{ label: "My Apps", href: "#" }, { label: "Create New App" }],
          user,
        },
      },
      {
        label: "Single breadcrumb",
        props: { breadcrumbs: [{ label: "Dashboard" }], user },
      },
      {
        label: "Deep breadcrumbs (5)",
        props: {
          breadcrumbs: [
            { label: "My Apps", href: "#" },
            { label: "Acme Corp", href: "#" },
            { label: "Workflows", href: "#" },
            { label: "Onboarding", href: "#" },
            { label: "Step 3" },
          ],
          user,
        },
      },
      {
        label: "Overflow breadcrumbs (7 → collapsed)",
        props: {
          breadcrumbs: [
            { label: "My Apps", href: "#" },
            { label: "Acme Corp", href: "#" },
            { label: "Workflows", href: "#" },
            { label: "Onboarding", href: "#" },
            { label: "Sequences", href: "#" },
            { label: "Welcome Email", href: "#" },
            { label: "Edit" },
          ],
          user,
        },
      },
      {
        label: "Avatar only",
        props: {
          breadcrumbs: [{ label: "My Apps", href: "#" }, { label: "Create New App" }],
          user: { initials: "SO" },
        },
      },
      {
        label: "With avatar image",
        props: {
          breadcrumbs: [{ label: "My Apps", href: "#" }, { label: "Create New App" }],
          user: { ...user, avatarSrc: "https://i.pravatar.cc/80?img=12" },
        },
      },
    ];

    return (
      <div className="flex flex-col gap-6">
        {rows.map((row) => (
          <div key={row.label} className="flex flex-col gap-2">
            <span className="text-caption-12 font-semibold uppercase tracking-wide text-neutral-500">
              {row.label}
            </span>
            <div className="border border-neutral-200">
              <TopNav {...row.props} />
            </div>
          </div>
        ))}
      </div>
    );
  },
};
