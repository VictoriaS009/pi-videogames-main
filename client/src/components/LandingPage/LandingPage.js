import { Link } from "react-router-dom";

const LandingPage = () => {
  // Estilos en línea
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: '20px',
    width: '100%',
  };

  const welcomeStyle = {
    display: 'flex',
    textAlign: 'center',
    marginBottom: '20px',
    flexDirection: 'column',
    gap: '10px',
  };


  const titleContainer = {
    backgroundColor: '#000',
    padding: '20px',
    borderRadius: '10px'

  }
  const driverStyle = {
    color: '#fff' // GitHub blue
  };

  const messageStyle = {
    fontSize: '1.2em',
    color: '#fff' // GitHub gray
  };

  const buttonSTARTStyle = {
    backgroundColor: '#28a745', // GitHub green
    color: '#ffffff',
    padding: '10px 20px',
    fontSize: '1.2em',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  };

  const buttonSTARTHover = {
    backgroundColor: '#218838' // Darker green on hover
  };

  const F1Style = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px'
  };

  const iframeStyle = {
    width: '100%',
    maxWidth: '560px',
    height: '315px',
    marginBottom: '20px'
  };

  return (
    <div style={containerStyle}>
      <div style={welcomeStyle}>
        <div style={titleContainer}>

        <h1 style={driverStyle}>Video Games</h1>
        <h4 style={messageStyle}>To view information about Video Games click on the <strong>START</strong> button</h4>
        </div>
        <Link to={"/videogames"}>
          <button style={buttonSTARTStyle} onMouseOver={e => e.currentTarget.style.backgroundColor = buttonSTARTHover.backgroundColor} onMouseOut={e => e.currentTarget.style.backgroundColor = buttonSTARTStyle.backgroundColor}>START</button>
        </Link>
      </div>
      <div style={F1Style}>
        <iframe src="https://www.youtube.com/embed/cWOkHQXw0JQ?si=5XZJRfbqEtRR7vB4" title="Super Mario Bros Classic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/Yz9ThWQ0VAc?si=eKO4meHRD-RptTFB" title="Mario Party" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/Ty59XeBGVww?si=Ss_gPLPjWr8gwoj8" title="GTA 5 Crazy Ragdolls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/Or5HB1Lo8b0?si=B8K7Tk8I33TkrjPE" title="Donkey Kong Country" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default LandingPage;


