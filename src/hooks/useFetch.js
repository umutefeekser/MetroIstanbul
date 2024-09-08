import { useFocusEffect } from "@react-navigation/native"
import axios from "axios"
import { useCallback, useEffect, useState } from "react"

export default (url) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useFocusEffect(
        useCallback(()=>{
            setData(null)
            setLoading(true)
            setError(null)
    
            axios.get("https://api.ibb.gov.tr/MetroIstanbul/api/"+url)
            .then(response => {
                setData(response.data)
            })
            .catch(err => {
                setError(err.message)
            })
            .finally(()=>setLoading(false))
            
        },[])
    )

    return {loading, data, error}
}