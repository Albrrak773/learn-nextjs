# Goal

To learn the basics of building a **daynamic webapp** using react and next.js without using AI to write code during the learning process.

### Objectives

- Learning best practices as well as different tradeoffs for doing things like server/client component and heavy caching/real-time...etc
- Learn various data fetching startegyies with their tradeoffs
- Learn how stuff like reading cookies, localstorage and url params effect caching
- Learn how Next.jS caches various stuff like fetches, entire components and entire routes

### Resources used

* The official [React Foundations](https://nextjs.org/learn/react-foundations) react tutorial from Next.js
* The official [App Router](https://nextjs.org/learn/dashboard-app/getting-started) Next.js tutorial from Next.js

Additional Possible resources I am considering

- [frontendmasters Next.js Fundementals, v4](https://frontendmasters.com/courses/next-js-v4/)
- The official [SEO](https://nextjs.org/learn/seo) Next.js tutorial from Nextj.js

---

# Post Learning outcomes

as of Next.js v16.2

### The Static/Dynamic boundry

That Next.js treats the boundry of Static vs. Dynamic routes as a spectrum and it achives that spectrum by moving the Static/Dynamic Choice down to individual components. it uses stuff like [Partial Prerendering](https://www.youtube.com/watch?v=F6romq71KtI), [Cache Components](https://nextjs.org/docs/app/getting-started/caching) to achive this.
This address one of my main objectives

> - Learn how stuff like reading cookies, localstorage and url params effect caching
> - Learn how Next.jS caches various stuff like fetches, entire components and entire routes

I now understand that running something like `next build` actually shows you what routes were deemed dynamic or static based on these things and therefore what gets cached

### Next.js's rendering-philosophy

Another thing I learned is that I don't necessarily agree with the Next.js model rendering model when it comes to this thinking because of one majore phlosiphical difference.

Next.js want to do *everything* on the server. and not do stuff like data fetching on the client

> #### Build-time prerendering
>
> Every page is generated at build time. The output is static files that can be served from any CDN or file server with zero runtime infrastructure. Dynamic content, if any, requires client-side fetching after the page loads. This is the simplest model to deploy, but every content change requires a rebuild and redeploy.
> [Next.js rendering-philosophy](https://nextjs.org/docs/app/guides/rendering-philosophy#build-time-prerendering)

another quote

> A mostly-static page with one dynamic element must either be fully dynamic or fetch that element on the client after load.

and for me I don't see what is wrong with that, I am not sure I belive that it worth the complete and insane architectural and infrastructure copmlexity just so we don't end up with a mostly static page with a dynamic element that must be fetched on the client after load.
I just don't see that being so bad.

The idea of building an application and publshing it statically on a CDN sounds fucking amazing to me.

### Next.js Support's it all

in my previous point I stated how I don't much agree with Next.js's philosophy but I am not sure I have to.
it seems to be like they support it all.
If you want to go on the extereme end of dynamic sites [Next.js allows you to build SPAs easily](https://nextjs.org/docs/app/guides/single-page-applications).
or a [full static export](https://nextjs.org/docs/app/guides/static-exports) that you can deploy to a file sever or CDN.
or fully SSR which is kinda of the deafult.

> 💡
> I really reccoment reading every link I mentioned above, the Next.js docs [Guides](https://nextjs.org/docs/app/guides) section is really fucking good and are just great read to help you refresh your understanding of various concepts

### Tanstack Start

After I learned more and more about Next.js, And after I read this great article [TanStack Start vs Next.js](https://tanstack.com/start/v0/docs/framework/react/start-vs-nextjs).
I am more and more convenced that while I like and agree with Next.js's core bet:

> The core bet: most web content is static or near-static. Server Components should be the default. Interactivity is the exception you opt into. The framework should make decisions for you, and those decisions should be optimized for their infrastructure.

I really really don't like their Apple-like lockdown on only using their infrastructure for deploying
*I know you can deploy on other platforms but even [they admint](https://nextjs.org/docs/app/guides/deploying-to-platforms#functional-fidelity-vs-performance-fidelity) it will be worst*

And I really don't like thier Apple-like philosophy of "it just works" and "don't think about it" when it comes to more fine grained control over how things work espcially caching.

so while I don't dismess Next.js completely specially for vibe-coded throw away projects with their lighting fast deployment,
I unlitemtely am way more comfortable with Tanstack Start's core bet for my actual projects that I care about:

> The core bet: developers know their apps better than frameworks do. Server rendering is an optimization you opt into where it makes sense. The framework should give you powerful primitives and get out of your way.	
> [Tanstack vs Next.js](https://tanstack.com/start/v0/docs/framework/react/start-vs-nextjs#tanstack-start-the-developer-first-play)

also helps that the head of Vercel is a [child murder supporting fuck](https://x.com/rauchg/status/1972669025525158031)