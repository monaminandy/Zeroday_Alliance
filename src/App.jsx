import logo from './logo1.jpg'
import back from './back.png'
import event1 from './event1.jpeg'
import event2 from './event2.jpeg'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className='header'>
        <div className='left-header'> 
        <img className='image' src={logo} alt="Logo" />
        <a href='/' className='title'>ZERODAY ALLIANCE</a>
        </div>
        <div className='middle-header'>
          <a className='nav' href='#home'>HOME</a>
          <a className='nav' href='#events'>EVENTS</a>
          <a className='nav' href='#team'>TEAM</a>
          <a className='nav' href='#faqs'>FAQS</a>
          <a className='nav' href='#contact'>CONTACT</a>
        </div>
        <div className='right-header'>
          <button className='headerbutton'>CLI</button>
        </div>
      </div>
      <div className='fullcontent' id='home'>
        <div className='left-content'>
          <p className='content'>
          CYBERSECURITY AND ETHICAL HACKING COMMUNITY FOR SNU STUDENTS
          </p>
          <button className='join'>JOIN</button>
        </div>
        <div className='right-content'>
        <img className='image1' src={back} alt="Security Image" />
        </div>
      </div>
      <div className='event' id='events'>
        <div className='top-event'>
          <p className='event-text'>events@zerodayalliance:~$ session_details</p>
        </div>
        <div></div>
        <div className='event-pic'>
          <img className='event1' src={event1} alt="Event" />
        </div>
      </div>
      
    </div>
  );
}

export default App;
