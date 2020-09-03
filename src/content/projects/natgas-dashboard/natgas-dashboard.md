---
slug: /projects/natgas-dashboard
date: 2018-09-18
title: Natural Gas Storage Dashboard
featuredImage: ./dashboard.png
contentType: project
---

I was a member of the tiger team responsible for leading the [Natural Gas Storage Dashboard](https://www.eia.gov/naturalgas/storage/dashboard/) project. This project was a focusd, multi-month endeavor which led to the successful launch of the product in August 2018.

I served several roles on the project: Python developer, user experience/user interface designer, and subject matter expert. 

My most notable contribution to the project was adapting and integrating an [interface](https://github.com/jason-upchurch/ncep/tree/master) I wrote in Python to extract, transform, and load (ETL) publicly accessible weather data from the National Oceanic and Atmospheric Administration (NOAA).

The mapping interface required geospatial analysis and programming capabilities, design elements, and automatic FTP and directory traversal. To adpapt the interface for the Natural Gas Storage Dashboard, I used the core functionality of the interface to retrieve data and write to an Oracle database using a schema I specified. Contracting staff then set up a scheduled task to call the code on a specied interval and automatically ETL the data.

The project team was managed using the Agile development methodology and benefited from a diverse team consisting of senior leadership, (Agile) project management, subject matter experts, and both federal and contractor developers.

## Publications

Christopher Peterson, Jose Villar, and Jason Upchurch. "EIA Introduces Interactive Dashboard Detailing Natural Gas Storage Activity." _Today In Energy_, U.S. Energy Information Administration, 17 Sept. 2019, https://www.eia.gov/todayinenergy/detail.php?id=37056, Accessed 9 Sept. 2020.

## Presentations

**Accessing and Mapping NOAA Weather Data Using An Interface Developed in Python**: Map Users Group, U.S. Energy Information Administration, Washington, D.C., 17 April 2018. [Slides are a available](python_for_mapping.pdf).
