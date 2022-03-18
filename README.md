# fullstack-2022-part-10
This repository is @rpulkka's implementation of the mobile app for the course [HY FullStack 2022: React Native](https://fullstackopen.com/en/part10).

# Installation
1. Clone this repository.
2. Also clone [the repository for the API](https://github.com/fullstack-hy2020/rate-repository-api) and make sure to follow its installation instructions.
3. Follow [these instructions](https://fullstackopen.com/en/part10/introduction_to_react_native) to install expo-cli, Android studio / emulator, and Expo's mobile app.
4. Make .env file into the root of this project, with contents `ENV=development` and `APOLLO_URI=http://<INSERT_IP>:4000/graphql`. Remember to replace <INSERT_IP> with the IP address that can be seen for example on top of the QR-code on Expo Dev Tools, which opens to your browser when running `npm start`.
5. Run `npm install` for both repositories.
6. Check that the API and and the mobile app are connected to the same WIFI, otherwise they might not find each other
7. Run `npm start` first for the API project and then on this project.
