let fs=require('fs');
let path=require("path");
function treeFn(srcPath){

    let content=fs.readdirSync(srcPath);
    let allEntities="";
    for(let i=0;i<content.length;i++){
        let files=content[i];
        let filesPath=path.join(srcPath,files);
        let status=fs.lstatSync(filesPath);
        if (status.isFile()){
            allEntities+='\n\t'+"├──"+content[i];
        }
        if(status.isDirectory()){
            treeFn(filesPath)
        }
    }
    let baseName=path.basename(srcPath);
    console.log(baseName);
    console.log("\t"+"└──");
    console.log(allEntities+"\n");
    
}
module.exports={
    tree:treeFn
}