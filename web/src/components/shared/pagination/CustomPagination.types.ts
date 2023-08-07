export interface CustomPaginationProps {
    page: number;
    total: number;
    changePageNumber: (pageNumber: number) => void;
    pageSize: number;
}
