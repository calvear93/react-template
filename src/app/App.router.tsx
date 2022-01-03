import { createRouter } from '@router';
import { routes } from './app.routes';

// creates a router
const Router = createRouter({
    routes: routes.app,
    loader: <h1>Loading</h1>,
    fallback: <h1>Not Found</h1>
});

/**
 * Application routing handler.
 *
 * Here you can define logic for authorization
 * redirection or app splitting.
 *
 * @returns {JSX.Element} application router
 */
export const AppRouter: React.VFC = (): JSX.Element => {
    return <Router />;
};
