declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_MAPBOX_KEY: string;
            REACT_APP_WEATHERAPI_KEY: string;
            REACT_APP_AMBEE_KEY: string;
        }
    }
}

export { }