export const filterSlice: import("@reduxjs/toolkit").Slice<{
    categoryID: number;
}, {
    setCategoryID(state: import("immer/dist/internal").WritableDraft<{
        categoryID: number;
    }>, action: {
        payload: any;
        type: string;
    }): void;
}, "filter">;
export const setCategoryID: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>;
declare const _default: import("redux").Reducer<{
    categoryID: number;
}, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=filterSlice.d.ts.map