import BASE_URL from "./init"

export const login = async (payload) =>{
    const url = `${BASE_URL}/api/token/`
    const response = await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(payload)
    })

    if (!response.ok){
        return {
            staus:"falied",
            staus_code:response.status
        }
    }

    let result = await response.json()

    result = {
        status:"success",
        result:result
    }

    return result
}