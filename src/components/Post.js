import React, { useState, useCallback } from 'react';
// import './style.css';
import {
    MediaCard, 
    Icon
} from '@shopify/polaris';

import {
    HeartMajor
} from '@shopify/polaris-icons';

const Post = ({ data }) => {
    const [liked, setLiked] = useState(false);
        
    const handleLiked = useCallback(() => {
        setLiked((liked) => !liked);
    }, []);

    const iconColor = liked ? 'highlight' : 'base';
    const content = liked ? 'Unlike' : 'Like';

    const resultLists = data.map(r => (
        <MediaCard
            key={r.date}
            title={r.title}
            primaryAction={{
                content: content,
                icon: <Icon source={HeartMajor} color={iconColor} />,
                onAction: handleLiked,
            }}
            description={r.explanation}
            popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
        >
            <img
                alt={r.title}
                width="100%"
                height="100%"
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
                src={r.url}
            />
        </MediaCard>
    ))
    return (
        <ul>{resultLists}</ul>
    );
};
export default Post;