import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateLikedPosts } from '../store/reducers';
// import './style.css';
import {
    MediaCard, 
    // Icon,
} from '@shopify/polaris';

// import {
//     HeartMajor,
// } from '@shopify/polaris-icons';

const Post = ({ data }) => {
    const [firstMounted, setFirstMounted] = useState(true);
    const [liked, setLiked] = useState(false);
    let likedPosts = useSelector(state => state.reducer);
    console.log(likedPosts);
    const dispatch = useDispatch();

    const handleLiked = useCallback((r, liked) => {
        setFirstMounted(false);
        // setLiked((liked) => !liked);
        setLiked(!liked);
        // setLiked(likedPosts.some(e => e.title === r.title) ? false : true);
        dispatch(updateLikedPosts(r));
        // likedPosts = selector(state => state.reducer);
    }, []);

    // const iconColor = liked ? 'highlight' : 'base';
    // const content = liked ? 'Unlike' : 'Like';

    const resultLists = data.map(r => (
        <MediaCard
            key={r.date}
            title={r.title}
            primaryAction={{
                content: firstMounted ? (likedPosts.some(e => e.title === r.title) ? 'Unlike' : 'Like') : (liked ? 'Unlike' : 'Like'),
                onAction: () => handleLiked(r, (likedPosts.some(e => e.title === r.title) ? true : false)),
                icon: <span className="material-icons">
                favorite
                </span>
            }}
            description={r.explanation}
            popoverActions={[{content: "Dismiss", onAction: () => {}}]}
        >
            <img
                key={r.date}
                alt={r.title}
                width="100%"
                height="100%"
                style={{
                    objectFit: "cover",
                    objectPosition: "center",
                }}
                src={r.url}
            />
        </MediaCard>        
    ));
    return (
        <ul>{resultLists}</ul>
    );
};
export default Post;

Post.propTypes = {
    data: PropTypes.array
};