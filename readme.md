# Dayjs for Google App Script

As it says, Day.js is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API. The entire dayjs as a library for Google App Script. This library can be included in your Google Apps project to use all th available featuer of the dayjs. 

## How to use
Include the library in your project with the library id `1ZMwTs5nrdEquZDUeoAE3cqIWcm3121WsnB4nCpW1CTV9lx3lW1rVUWLN` 
And in your code use it as below

```javascript
function foo(){
	const _dayjs = dayjs.load()
	const numberOfDaysInCurrentMonth = _dayjs().daysInMonth()
	Logger.log(numberOfDaysInCurrentMonth)
}
```


## Versions

As dayjs releases new version, this library will also get updated. Below are list of library versions that you can use in your project.

|Release Date|Library Version|Day Js Version               |
|-|-|-|
|04/14/2022|2|1.10.7

