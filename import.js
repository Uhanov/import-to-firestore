const admin = require('firebase-admin');
const serviceAccount = require('./service-key.json');
const fs = require('fs');
const YAML = require('js-yaml');

const fileName = process.argv[2];

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://SOME_DB_URL.firebaseio.com'
});

fs.readFile(fileName, 'utf8', (err, data) => {
  let dataArray;

  if (err) {
    return console.log(err);
  }

  if (fileName.endsWith('yaml') || fileName.endsWith('yml')) {
    dataArray = YAML.safeLoad(data);
  } else {
    dataArray = JSON.parse(data);
  }

  uploadData(dataArray);
});

function uploadData(data) {
  data && Object.keys(data).forEach(key => {
    const contendData = data[key];

    if (typeof contendData === 'object') {
      Object.keys(contendData).forEach(title => {
        admin.firestore()
          .collection(key)
          .doc(title)
          .set(contendData[title])
          .then(() => console.log(`Document ${key} was successfully imported`))
          .catch(error => console.error(`Error: ${error}`));
      });
    }
  });
};
