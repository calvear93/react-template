import { Provider } from 'react-redux';
import { BrowserRouter } from '@router';
import { AppStore } from 'app/App.store';
import { AppRouter } from 'app/App.router';
import '@web-font';
import 'app/styles/app.scss';

/**
 * App container.
 *
 * Here occur the initialization,
 * for routing, store and main app.
 *
 * @returns {JSX.Element} app container
 */
export const App: React.FC = (): JSX.Element => {
    return (
        <BrowserRouter basename={process.env.REACT_APP_BASE_PATH}>
            <Provider store={AppStore}>
                <AppRouter />
            </Provider>
        </BrowserRouter>
    );
};

/**
 * if you want your app to work offline and load faster, you can change
 * REACT_APP_SERVICE_WORKER env var to true. Note this comes with some pitfalls.
 * Learn more about service workers: https://cra.link/PWA
 */
if (process.env.REACT_APP_SERVICE_WORKER === 'true') {
    import('./config/service-worker.register').then((worker) =>
        worker.register()
    );
}
