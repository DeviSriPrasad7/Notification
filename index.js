const Notification = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return <p className={className}>{text}</p>;
};

const element = (
  //  Write your code here.
  <div className="notification-container">
    <h1>Notifications</h1>
    <div className="info-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        className="notification-image"
      />
      <Notification className="info-msg" text="Information message" />
    </div>
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="notification-image"
      />
      <Notification className="info-msg" text="Success message" />
    </div>
    <div className="warning-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        className="notification-image"
      />
      <Notification className="info-msg" text="Warning message" />
    </div>
    <div className="error-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        className="notification-image"
      />
      <Notification className="info-msg" text="Error message" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
