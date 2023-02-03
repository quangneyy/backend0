const { json } = require("express");

const uploadSingleFile = async (fileObject) => {
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let uploadPath = __dirname + fileObject.name;

  // Use the mv() method to place the file somewhere on your server

  // save => public/image/upload
  // abc.png => abc-timestamp.png
  // upload multiple files

  try {
    await fileObject.mv(uploadPath);
    return {
      status: "success",
      path: "link-image",
      error: null,
    };
  } catch (err) {
    console.log(">>> check error: ", err);
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(err),
    };
  }

  fileObject.mv(uploadPath, function (err) {
    if (err) {
      console.log(">>> check err: ", __dirname);
    }
  });
};

const uploadMultipleFiles = () => {};

module.exports = {
  uploadSingleFile,
  uploadMultipleFiles,
};
