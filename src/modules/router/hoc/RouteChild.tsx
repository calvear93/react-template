import { IRouteDefinition } from '@router';
import { useEffect } from 'react';

export interface IRouteChildProps {
    route: IRouteDefinition;
}

/**
 * Renders a route.
 *
 * @param {IRouteChildProps} props
 *
 * @returns {React.FC<IRouteChildProps> | null} route child HOC
 */
export const RouteChild: React.FC<IRouteChildProps> = ({ route }) => {
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
