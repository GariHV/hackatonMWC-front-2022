# GariHV - Frontend proposal // 4YFN - MWC Barcelona 2022

## Index

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
- [Extras explanation](#extras-explanation)
  - [LocalStorage](#localstorage)
  - [Autocomplete function](#autocomplete-function)
  - [Technologies Display](#technologies-display)
  - [Getting Started](#getting-started)
- [Getting Started](#getting-started)
- [Getting Started](#getting-started)
- [Getting Started](#getting-started)

## Introduction

At 4YFN – MWC Barcelona 2022, the organization told us to work as the Barcelona Digital Talent has hired us to develop their website. We could use the technology which we thought is the most convenient as long as we followed this points:

- Task 1 → Form that allows to enter the following data: email, full name, brief description, country and city of residence.

- Task 2 → Generate a random avatar of the person (it can be using an API, colors, etc).

- Task 3 → Form that allows to enter professional data: years of experience, sector (Front, Back, Mobile or Data), skills: (can be added freely).

- Task 4 → The skills are tagged somewhere in the profile.

- Task 5 → A view that allows to see the whole user profile with the above data.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

If you want to use this application and customize it you will need to install:

- Node.js
```
https://nodejs.org/es/download/
```

- Sass:
```
npm install -g sass
```

All the customize features are implemented with Sass. Taking that into account, you will need to understand how to compile the Sass code into Css.

If you use the main structure implemented in this repository, just introduce the following code in the Terminal:

```
sass --watch assets/scss/index.scss:assets/css/index.css
```

## Extras explanation

### LocalStorage

After reading and analizing the requisites of the contest, it was clear that just a single user was going to use the application at the same time. Taking that into account, I decided to use localStorage to save the information introduced by the user in the form's pages.

Every time that the "Next" button of the first form page is pressed, a "user" object is created in the localStorage. The object stores all the information introducen in every single input of the first and the second form.

### Autocomplete function

In both the first and the second form, the user is offered options based on the letters that is pressing. All the options are bolded and the selected one have a different hover display.

### Technologies display

Once the user enters all the information asked in the second form, I take all the information stored and fill the User-Info view fields.

Although the first part is as simple as that, the technologies introduced by the user are stored in an Array. To show the Stacks I decided to iterate the Array and search from the resources/logos.json file to find each technology logo's, tag's and webpage's.

## Deployment

Use this URL to use the application: https://fervent-torvalds-3b6c3f.netlify.app/

## Built With

* [JavaScript](https://www.javascript.com/) - The main technology used to create the web's interactions.
* [Sass](https://sass-lang.com/) - Technology used as a stylesheet language that’s compiled to CSS.
* [HTML5](https://developer.mozilla.org/es/docs/Glossary/HTML5) - Used as the web's structure.

## Authors

* **Garikoitz Herrero Vargas** - [GariHV](https://github.com/GariHV)

## Screenshots

- Screenshot of the first form showing the display of the autocomplete function.

![Screenshot](assets/img/first-form-autocomplete-country.png)

- Screenshot of the second form showing the display of the autocomplete function.

![Screenshot](assets/img/second-form-autocomplete-stack.png)

- Screenshot of the second form showing the display of the technologies selected displayed.

![Screenshot](assets/img/second-form-stack-display.png)

- Screenshot of the User-Info view showing the display of the information introduced by the user in the first form.

![Screenshot](assets/img/user-display-bio-info-section.png)

- Screenshot of the User-Info view showing the display of the information introduced by the user in the second form.

Here you can see how the input saved as "stacks" in the localStorage is displayed showing its own icon and tag. 

![Screenshot](assets/img/user-displya-professional-section.png)


