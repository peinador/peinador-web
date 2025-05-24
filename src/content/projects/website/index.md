---
title: "My Website"
description: "A detailed explanation of how I built this website, from framework selection to hosting decisions."
date: "May 18 2025"
repoURL: "https://github.com/peinador/peinador-web"
---

Building a personal website is a rewarding process, offering a space to share ideas, projects, or simply a digital presence. This document outlines the key decisions and technologies that went into creating this website, from the underlying framework to the hosting solution.

## Framework

When embarking on this project, the choice of a web framework was paramount. I aimed for a solution that offered both performance and flexibility, allowing for future expansion and dynamic features.

* This website uses the [Astro framework](https://astro.build/). Astro is a modern, all-in-one web framework designed for building fast, content-focused websites. Its unique "island architecture" allows you to ship zero JavaScript by default, only hydrating interactive components when they are needed. This approach significantly improves loading times and overall performance, making for a snappier user experience. Astro supports popular UI frameworks like React, Vue, Svelte, and Lit, enabling developers to use their preferred tools while still benefiting from Astro's performance optimizations.

* Another strong contender I considered was [Hugo](https://gohugo.io/). Hugo is a static site generator written in Go, renowned for its incredible build speeds. While it's an excellent choice for purely static content, my decision ultimately leaned towards Astro for several reasons:

  * **Ease of Getting Started:** Hugo often boasts a quicker initial setup for simple static sites. Its convention-over-configuration approach can get you up and running rapidly. However, as projects grow in complexity or require more custom logic, Astro's flexibility becomes a significant advantage. It's also wroth mentioning that both tools offer head starts using ready-made templates.

  * **Technology Stack:** Hugo is built with Go, whereas Astro leverages TypeScript and can integrate seamlessly with React (among other frameworks). My primary motivation for this project included a desire to deepen my understanding of TypeScript and gain more hands-on experience with React. Astro provided the perfect environment to achieve these learning goals.

  * **Flexibility and Interactivity:** Astro offers superior flexibility. While this site is largely static, Astro's architecture allows for the seamless integration of interactive "islands" built with React, Vue, or other UI frameworks. This means I can easily add dynamic components, client-side functionality, or even entirely dynamic sections to the website in the future without rebuilding the entire stack. This potential for growth and enhanced interactivity was a major deciding factor.

## Hosting

The choice of hosting significantly impacts a website's performance, scalability, and maintenance. I explored a few options before settling on the optimal solution for this project.

* Initially, I considered self-hosting the website on a Raspberry Pi. This option appealed to me for the control it offered and the satisfaction of running my own server.

  * However, the Raspberry Pi, while versatile, is not designed for high-traffic web serving. Its limited processing power and network bandwidth could become a bottleneck, potentially impacting performance and scalability if the website were to experience a surge in visitors.

  * One mitigation strategy for a self-hosted static site would be to leverage a Content Delivery Network (CDN) like Cloudflare. Cloudflare can cache static assets globally, meaning most client requests would be served directly from Cloudflare's edge network rather than hitting my Raspberry Pi. This would significantly reduce the load on the Pi and improve delivery speeds for users worldwide.

* Despite the benefits of caching with Cloudflare, a more straightforward and ultimately superior option emerged: directly hosting the website on Cloudflare Pages.

  * **Enhanced Scalability:** Cloudflare Pages is built on Cloudflare's robust global network, providing inherent scalability. It can effortlessly handle varying levels of traffic, from a few visitors to millions, without any intervention on my part. This eliminates the concerns about the Raspberry Pi's capacity.

  * **Cost-Effectiveness:** Cloudflare Pages offers a generous free tier that is more than sufficient for a personal website like this. In fact, when factoring in electricity consumption, maintenance, and the initial cost of the Raspberry Pi and its accessories, Cloudflare Pages proved to be a more cost-effective solution than continuous self-hosting.

  * **Streamlined Deployment:** One of the most compelling advantages of Cloudflare Pages is its seamless integration with Git repositories (like GitHub). I was able to connect the deployment process directly to this website's GitHub repository. This means that every time I commit and push changes to the main branch, Cloudflare Pages automatically detects the update, rebuilds the site, and deploys the new version. This automated continuous deployment workflow is incredibly efficient, eliminating the need for manual uploads or complex CI/CD pipeline configurations on a self-hosted server. Had I stuck with the Raspberry Pi, I would have needed to set up a custom GitHub Action or a similar trigger to automate deployments, adding an extra layer of complexity.

In conclusion, the combination of Astro for its performance and flexibility, and Cloudflare Pages for its scalability, cost-effectiveness, and ease of deployment, provided the ideal foundation for building and maintaining this website.