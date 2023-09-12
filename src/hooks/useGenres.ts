import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios";

export interface Genre {
    id: 0;
    name: string;
}

interface FetchedGenreResponse {
    count: number;
    results: Genre[];
  }
const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        apiClient.get<FetchedGenreResponse>("/genres", {signal: controller.signal})
        .then((res)=>{
            setIsLoading(false)
            setGenres(res.data.results)
        }).catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
            setIsLoading(false)

        });
        return () => controller.abort()
    }, []);

    return {error, genres, isLoading}

}
export default useGenres;