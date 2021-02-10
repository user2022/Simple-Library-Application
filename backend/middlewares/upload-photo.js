const aws = require('aws-sdk'); // Official AWS software development kit // https://www.npmjs.com/package/aws-sdk

// middleware library for handling form data and mainly uploaded files
const multer = require('multer'); // https://www.npmjs.com/package/multer

// Integration package for AWS S3 and multer - uploads photo to my s3 bucket
const multerS3 = require('multer-s3'); // https://www.npmjs.com/package/multer-s3

// When user uploads an image it will be stored in the AWS s3 bucket, it will then give a URL of the location of the image from S3
// The location will then be stored in the database

// My private keys from AWS S3 server
const {AWSSecretKey, AWSAccessKeyId} = require('./awsDetails');


aws.config.update({
    secretAccessKey: AWSSecretKey,
    accessKeyId: AWSAccessKeyId
});

// Creating new S3 object
const s3 = new aws.S3();

const upload = new multer({
    storage: multerS3({
        s3: s3,
        bucket: 'library-project', // name of my S3 bucket on AWS
        acl: 'public-read',
        metadata: (req, file, cb) => {
            cb(null, {fieldName: file.fieldname}); // field name of a photo
        },
        key: (req, file, cb) => { // Gives a key value to a photo when it's uploaded
            cb(null, Date.now().toString())
        }
    })
});

module.exports = upload;



