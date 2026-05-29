type Breadcrumb = { label: string; href?: string };

type TopNavUser = {
  initials: string;
  name?: string;
  role?: string;
  avatarSrc?: string;
};

type TopNavProps = {
  logoSrc?: string;
  breadcrumbs: Breadcrumb[];
  user: TopNavUser;
};

type DisplayCrumb = Breadcrumb & { ellipsis?: boolean };

// Collapse to first 1 + … + last 2 when more than 5 items are passed.
function collapseCrumbs(items: Breadcrumb[]): DisplayCrumb[] {
  if (items.length <= 5) return items;
  return [
    items[0],
    { label: "…", ellipsis: true },
    items[items.length - 2],
    items[items.length - 1],
  ];
}

export function TopNav({ logoSrc, breadcrumbs, user }: TopNavProps) {
  const crumbs = collapseCrumbs(breadcrumbs);

  return (
    <header className="flex h-14 w-full items-center border-b border-brand-dark-blue-20 bg-neutral-white px-8 font-sans">
      {/* Left: wordmark stacked above breadcrumb trail */}
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5">
        {logoSrc ? (
          <img src={logoSrc} alt="FlowAgent" className="h-6 w-auto" />
        ) : (
          <span className="text-body-16 font-semibold text-brand-dark-blue">
            FlowAgent
          </span>
        )}

        <nav className="flex items-center gap-2" aria-label="Breadcrumb">
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="text-body-13 text-brand-dark-blue-70">/</span>
                )}
                {crumb.ellipsis ? (
                  <span className="text-body-13 text-brand-dark-blue-70">
                    {crumb.label}
                  </span>
                ) : isLast ? (
                  <span
                    className="text-body-13 text-brand-dark-blue-70"
                    aria-current="page"
                  >
                    {crumb.label}
                  </span>
                ) : crumb.href ? (
                  <a
                    href={crumb.href}
                    className="text-body-13 text-brand-bright-blue underline"
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-body-13 text-brand-dark-blue-70">
                    {crumb.label}
                  </span>
                )}
              </span>
            );
          })}
        </nav>
      </div>

      {/* Right: avatar + optional name/role */}
      <div className="flex shrink-0 items-center gap-2">
        {user.avatarSrc ? (
          <img
            src={user.avatarSrc}
            alt={user.name ?? "User avatar"}
            className="size-10 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-bright-blue/10">
            <span className="text-caption-12 font-semibold text-brand-bright-blue-dark">
              {user.initials}
            </span>
          </div>
        )}

        {user.name && (
          <div className="flex flex-col whitespace-nowrap">
            <span className="text-body-14 font-semibold text-neutral-900">
              {user.name}
            </span>
            {user.role && (
              <span className="text-caption-12 text-neutral-500">{user.role}</span>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
