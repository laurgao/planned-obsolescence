import {AddToast} from "react-toast-notifications";

const showToast = (success: boolean, content: string, addToast: AddToast) => {
    addToast(content, {appearance: success ? "success" : "error", autoDismiss: true});
}

export default showToast;