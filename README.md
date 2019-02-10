This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Find similar people
This app will let you search for a candidate profile to find other people that does the same.
Right now it will just look for first and second level connections that have the same `professionalHeading`
or that includes the candidate's `professionalHeading`.

You will be able to navigate through other suggested connections profiles.

## Available Scripts

### `yarn start`
You need to use yarn instead of npm because there is currently a bug in Webpack that I fixed using `resolutions` key in package.json. I will revert that once the bug in webpack is fixed.

## Running the project
All just need is to have yarn installed. Then you should run:
- `yarn install`
- `yarn start`
