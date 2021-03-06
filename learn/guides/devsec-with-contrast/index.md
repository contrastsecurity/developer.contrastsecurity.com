---
sidebar_position: 1
title: Where Do I Start?
hide_table_of_contents: true
---

import Link from '@docusaurus/Link'
export const frameworks = [
  { name: 'Java', logo: '/img/libraries/java.png', href: '/docs/getting-started/tutorial-java/securing-build-time' },
  { name: '.NET', logo: '/img/libraries/dotnet.png', href: '/docs/getting-started/tutorial-dotnet/dotnet' },
  { name: '.NET Core', logo: '/img/libraries/dotnet-core.png', href: '/docs/getting-started/tutorial-dotnet/dotnet-core' },
  { name: 'Ruby', logo: '/img/libraries/ruby.png', href: '/docs/getting-started/tutorial-ruby/index' },
  { name: 'Python', logo: '/img/libraries/python.png', href: '/docs/getting-started/tutorial-python/index' },
  { name: 'Node JS', logo: '/img/libraries/node.png', href: '/docs/getting-started/tutorial-node/index' },
  { name: 'Go', logo: '/img/libraries/go.png', href: '/docs/getting-started/tutorial-golang/index' },
  { name: 'AppSec Team', logo: '/img/libraries/appsec.png', href: '/docs/getting-started/security-teams/index' },
]

Shift security left by starting in your IDE or build pipeline. By continuously looking for security flaws across your build, you can automate many security tasks and avoid unplanned work.

![diagram](where-do-i-start.svg)

At the end of this setup, you will have automated tools that check your code and libraries for security defects. Results will appear locally and pass through a service that supports your IDE and other workflow tools.

![Architecture](./how-it-works/how-it-works.png)

## 1. Set Up Your Free Account

The free [Contrast Community Edition Account](https://www.contrastsecurity.com/contrast-community-edition) will set you up to start tracking results.

If your organization has a commercial Contrast subscription should log in to your Contrast tenant.

## 2. Choose Your language

If you work with different languages, start with the one you use the most.

<div className="container" style={{}}>
  <div className="row is-multiline">
    {frameworks.map((x) => (
      <div key={x.name} className="col col--3">
        <Link className="card" to={x.href}>
          <div className="card__body" style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            {x.logo && (
              <img src={x.logo} alt={x.name} width="64" style={{ display: 'block', maxHeight: 64 }} />
            )}
            <p>{x.name}</p>
          </div>
        </Link>
      </div>
    ))}
  </div>
</div>
