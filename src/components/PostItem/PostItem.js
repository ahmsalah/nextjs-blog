import Collapse from '@material-ui/core/Collapse';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';
// import PostForm from '../PostForm/PostForm';

function PostItem({ title, body, id, divider }) {
  const [deleteDisabled, setDeleteDisabled] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    // Delete Post By ID
    setDeleteDisabled(true);
  };

  return (
    <Grow in={!!title} timeout={800}>
      <div>
        <Collapse in={!isEditing}>
          <ListItem divider={divider}>
            <Link href={`/post/${id}`} passHref>
              <ListItemText primary={title} secondary={body} sx={{ cursor: 'pointer' }} />
            </Link>
            <IconButton
              disabled={deleteDisabled}
              onClick={handleDelete}
              edge="end"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => setIsEditing(true)} edge="end" aria-label="edit">
              <EditIcon />
            </IconButton>
          </ListItem>
        </Collapse>
        {/* <Collapse in={isEditing}>
          <ListItem sx={{ p: 0 }}>
            <PostForm
              editForm
              editPostId={id}
              editPostTitle={title}
              editPostBody={body}
              setIsEditing={setIsEditing}
            />
          </ListItem>
        </Collapse> */}
      </div>
    </Grow>
  );
}

PostItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  divider: PropTypes.bool,
  id: PropTypes.number,
};

export default memo(PostItem);
