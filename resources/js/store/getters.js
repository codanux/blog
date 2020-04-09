const getters = {
    user: state => state.user.user,
    permission_routes: state => state.permission.routes,
    addRoutes: state => state.permission.addRoutes,
    errors: state => state.errors.errors
};
export default getters;
