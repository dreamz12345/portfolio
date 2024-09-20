import { useEffect } from "react";
export const useDocumentTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - ŁS Portfolio`;
    }, [title]);

    return null;
}