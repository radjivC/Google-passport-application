Super-Mkdir
====================

## Installation

```
npm install super-mkdir
```

## Usage example

####Minimun to use

```
var mkdir = require('super-mkdir');
```
#### to get file name from a folder

```
var list = explorer('/my/folder/');
//list of all the file inside
```
#### Deleted some files in the folder
```
mkdir.deleteFiles('/my/folder/',['file.png', 'file2.json', 'file3.png'] );
mkdir.deleteFiles('/my/folder/');
```
####Rename some files
You can rename all files with this new name but not the extensions of the file.

#####Exemple:
* filesTest.txt -> newName1.txt
* otherFiles.txt -> newName1.txt 

```
mkdir.renameFiles('/my/folder/', 'newName');
mkdir.renameFiles('/my/folder/',['file.png', 'file2.json', 'file3.png'], ['newNamefile.png', 'newNamefile2.json', 'newNamefile3.png']);
```
or this
```
var word = 'word';
mkdir.renameFiles('/my/folder/',['file.png', 'file2.json', 'file3.png'], [word+'newNamefile.png', word+'newNamefile2.json', word+'newNamefile3.png']);
//rename the files as wordnewNamefile.png
```

