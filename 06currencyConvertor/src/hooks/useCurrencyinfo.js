import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Failed to fetch currency data: ${res.status}`);
                }
                return res.json();
            })
            .then((res) => setData(res))
            .catch((error) => console.error(error.message));
    }, [currency]);

    return data;
}

export default useCurrencyinfo;
