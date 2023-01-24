export const store: import("@reduxjs/toolkit").EnhancedStore<{
    filter: {
        categoryID: number;
    };
    cart: {
        totalPrice: number;
        items: any[];
    };
}, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
    filter: {
        categoryID: number;
    };
    cart: {
        totalPrice: number;
        items: any[];
    };
}, import("redux").AnyAction, undefined>]>;
//# sourceMappingURL=store.d.ts.map