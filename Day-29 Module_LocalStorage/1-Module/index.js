// import { projectName } from "./Library.js";
// import { display } from "./Library.js";
// import { Project } from "./Library.js";

// import {projectName, display, Project,} from './Library.js'

import * as Data from './Library.js'
import display from './Library.js'


console.log(Data.projectName)
console.log( Data.display("John Methew"))
let porject1 = new Data.Project("Terry", 101, "Sr. Software Engineer")  
porject1.dispDetails()
display();