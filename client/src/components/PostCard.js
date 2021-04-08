import React, { useContext } from 'react';
import { Button, Grid, Icon, Label, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';
import MyPopup from '../util/MyPopup';

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes }
}) {
  const { user } = useContext(AuthContext);

  return (
    <Grid.Column>
      <Segment raised>
        <Link as={Link} to={`/posts/${id}`}>
          <Label as='a' color='blue' ribbon>
            @{username}
          </Label>
          <span>{moment(createdAt).fromNow(true)} ago</span>

          <div className="post-content">{body}</div>
        </Link>
        <LikeButton user={user} post={{ id, likes, likeCount }} />
        <MyPopup content="Comment on post">
          <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
            <Button color="blue" basic>
              <Icon name="comments" />
            </Button>
            <Label basic color="blue" pointing="left">
              {commentCount}
            </Label>
          </Button>
        </MyPopup>
        {
          user && user.username === username &&
          <>
            <DeleteButton post={{ id }} />
          </>
        }
      </Segment>
    </Grid.Column>

  );
}

export default PostCard;
