#!/usr/bin/env node
let helpO=require("./commands/help");
let treeO=require("./commands/tree")
let organizeO=require("./commands/organizer")

let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];

switch(command){
    case "help":
        helpO.help();
        break;
    case "tree":
        treeO.tree(path, "");
        break;
    case "organize":
        organizeO.organize(path);
        break;        
    default:
        console.log("------------INVALID-----COMMAND-----ENTERED------------");
        break;
}