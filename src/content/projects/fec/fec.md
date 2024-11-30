---
slug: /projects/fec
date: 2024-11-30
title: Federal Election Commission website
featuredImage: ./fec.png
contentType: project
---

Between April 2019 and January 2021 I was a software developer on the Federal Election Commission website. I mainly contributed on the backend as an Application Programming Interface (API) developer, whose primary "customer" was the frontend Content Managment System (CMS).

During this time, my key contributions were in the areas of:
- [openFEC](https://github.com/fecgov/openFEC) (#2 of 16 code commit contributors, excluding merge commits)
- [fec-eregs](https://github.com/fecgov/fec-cms) (#2 of 13 code commit contributors, excluding merge commits)
- [fec-cms](https://github.com/fecgov/fec-cms) (#7 of 17 code commit contributors, excluding merge commits)

Additionally, I served as Scrum Master on a rotational/volunteer basis, led multiple post mortems, acted as a team subject matter expert in using `snyk` and developed a script to traverse our GitHub repositories to scan for leaked credentials in text and attachments. One elevated api key was found in an attached screenshot--the script also included optical character recognition as the team occasionally included screenshots to help in troubleshooting.

One memorable highlight of my time at the FEC was resolving a bug that affected users searching the website for campaign contributions. This bug ensured that a user searching for cases like "Amazon.com" might get results such as "Amazon com" or "Amazon", but they would never get "Amazon.com" back depsite this being a record in the database. 

The reason for this longstanding bug in openFEC's open-source, publicly available codebase was the interaction between the backend stripping special characters from user input and using the result to search the database for the sanitized input. Unfortunately, the results were guaranteed to not include the searched-for term and affected numerous tables. 

My first attempt at a solution was to update the sanitizing function to limit the string to everything preceeding the special character, however that resulted in far too many records being returned and rendered the search impractical.

After deeply researching our AWS RDS PostgreSQL database, I found a solution that modified the Agency's database triggers to align with the original sanitization function. Ultimately, this solution fixed the original problem of guaranteed incorrectness but also gave resultsets that did not bury the user in superfluous information, such as any result containing the word "Amazon", thereby eliminating undesired results including "Amazon Garden Hoses", for example.

My experience at the FEC gave me a genuine appreciation for the benefit of DevOps and the cloud. It also reaffirmed my passion for Agile software development. 
