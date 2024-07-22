document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('new-post-form');
    const postsSection = document.getElementById('posts');

    postForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const postImage = document.getElementById('post-image').files[0];
        const postCaption = document.getElementById('post-caption').value;

        if (postImage || postCaption) {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            if (postCaption) {
                const captionElement = document.createElement('p');
                captionElement.textContent = postCaption;
                postElement.appendChild(captionElement);
            }

            if (postImage) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const imgElement = document.createElement('img');
                    imgElement.src = event.target.result;
                    postElement.appendChild(imgElement);
                };
                reader.readAsDataURL(postImage);
            }

            const postActions = document.createElement('div');
            postActions.classList.add('post-actions');

            const likeButton = document.createElement('button');
            likeButton.innerHTML = '<img src="like-icon.png" alt="Like"> Like';
            likeButton.addEventListener('click', () => {
                likeButton.innerHTML = likeButton.innerHTML.includes('Liked') ? '<img src="like-icon.png" alt="Like"> Like' : '<img src="liked-icon.png" alt="Liked"> Liked';
            });

            const commentButton = document.createElement('button');
            commentButton.innerHTML = '<img src="comment-icon.png" alt="Comment"> Comment';
            commentButton.addEventListener('click', () => {
                commentsSection.classList.toggle('hidden');
            });

            const shareButton = document.createElement('button');
            shareButton.innerHTML = '<img src="share-icon.png" alt="Share"> Share';
            shareButton.addEventListener('click', () => {
                const shareText = `${postCaption}\nCheck out this post: ${window.location.href}`;
                if (navigator.share) {
                    navigator.share({
                        title: 'Community Post',
                        text: shareText,
                        url: window.location.href
                    }).catch(console.error);
                } else {
                    navigator.clipboard.writeText(shareText).then(() => {
                        alert('Link copied to clipboard!');
                    });
                }
            });

            postActions.appendChild(likeButton);
            postActions.appendChild(commentButton);
            postActions.appendChild(shareButton);
            postElement.appendChild(postActions);

            const commentsSection = document.createElement('div');
            commentsSection.classList.add('comments-section', 'hidden');

            const commentInput = document.createElement('input');
            commentInput.setAttribute('placeholder', 'Add a comment...');

            const sendCommentButton = document.createElement('button');
            sendCommentButton.textContent = 'Send';
            sendCommentButton.addEventListener('click', () => {
                if (commentInput.value.trim()) {
                    const commentItem = document.createElement('li');
                    commentItem.textContent = commentInput.value;
                    commentsList.appendChild(commentItem);
                    commentInput.value = '';
                }
            });

            const commentsList = document.createElement('ul');
            commentsList.classList.add('comments-list');

            commentsSection.appendChild(commentInput);
            commentsSection.appendChild(sendCommentButton);
            commentsSection.appendChild(commentsList);
            postElement.appendChild(commentsSection);

            postsSection.prepend(postElement);

            // Reset form
            postForm.reset();
        }
    });
});
