# Leafy

Leafy is an easy-to-use template designed to turn your google spreadsheet into a styled, sortable table on a website. 

![Leafy example screenshot](https://cdn.glitch.com/a0713ae5-198b-4366-b7e9-e40b63c44f84%2FScreen%20Shot%202020-03-23%20at%2012.57.15%20AM.png?v=1584939475695)
*Screenshot of example Leafy page*  

- Built on [Tabletop.js](https://github.com/jsoma/tabletop), which lets you use google spreadsheet as your backend database. 
- Use the spread sheet to generate a sortable list on your website.  
- Sort the list through customized categories. Tag items in your spreadsheet with multiple categories.

Leafy is made for educators and organizers, with the intention of small - large scale collaborations. Build an ongoing list of readings, resources, to-dos, etc and distribute your content to the greater community. Making edits to the spreadsheet will automatically post these changes to your Leafy site. 

# Examples built with Leafy

[Basic minimal example](https://leafy-template.glitch.me/)

[Weird Game-Making Tools](http://weird-game-tools.glitch.me/), contributed by [@lee2sman](https://github.com/lee2sman)

[Thesis during COVID](https://thesis-during-covid.glitch.me/), multiple contributors

# Getting Started

## Set up a google spreadsheet
1. Visit the google spreadsheet template I've created [here](https://docs.google.com/spreadsheets/d/1Q23ZnH7KHBHahFT65_9RisSu1Wk4gNOrowiprtxgE4A/edit?usp=sharing). Duplicate the spreadsheet and save it into your own google drive.
1. Edit the spreadsheet with your own data. You can expand or delete the number of categories. Enter URLs under the Link column, or you could also leave it empty. 
1. Visit [Tabletop.js' README](https://github.com/jsoma/tabletop/blob/master/README.md), scroll down to Getting Started, and follow the instructions inside the **1) Publishing your Google Sheet** section. 

## Put spreadsheet on a website

We're ready to connect the spreadsheet to our website. From here you could move forward by remixing the  [Leafy template](https://glitch.com/~leafy-template) hosted on Glitch, or  you could also [download the repository](https://github.com/xinemata/leafy/archive/master.zip) and work locally. 

Now go to script.js, and look at the top section where it says `editable info`:

1. `const publicSpreadsheetUrl` replace this with your own spreadsheet URL. 
1. `const categoryStartNum` let the program know where the categoy begins on the spreadsheet column. Default value is 3.
1. `const sheetName` this has to match the name of your sheet. Default value is "Sheet 1". 
1. `const punctuation` this changes the punctuation between the title and the description. 
1. That's it!

![Leafy animation](https://cdn.glitch.com/a0713ae5-198b-4366-b7e9-e40b63c44f84%2Funnamed.gif?v=1584807328184)  

## Notes

- This template doesn't support multiple sheets
