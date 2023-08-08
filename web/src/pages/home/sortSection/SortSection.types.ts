import { SortDirection } from '../../../models/common/types';

export interface SortSectionProps {
    sort: (sortDirection: SortDirection) => void;
}
