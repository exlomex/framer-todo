export enum filterValues {
    ALL = 'All',
    COMPLETED = 'Complete',
    UNCOMPLETED = 'Uncomplete',
}

export interface FilterSliceSchema {
    value: filterValues
}
