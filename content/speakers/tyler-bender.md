---
description: How much do you know about the npm package you're about to install? Do you trust the author? Tyler and his team are working on tools to help developers answer these questions, streamlining the process of monitoring your dependencies
title: Package Reputation Tracking
track: a
speakers:
- avatar: /img/speakers/tyler-bender.jpg
  github:
  glitch:
  name: Tyler Bender
  twitter:
  url:
visible: true
---

The Javascript ecosystem and npm in particular have taken code re-use and open source software to new levels. It is easier than ever before to look up a library that addresses a problem you're facing, and incorporate it into your solution. The question is - just how much do you know about this code that you're integrating into your product? Do you trust the unknown author of this convenience library? Are you confident that they use a strong password for their npm account, and that it won't be compromised by a malicious actor in the future? Do you download and inspect the package’s tarball, or can you trust that it matches the code hosted on GitHub? Why did the install script change on that statistics package that has been untouched for three years?

Our team is working on tools to help developers answer these questions. In an ideal world, a member of your team would review every line of code from each of your dependencies to make sure it is safe. Performing that review for each (package, version) tuple of every one of your dependencies would be a massive undertaking, and not feasible for most teams. It is also likely that popular packages like React receive much more attention and need not be treated within the same scrutiny as less widely-used packages. We started tackling these problems by building processes into our CI/CD pipeline that gather signals on each of our dependencies - how often they’re downloaded, updated, forked, and so on - and looking for suspect code changes. This has already helped us steer our developers away from unmaintained libraries and introducing duplicated functionality. We are now working to take these ideas further as an open source project that streamlines the process of monitoring of your organization’s dependencies, maintaining white and blacklists, and reviewing changes between dependency versions - and to bring that functionality to the community.
