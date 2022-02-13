import * as auto from  "./functions/autocomplet.js"
import * as va from "./variables/variable.js"

import * as dom from "./variables/indexDom.js"
import * as gDom from "./variables/generalDom.js"
import * as users from "./functions/users.js"


let skill=va.skills();

auto.autocomplete(document.getElementById("inputSkill"), skill,true);









