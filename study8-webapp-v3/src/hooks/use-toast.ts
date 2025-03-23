import {useContext} from "react";

import {ToastContext} from "../providers/toast-provider";


export const useToast = () => useContext(ToastContext);