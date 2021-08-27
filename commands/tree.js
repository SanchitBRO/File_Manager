let fs=require('fs');
let path=require("path");
function treeFn(dirPath,x){
    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile == true) {
        let fileName = path.basename(dirPath);
        console.log(x + "├──" + fileName);
    } else {
        let dirName = path.basename(dirPath)
        console.log(x + "└──" + dirName);
        let childrens = fs.readdirSync(dirPath);
        for (let i = 0; i < childrens.length; i++) {
            let childPath = path.join(dirPath, childrens[i]);
            treeFn(childPath, x + "\t");
        }
    }
    
}
module.exports={
    tree:treeFn
}