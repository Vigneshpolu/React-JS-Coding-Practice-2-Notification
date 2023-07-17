const Notification = (props) => {
  //  Write your code here.
  const { className, iconUrl, messageText } = props;

  return (
    <div className={className}>
      <img className="image" src={iconUrl} />
      <p className="para">{messageText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="container">
      <h1 className="heading">Notifications</h1>
      <div className="message-container">
        <Notification
          className="primary-bg-container"
          iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          messageText="Information Message"
        />
        <Notification
          className="secondary-bg-container"
          iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          messageText="Success Message"
        />
        <Notification
          className="success-bg-container"
          iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          messageText="Warning Message"
        />
        <Notification
          className="danger-bg-container"
          iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          messageText="Danger Message"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
