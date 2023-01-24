export const cartSlice: import("@reduxjs/toolkit").Slice<{
    totalPrice: number;
    items: any[];
}, {
    addItem(state: import("immer/dist/internal").WritableDraft<{
        totalPrice: number;
        items: any[];
    }>, action: {
        payload: any;
        type: string;
    }): void;
    removeItem(state: import("immer/dist/internal").WritableDraft<{
        totalPrice: number;
        items: any[];
    }>, action: {
        payload: any;
        type: string;
    }): void;
    clearItems(state: import("immer/dist/internal").WritableDraft<{
        totalPrice: number;
        items: any[];
    }>): void;
}, "filter">;
export const addItem: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>;
export const removeItem: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>;
export const clearItems: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
declare const _default: import("redux").Reducer<{
    totalPrice: number;
    items: any[];
}, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=cartSlice.d.ts.map