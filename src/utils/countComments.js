const countComments = (commentsArray) => {
    let count = 0;

    // this function uses for traverse all comments, if nested still > 0
    // then we continue traverse
    const traverseComment = (comments) => {
        for (const comment of comments){
            count++;
            if (comment.items && comment.items.length > 0) {
                traverseComment(comment.items);
            }
        }
    }

    traverseComment(commentsArray);
    return count;
}

export default countComments;