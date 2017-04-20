const websocketConf = {
  port: 8081,
  host: 'localhost'
};

// Helper function to create a standard query string from a parameter object
const objectToQueryString = (obj) => {
  let queryParts = [];
  for(const p in obj)
    if (obj.hasOwnProperty(p)) {
      queryParts.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return queryParts.join('&');
};

export const connect = ({onOpen, onClose, onMessage, parameters = {}}) => {
  // `ws` signifies the websocket protocol
  // `wss` would be secure websocket protocol (like https)
  const websocketConnection = new WebSocket(
    `ws://${websocketConf.host}:${websocketConf.port}/?${objectToQueryString(parameters)}`
  );

  websocketConnection.onopen = () => onOpen();

  websocketConnection.onclose = (event) => {
    // WebSocket might be disconnected by a server with a specific reason
    const reason = event.reason;
    onClose({reason});
  };

  websocketConnection.onmessage = (message) => {
    // In this example `data` is JSON encoded in an UTF-8 String
    const payload = message.data;

    let parsedMessage;
    try {
      parsedMessage = JSON.parse(payload);
    } catch (error) {
      console.error('error parsing websocket message', error, payload); // eslint-disable-line no-console
      return;
    }

    onMessage(parsedMessage);
  };

  const close = () => {
    websocketConnection.close();
  };

  return {
    close: close
  };
};
