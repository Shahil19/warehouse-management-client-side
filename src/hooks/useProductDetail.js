import { useEffect, useState } from "react"

const useProductDetail = (id) => {
    const [productDetail, setProductDetail] = useState({})
    useEffect(() => {
        const url = `https://afternoon-harbor-69950.herokuapp.com/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProductDetail(data))

    })

    return [productDetail, setProductDetail]
}

export default useProductDetail;