import { useState } from "react"
import { alert } from "./module"

const useAlert=()=>{
    const [alert,setAlert]=useState<alert>({show:false,text:'',type:'danger'})
    const showAlert=({text='',type='danger'})=>setAlert(
        {
            show:true,
            text,
            type,
        }
    )
    const hideAlert=()=>setAlert({
        show:false,
        text:'',
        type:'danger'
    })

    return {alert,showAlert,hideAlert}
}

export default useAlert