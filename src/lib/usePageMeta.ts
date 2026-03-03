import { useEffect } from 'react';

/**
 * Updates the document <title> and meta description for each page.
 * Call this at the top of every page component.
 */
export function usePageMeta(title: string, description?: string) {
    useEffect(() => {
        document.title = `${title} | Infinizy`;
        if (description) {
            let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
            if (meta) meta.content = description;
        }
    }, [title, description]);
}
