import React, { useEffect } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { getAuthHeader } from '../../providers/AuthProvider.jsx';
import routes from '../../roures/routes.js';
import Channels from '../channels/Channels.jsx';
import Messages from '../messages/Messages.jsx';
import { actions as channelsActions } from '../../slices/ChannelsSlice.js';
import { actions as messagesActions } from '../../slices/messageSlice.js';
import toastConfig from '../../toastCfg.js';
import useAuth from '../../hooks/UseAuth.jsx';

const MainChatPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(routes.getData(), { headers: getAuthHeader() });
        dispatch(channelsActions.addChannels(data.channels));
        dispatch(messagesActions.addMessages(data.messages));
      } catch (err) {
        if (err.response.status === 401) {
          toast.error(t('toast.authError'), toastConfig);
          auth.logOut();
        } else {
          toast.error(t('toast.networkError'), toastConfig);
        }
      }
    })();
  }, [dispatch]);

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        <Channels />
        <Messages />
      </Row>
    </Container>

  );
};

export default MainChatPage;
