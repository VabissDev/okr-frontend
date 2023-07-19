import { EmptyState } from '@shopify/polaris'
import { Centralizer, EmptyDataWrapper } from '@/styled/containers'

export const EmptyData = ({ heading, description, action, icon }) => {

    const defaultPath = "https://static.vecteezy.com/system/resources/previews/010/856/652/non_2x/no-result-data-document-or-file-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-etc-vector.jpg"
    
    return (
        <Centralizer>
            <EmptyDataWrapper>
                <EmptyState
                    heading={heading || "Sorry, no results found."}
                    action={action && {
                        content: action.title,
                        url: action.path
                    }}
                    image={ icon?.url || defaultPath }
                >
                    <p>{description || "Something went wrong. The link you followed may be broken, or page may have been deleted"}</p>
                </EmptyState>
            </EmptyDataWrapper>
        </Centralizer>
    )
}
