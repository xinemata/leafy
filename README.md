# Leafy

Leafy is a framework that combines [Tabletop.js](https://github.com/jsoma/tabletop) and w3School's [filter element example](https://www.w3schools.com/howto/howto_js_filter_elements.asp). With the help of Tabletop.js you could use google spreadsheet as a database, and through Leafy you could generate a list on the web and filter the items by categories and themes. An individual item can be associated with more than one theme at a time, sort of like hashtags. 

[Example](https://leafy-template.glitch.me/)

Leafy was made for educators and organizers, with the intention of small - large scale collaboration in mind. Build an ongoing list of readings, resources, to-dos, etc and distribute your content to the greater community. 
 
# Getting Started
## Set up a google spreadsheet
1. Visit the google spreadsheet template I've created [here](https://docs.google.com/spreadsheets/d/1Q23ZnH7KHBHahFT65_9RisSu1Wk4gNOrowiprtxgE4A/edit?usp=sharing). Duplicate the spreadsheet and save it into your own google drive.
1. Edit the spreadsheet with your own data. You can expand or delete the number of categories. Enter URLs under the Link column, or you could also leave it empty. 
1. Visit [Tabletop.js' README](https://github.com/jsoma/tabletop/blob/master/README.md), scroll down to Getting Started, and follow the instructions inside the **1) Publishing your Google Sheet** section. 

## Put spreadsheet on a website

We're ready to connect the spreadsheet to our website. From here you could move forward by remixing the  [Leafy template](https://glitch.com/~leafy-template) hosted on Glitch, or  you could also [download the repository](https://github.com/xinemata/leafy/archive/master.zip) and work locally. 

Now go to script.js, and look at the top section where it says `editable info`. Replace the URL following `const publicSpreadsheetUrl` with your own spreadsheet URL. Your spreadsheet should now be connected to your site. Yay!

## Notes

- This framework doesn't support multiple sheets
