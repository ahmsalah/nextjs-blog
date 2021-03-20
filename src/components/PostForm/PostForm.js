import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
import React, { memo, useState } from 'react';

function PostForm({ editPostTitle, editPostBody, editPostId, setIsEditing }) {
  const isEdit = !!editPostId;
  const initialFields = {
    title: editPostTitle || '',
    body: editPostBody || '',
  };
  const [fields, setFields] = useState(initialFields);

  const [validation, setValidation] = useState({
    title: '',
    body: '',
  });

  const [focused, setFocused] = useState(false);
  const { title, body } = fields;

  const reset = () => {
    if (isEdit) setIsEditing(false);
    setFocused(false);
    setFields(initialFields);
    setValidation({
      title: '',
      body: '',
    });
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      if (isEdit) {
        // editPost({ id: editPostId, title, body });
        setIsEditing(false);
        return;
      }
      // addPost({ title, body });
      setFields(initialFields);
    } catch (error) {
      console.log(error);
    }
    reset();
  };
  const validate = (name, value) => {
    setValidation(state => ({ ...state, [name]: !value.length ? 'Incorrect entry.' : '' }));
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFields(state => ({ ...state, [name]: value }));
    validate(name, value);
  };
  const handleBlur = event => {
    const { name, value } = event.target;
    if (!title.length && !body.length) {
      reset();
      return;
    }
    validate(name, value);
  };

  return (
    <Box
      component="form"
      sx={{ p: 2, width: '100%' }}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="post-title"
          name="title"
          label={isEdit ? 'Edit a post' : 'Start a post'}
          multiline
          maxRows="2"
          value={title}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={handleBlur}
          fullWidth
          error={!!validation.title.length}
          helperText={validation.title}
        />
      </div>
      <Collapse in={focused}>
        <div>
          <TextField
            sx={{
              my: 3,
              '& legend > span': {
                p: isEdit ? '0' : '0px 5px 0px 5px',
              },
            }}
            id="post-body"
            name="body"
            label={isEdit ? '' : 'What do you want to talk about?'}
            multiline
            minRows="4"
            maxRows="6"
            value={body}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            onFocus={() => setFocused(true)}
            onBlur={handleBlur}
            error={!!validation.body.length}
            helperText={validation.body}
          />
        </div>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={reset} sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button
            disabled={!title.length || !body.length}
            type="submit"
            value="Submit"
            variant="contained"
          >
            {isEdit ? 'Edit Post' : 'Add Post'}
          </Button>
        </Box>
      </Collapse>
    </Box>
  );
}

export default memo(PostForm);
