# Leafy

Leafy is an easy-to-use template designed to turn your google spreadsheet into a styled, sortable table on a website. 

![Leafy example screenshot](URL)  
*Screenshot of example Leafy page*  

Use google spreadsheet as your backend database. Items in your spreadsheet can be tagged with multiple categories. Leafy takes this spreadsheet and generates a sortable list allowing you to filter by these categories. 

Leafy is made for educators and organizers, with the intention of small - large scale collaboration in mind. Build an ongoing list of readings, resources, to-dos, etc and distribute your content to the greater community. Making edits to the spreadsheet will automatically post these changes to your Leafy site.

Leafy is built with [Tabletop.js](https://github.com/jsoma/tabletop) and adapts w3School's [filter element example](https://www.w3schools.com/howto/howto_js_filter_elements.asp) for the category sorting. 

# Examples built with Leafy


[Database of Underrepresented artists in digital media](URL)

[Basic minimal example](https://leafy-template.glitch.me/)



# Getting Started

## Set up a google spreadsheet
1. Visit the google spreadsheet template I've created [here](https://docs.google.com/spreadsheets/d/1Q23ZnH7KHBHahFT65_9RisSu1Wk4gNOrowiprtxgE4A/edit?usp=sharing). Duplicate the spreadsheet and save it into your own google drive.
1. Edit the spreadsheet with your own data. You can expand or delete the number of categories. Enter URLs under the Link column, or you could also leave it empty. 
1. Visit [Tabletop.js' README](https://github.com/jsoma/tabletop/blob/master/README.md), scroll down to Getting Started, and follow the instructions inside the **1) Publishing your Google Sheet** section. 

## Put spreadsheet on a website

We're ready to connect the spreadsheet to our website. From here you could move forward by remixing the  [Leafy template](https://glitch.com/~leafy-template) hosted on Glitch, or  you could also [download the repository](https://github.com/xinemata/leafy/archive/master.zip) and work locally. 

Now go to script.js, and look at the top section where it says `editable info`. Replace the URL following `const publicSpreadsheetUrl` with your own spreadsheet URL. Your spreadsheet should now be connected to your site. 

Yay!

![Leafy animation](https://cdn.glitch.com/a0713ae5-198b-4366-b7e9-e40b63c44f84%2Funnamed.gif?v=1584807328184)  

## Notes

- This template doesn't support multiple sheets
