import React, { useState } from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions";
import Post from "./posts/Post";

function Timeline() {
  const [posts, setPost] = useState([
    {
      user: "cheminying",
      userImage:
        "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/366528506_959174448489570_221189893666800570_n.jpg?stp=dst-jpg_s100x100&_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=phx1JJnKF0cAX8eLkXO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-ssn1-1.cdninstagram.com&oh=00_AfAmVvFfnt8IPH941OsRmhOTVAwBaCx-MM6nyN-sLPw_UA&oe=64F6685F",
      postImage:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/372333337_316874644152444_7290894625107656615_n.jpg?stp=dst-jpg_s403x403&_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_ohc=_nQzS1u5prkAX9394Gg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS5UMvTsXgq4r9Ze_5H6zR0wnTAPO9Q0_7WMUWzYyIsZA&oe=6518CA24",
      likes: 1235,
      timestamp: "11h",
      description: "난 왜이렇게 귀여울까...",
    },
    {
      user: "cheminying",
      userImage:
        "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/366528506_959174448489570_221189893666800570_n.jpg?stp=dst-jpg_s100x100&_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=phx1JJnKF0cAX8eLkXO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-ssn1-1.cdninstagram.com&oh=00_AfAmVvFfnt8IPH941OsRmhOTVAwBaCx-MM6nyN-sLPw_UA&oe=64F6685F",
      postImage:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/371894094_599466785596045_7713877918970156395_n.jpg?stp=dst-jpg_s403x403&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=gKWIAeZEhBQAX_dAiSH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQGfWt6Ibid3xnrRVv-fA3Llh3DvfS3tV9MfqZaneRSoQ&oe=6518C3CB",
      likes: 4235,
      timestamp: "3d",
      description: "난 너무 예뻐서 문제야 ㅠㅠ",
    },
    {
      user: "cheminying",
      userImage:
        "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/366528506_959174448489570_221189893666800570_n.jpg?stp=dst-jpg_s100x100&_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=phx1JJnKF0cAX8eLkXO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-ssn1-1.cdninstagram.com&oh=00_AfAmVvFfnt8IPH941OsRmhOTVAwBaCx-MM6nyN-sLPw_UA&oe=64F6685F",
      postImage:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/371481617_239307011934439_7141296043704818600_n.jpg?stp=dst-jpg_s403x403&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=scO_OmqBJuoAX9ZSuel&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQVD2kKzwCpQG8HjTqBC_1TIhi75tWY_Xo9F9lz5Gqc8g&oe=6518B3FE",
      likes: 5535,
      timestamp: "5d",
      description: "우리 예쁘죠?",
    },
    {
      user: "celeste0423",
      userImage: null,
      postImage:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/371481617_239307011934439_7141296043704818600_n.jpg?stp=dst-jpg_s403x403&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=scO_OmqBJuoAX9ZSuel&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQVD2kKzwCpQG8HjTqBC_1TIhi75tWY_Xo9F9lz5Gqc8g&oe=6518B3FE",
      likes: 5,
      timestamp: "8d",
      description: "예쁜 미뇽",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              userImage={post.userImage}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
              description={post.description}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
