## Import JSON or YAML to Firestore
This script is to upload some data to the Firestore. It supports JSON and YAML formats.

### How to install
Clone this repository:
```
git clone url
```

### How to start
1. Get **Service Key**
...Navigate to the Service Accounts tab in your project's settings page.
...Click the Generate New Private Key button at the bottom of the Firebase Admin SDK section of the Service Accounts tab.
...And put it in the root folder with name **service-key.json**.

2. Rename the *databaseURL* value inside the index.js file

3. Start it
```
node import.js <collection-name>
```
> You need NODE for that

<collection-name> should be *.json or *.yaml or *.yml
