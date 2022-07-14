import { FC } from "react";
import { Card } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";

interface LikesItemProps {
    likes: Array<string>;
    nickname: string;
    id: string;
    unlike: (id: string) => void;
    like: (id: string) => void
}

const LikesItem: FC<LikesItemProps> = ({likes, nickname, unlike, like, id}) => {
    return (
            <div className="d-flex align-items-center">
            {likes.includes(nickname)
                ? <HeartFill onClick={() => unlike(id)}/>
                : <Heart onClick={(e) => like(id)}/>
            }
            <Card.Text className="ms-1">likes: {likes.length}</Card.Text>
        </div>
    )
}

export default LikesItem;