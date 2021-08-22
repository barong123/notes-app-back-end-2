const AWS = require('aws-sdk');

class StorageService {
  constructor() {
    this._S3 = new AWS.S3();
  }

  // async writeFile(file, meta) {
  //   const parameter = {
  //     Bucket: process.env.AWS_BUCKET_NAME, // Nama S3 Bucket yang digunakan
  //     Key: +new Date() + meta.filename, // Nama berkas yang akan disimpan
  //     Body: file._data, // Berkas (dalam bentuk Buffer) yang akan disimpan
  //     ContentType: meta.headers['content-type'], // MIME Type berkas yang akan disimpan
  //   };

  //   this._S3.upload(parameter, (err, data) => {
  //     console.log(err, data);
  //   });

  //   await this._S3.upload(parameter, (error, data) => {
  //     if (error) return error;
  //     console.log(data);
  //   });
  //   console.log(this.fileLocation);
  //   return this.fileLocation;
  // }

  writeFile(file, meta) {
    const parameter = {
      Bucket: process.env.AWS_BUCKET_NAME, // Nama S3 Bucket yang digunakan
      Key: +new Date() + meta.filename, // Nama berkas yang akan disimpan
      Body: file._data, // Berkas (dalam bentuk Buffer) yang akan disimpan
      ContentType: meta.headers['content-type'], // MIME Type berkas yang akan disimpan
    };

    return new Promise((resolve, reject) => {
      this._S3.upload(parameter, (error, data) => {
        if (error) {
          return reject(error);
        }
        console.log(data.Location);
        return resolve(data.Location);
      });
    });
  }
}

module.exports = StorageService;
