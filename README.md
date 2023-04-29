# Soccer_Player-Quote_Reader

College Assignment to write an Ionic mobile application that reads soccer player data, flag data, and quotes from internet resources. Submitted January 2023 for the Mobile Applications Development Module.

## Project Requirements

The project must be written using the Ionic framework V3 and created initially using the following command: `ionic start GXXXXXXXX blank --type=ionic-angular` where GXXXXXXXX is your personel number.

The web app should consist of the following:

1. The **Home Page** is the first page of the application. It has a navigation bar which should have your personel number and a link to the Settings Page. The first time the application is run no CountryID has yet been entered the so no Player data will be shown. The random quote is read from the following API [Quotable](https://api.quotable.io/random). For more information on the API see [GitHub LukePeavey](https://github.com/lukePeavey/quotable#getrandom-quote). The quote’s author, content and tags should be displayed on page.

2. **Settings Page** When the Settings icon is pressed on the Home Page, the SettingsPage should be opened. Values for Country ID, Player Minimum, and Player Maximum ages should be read from Storage. When the application is first run, Storage will be empty so no values will be shown. If the Save button is pressed without any value for Country ID entered, an errormessage should be displayed.
When a Country ID has been entered, it should be saved to Storage, and when the Save button is pressed, the Settings Page should be closed, and the user returned to the Home Page.
**NOTE:** Player Minimum and Maximum ages are optional, but if a user enters a value for either, these too must be saved to Storage.

3. When the user is returned to the Home Page, the Country ID must be verified on
https://app.sportdataapi.com/documentation#countryById and it’s name displayed as
shown in Figure 5 Home Page with Player data (No minimum or maximum ages).
If the Country ID is valid, the country’s flag should be shown. The flag image’s
source will be https://flagsapi.com/***/shiny/64.png where *** will be the 2 letter
country code of the country, which will be returned from sportdataapi.com.
For example, the flag of country ID 23 (Bosnia & Herzegovina) can be found at
https://flagsapi.com/BA/shiny/64.png.
The firstname, lastname, age and height of Players from the particular country should
be shown on the Home Page.
This information can be read from
https://app.sportdataapi.com/documentation#players.
**NOTE:** To use Sport Data API, you must first register for a free account at
[sportdataapi](https://app.sportdataapi.com/register).


4. When the Settings Page is opened subsequently, the Country ID (and Player
Minimum and Maximum ages, if they were previously entered) should be read from
Storage and displayed.

## Running Application
The application was created and run in Ionic V3, later versions may cause incompatibilities.
- Download the entire repository.
- From within the downloaded folder run `npm install` in the CLI to install missing dependecies.
- Then run the following `ionic serve`
- App should be viewable in your web browser at the port specifed by the last command.
- The pdf file [Innovation](https://github.com/RichDaly/Soccer_Player-Quote_Reader/blob/main/innovation.pdf) which was submitted with the project outlines functionality not described in the project requirements listed above.
