---
slug: /blogs/how-i-built-this-site
date: 2020-08-09
title: How I built this site
featuredImage: Gatsby_Logo.png
contentType: blog
author: Jason Upchurch
---
[Update: August 23, 2020---special thanks to [Wojciech Snopkowski](https://github.com/Snopkowski) for his [tutorial](https://snopkowski.com/blog/gatsby-navigation-styled-components) on creating a nice navigation bar. Much of my implementation is a direct lift from his tutorial.]

This inaugural blog is meant to give a fairly high-level overview of some of the key decisions about frameworks and architecture I made when taking the initial steps to build my first website, as well as some of the challenges I faced in the process---without getting overly detailed (for now, at least).

### Why do I want a website in the first place?

I wanted to create a site mostly as a way to motivate my learning something new, and I thought that it might also be a good way to highlight my project portfolio and professional experience. But, I also began to think that it would be fun to occasionally blog about different technical challenges I run into (create for myself) and how I was able to (or unable to) solve them---I like writing, and I like solving technical problems, so it seemed like a natural intersection to write a technical blog. 

Also, as a developer, I routinely get help from the community through posts, articles, documentation, and personal interaction; I'd like to use this blog as a way to the offer some kind of contribution to the community that continues to help me so much, while not forgetting that often the process of teaching results in the "teacher" learning more than the student. 

If you have any comments, questions, or corrections please feel free to drop me a line at [jason-upchurch@mail.com](mailto:jason-upchurch@mail.com).

### What kind of website will I have?

In considering how to go about making a website, there were a lot of paths to consider---from whether to use platforms like [WordPress](https://wordpress.com/) or [Squarespace](https://www.squarespace.com/) or to build my own from scratch (or something in between)---or things like, should I have a [static or a dynamic website](https://create.ou.edu/docs/html/static-and-dynamic-websites/)?

Thinking back to a conversation with a friend several months back, I recalled him mentioning [Gatsby](https://www.gatsbyjs.org/), a static site generator (thank you [mlilius](https://github.com/mlilius)!). After poking around the documentation---keeping in mind my top-level goal of learning something new---I decided to give it a try.

>Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps

### My first brush with Gatsby

I started this site using the [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default) template and following the directions. With a background mainly in Java, Python, and MATLAB---with some additional professional experience in C++, JavaScript, and SQL---seeing React and GraphQL in the Gasby.js framework for the first time about a month ago was initially daunting (keep in mind I'm not a front-end developer of any kind, well, at least until now I wasn't).

But, Gatsby appears to have robust documentation and an active community, so finding resources was only a matter of `<Search Engine>`ing for the answers. For example, I knew I wanted to expand to multiple content types and make content easy to write and pages programmatically updated. 

Some examples of resources I found and used to address these goals were:

- [Adding markdown pages]( https://www.gatsbyjs.org/docs/adding-markdown-pages/)
- Adding multiple content types:
  - https://chipcullen.com/making-multiple-content-types-in-gatsby/
  - https://stackoverflow.com/questions/50242492/gatsby-multiple-content-types
  - https://desktopofsamuel.com/gatsby-website-with-multiple-post-types
  
I also included things like automatically generating pages based on new content, adding templates, a work-in-progress [navigation bar](https://www.gatsbyjs.org/docs/creating-dynamic-navigation/), image support, and several other enhancements (like lots and lots of formatting). 

You can review my [GitHub repo](https://github.com/jason-upchurch/shined) to see how the project has evolved up until this point. 

### Publishing and maintaining my site

Once I got some of the pieces in place and figured out how to build pages automatically, internally link content correctly, templatize content, and get a sense that the major pieces all worked on `localhost:8000`, I wanted to  make the content available on the `doubleUdoubleUdoubleU`.

[Gatsby documentation](https://www.gatsbyjs.org/blog/2018-08-24-gatsby-aws-hosting/) to the rescue!

![GAG](GAG.png)

Gatsby integrates well with AWS Amplify which integrates well with GitHub. So, my high-level workflow is:

1. Work on my Gatsby project locally,
2. Version control that project using GitHub,
3. Connect a main GitHub branch and a development GitHub branch in the AWS Amplify Console to trigger a new build and deploy changes on merges to those branches,
4. Use the main branch for my production website and use the development branch for QA of updates to the website through an authenticated development URL before merging to the main branch.

And Robert's your father's brother!

### Future steps

Way too many to exhaustively list... But some things I'd like to tackle next are:

- **Enhancements:** Better navigation, perhaps dynamically generated based on content, but certainly more visually appealing, better use of style sheets, componentize more, add social media integration, add authentication, explore stripping .md in favor of .mdx, social media linking.
- **Content stuff:** More pages, like linking my professional publications, adding projects, updating my professional experience.

### "Asking for a friend"

Should I store my content outside of my repository? How do other users of the Gatsby/AWS Amplify/GitHub setup deal with this? [Let me know](mailto:jason-upchurch@mail.com)!




