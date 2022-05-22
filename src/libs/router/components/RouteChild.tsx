import { useEffect } from 'react';
import { IRouteDefinition } from '../interfaces/IRouteDefinition';

export interface IRouteChildProps {
    route: IRouteDefinition;
}

/**
 * Renders a route.
 *
 * @param {IRouteChildProps} props
 *
 * @returns {JSX.Element | null} route child
 */
export const RouteChild: React.FC<IRouteChildProps> = ({
    route
}): JSX.Element | null => {
    const { title, render: { layout: Layout, child: Child } = {} } = route;

    // sets up page tab title
    useEffect(() => {
        document.title = title ?? '';
    }, [title]);

    if (!Child) return null;

    return Layout ? (
        <Layout>
            <Child />
        </Layout>
    ) : (
        <Child />
    );
};