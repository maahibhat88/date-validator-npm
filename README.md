# date-validator-npm

Date validator npm validates the From and To Date difference.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/date-validator-npm) to install Date Validator Npm.

```bash
npm i date-validator-npm --save
```

## Usage

```python
const check= require("date-validator-npm");

check.isDateValid(fromDate,toDate); # example
check.isDateValid("02/01/2020","01/01/2020"); # returns 'true'
check.isDateValid("01/01/2020","02/01/2020"); # returns 'false'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
