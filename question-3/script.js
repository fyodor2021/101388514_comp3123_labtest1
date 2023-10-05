"use strict";
const fs = require("fs");
const process = require("process");
const getFiles = (dirPath) => {
  let files = fs.readdirSync("./Logs");
  return files;
};

const clearDir = (files) => {
  if (files != 0) {
    console.log(`Files to Delete : `);
    for (let file in files) {
      console.log(files[file]);
    }
    for (let file in files) {
      fs.unlink(`./Logs/${files[file]}`, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("file deleted successfully.");
        }
      });
    }
  } else {
    console.log("The directory is empty");
  }
};

const deleteDirRec = (dirPath) => {
  fs.rm(dirPath, { recursive: true }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Directory has been deleted successfully.`);
    }
  });
};

const createDir = (dirPath) => {
  fs.mkdir(dirPath, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`The directory has been successfully created.`);
    }
  });
};

const createTenLogs = (numLogs) => {
  for (let i = 0; i < numLogs; i++) {
    fs.writeFile(
      `log${i}.txt`,
      `This content is specificlly made for log${i}`,
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`File is created`);
        }
      }
    );
  }
};

function removeLogFiles() {
  let files = getFiles("./Logs");
  clearDir(files);
  deleteDirRec("./Logs");
}

function createLogFiles() {
  const currentPath = process.cwd();
  createDir(`./Logs`);
  let files = getFiles("./Logs");
  process.chdir("./Logs");
  createTenLogs(10);
  console.log(files);
  process.chdir(currentPath);
}

createLogFiles();
removeLogFiles();
