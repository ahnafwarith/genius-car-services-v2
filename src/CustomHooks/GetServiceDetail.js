import { useEffect, useState } from "react";

const GetServiceDetail = (id) => {
    const url = `http://localhost:5000/service/${id}`
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id]);
    return [service]
}

export default GetServiceDetail;