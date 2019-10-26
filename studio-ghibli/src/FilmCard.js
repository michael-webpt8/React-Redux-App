import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';

function FilmCard(props) {
  const { title, release_date, description, rt_score } = props.film;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <FilmCards>
        <CardContent>
          <Typography color='secondary' gutterBottom>
            Released: {release_date}
          </Typography>
          <Typography variant='h4' component='h2'>
            {title}
          </Typography>
          <Button onClick={handleOpen} variant='contained' color='primary'>
            More Info
          </Button>
        </CardContent>
      </FilmCards>
      <ModalDisplay
        aria-labelledby='modal-title'
        aria-describedby='modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <FadeDisplay in={open}>
          <div>
            <h2 id='transition-modal-title'>{title}</h2>
            <p>Release Date: {release_date}</p>
            <p>Rating Score: {rt_score}</p>
            <p id='transition-modal-description'>{description}</p>
          </div>
        </FadeDisplay>
      </ModalDisplay>
    </>
  );
}
export default FilmCard;

const FilmCards = styled(Card)`
  min-width: 275px;
  max-width: 500px;
  margin: 10px;
`;

const ModalDisplay = styled(Modal)`
  display: 'flex';
  alignitems: 'center';
  justifycontent: 'center';
  border: 2px solid #000;
  box-shadow: 5px 10px #888888;
`;

const FadeDisplay = styled(Fade)`
  background-color: white;
  max-width: 650px;
  min-width: 320px;
  border-radius: 7px;
  margin: 0 auto;
  padding: 15px;
  margin-top: 25px;S
`;
