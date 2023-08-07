import { Article } from '../../../models/article/types';

export interface CreateArticleProps {
    isOpen: boolean;
    handleCancel: () => void;
    article?: Article | null;
    refresh: () => void;
}
