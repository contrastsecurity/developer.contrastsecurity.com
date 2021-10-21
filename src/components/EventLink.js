import React from 'react';
import Link from '@docusaurus/Link';

export default function EventLink({url}){   
    return(
        <Link
        className="button button--secondary button--lg"
        href={url}>
            Event Link
            <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
        </Link>
    )
}