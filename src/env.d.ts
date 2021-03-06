/**
 * Global types definition for
 * environment variables.
 *
 * @summary environment variables schema
 */
declare global {
    namespace NodeJS {
        // NOTE: only string type is supported
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production' | 'test';
            REACT_APP_ENV: 'dev' | 'qa' | 'prod';
            DEBUG?: string;

            // SECTION: project info from package.json
            REACT_APP_VERSION: string;
            REACT_APP_PROJECT: string;
            REACT_APP_NAME: string;
            REACT_APP_TITLE: string;
            REACT_APP_DESCRIPTION: string;

            // SECTION: base config
            PORT: string;
            PUBLIC_URL: string;
            REACT_APP_DEBUG: 'true' | 'false';
            REACT_APP_SERVICE_WORKER: 'true' | 'false';
            REACT_APP_BASE_PATH: string;
        }
    }

    // SECTION: global custom types

    type decimal = number;

    type seconds = number;

    type millis = number;

    // Unix timestamp, number of seconds that have elapsed since January 1, 1970
    type epoch = seconds;

    type AnyError = unknown;
}

export {};
