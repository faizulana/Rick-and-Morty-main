import { createContext } from "react";

export const LocationsContext = createContext({
    locations: [],
    info: {},
    setPage: null
});