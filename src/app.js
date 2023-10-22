import { loginModel } from "./utils/loginModel"
import { addInputListeners, addWrapperListeners } from "./utils/loginUtility";

const model = new loginModel()
model.toHTML()
addInputListeners()
addWrapperListeners()