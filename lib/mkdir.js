var fsExtra = require('fs-extra');
var fs = require('fs');

var mkdir = module.exports

//create folder

mkdir.createFolder = function(nameFolder){
  if(typeof nameFolder == 'array'){
    for(i in nameFolder){
      if(!fs.existsSync(i)){
        fs.mkdirSync(i);
      }
    }
  }
  else{
    if(!fs.existsSync(nameFolder)){
      fs.mkdirSync(nameFolder);
    }
  }
}

//explorer function
mkdir.explorer = function(nameFolder){
    var jsonFileList = fs.readdirSync(nameFolder);
    return fileList;
}

//delete function
mkdir.deleteFiles = function(nameFolder, listOfFile){
  var jsonFileList = fs.readdirSync(nameFolder);
  for(i in jsonFileList ){
    for( i in listOfFile){
      if(i==listOfFile[i])
        fsExtra.remove(i, function(err) {
          if (err) return console.error(err);
        }
      }
    );
  }
}

//delete all function
mkdir.deleteFiles = function(nameFolder){
  var jsonFileList = fs.readdirSync(nameFolder);
  for(i in jsonFileList ){
    fsExtra.remove(i, function(err) {
      if (err) return console.error(err);

      });
    }
}

//rename files
mkdir.renameFiles = function(folder, newName){
    var fileList = fs.readdirSync(folder);
    for(var i=0 ;i<fileList.length; i++){
      var extension = '.'+fileList[i].split('.').pop();
      var newName = folder+fileList[i]+i+extension;
      fs.renameSync(folder+fileList[i], newName);
    }
}

mkdir.renameFiles= function(folder,list1, list2){
  var fileList = fs.readdirSync(folder);
  for(i in fileList){
    for(var j = 0 ;i<list1.length ; j++){
      if(j == list1[i]){
        var extension = '.'+list1[i].split('.').pop();
        var newName = folder+list2[i]+extension;
        fs.renameSync(folder+list1[i], newName);
      }
    }
  }
}
