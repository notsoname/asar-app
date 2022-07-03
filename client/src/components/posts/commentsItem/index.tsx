import { FC, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";


interface CommentsProps {
    comments: Array<any>;
    onCreateComment: (e: React.MouseEvent<HTMLButtonElement>, id: string, text: string) => void;
    id: string;
}

const CommentsItem: FC<CommentsProps> = ({comments, onCreateComment, id}) => {
    const [comment, setComment] = useState<string>("");

    return (
        <div className="mt-2">
            {comments.length > 100 
                ? <>
                    <strong>посмотреть все</strong>
                    <div>{comments[0].text}</div>
                  </>
                : comments?.map(comment => (
                    <div key={comment._id}>
                        <strong>{comment.postedBy}</strong> 
                        <span className="ms-1">{comment.text}</span>
                    </div>
                ))
            }
            <InputGroup className="mb-4 mt-2">
                    <Form.Control
                        placeholder=""
                        aria-label=""
                        aria-describedby=""
                        value={comment} 
                        onChange={e => setComment(e.target.value)}
                    />
                    <Button 
                        variant="primary"
                        disabled={!comment} 
                        onClick={(e) => onCreateComment(e, id, comment)}
                        >comment</Button>
            </InputGroup>
        </div>
    )
}

export default CommentsItem;