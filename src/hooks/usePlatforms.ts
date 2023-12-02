import useData from "./useData"

export interface Platform {
  id: number
  name: string
  slug: string
}

const usePlatforms = () => useData<Platform>("/genres")
export default usePlatforms
