import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import {
  BookmarkBorder,
  ChatBubbleOutline,
  Favorite,
  FavoriteBorder,
  MoreHoriz,
  Telegram,
} from "@mui/icons-material";

function Post({ user, userImage, postImage, likes, timestamp, description }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar>
            {userImage == null ? (
              user.charAt(0).toUpperCase()
            ) : (
              <img className="post__avatarImage" src={userImage}></img>
            )}
          </Avatar>
          <div className="post__headerName">
            {user} • <span>{timestamp}</span>
          </div>
        </div>

        <MoreHoriz />
      </div>
      <div className="post__image">
        <img src={postImage} />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorder className="postIcon" />
            <ChatBubbleOutline className="postIcon" />
            <Telegram className="postIcon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorder className="postIcon" />
          </div>
        </div>
        Liked by {likes} people
      </div>
      <div className="post__description">
        <span>{user}</span>
        {description}
      </div>
      <div className="post__comment">댓글 1025개 모두 보기</div>
      <div className="post__commentExample">
        <div>
          <span>_celeste0423</span>
          넘나 예쁜 미뇽이
        </div>
        <Favorite className="commentIcon" />
      </div>
    </div>
  );
}

export default Post;
