const element = (
  <div className='bg-container'>
    <h1 className='head'>Congratulations</h1>
    <div className='color-container'>
      <img
        className='image'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
      />
      <h1 className='heading'>Kiran D</h1>
      <p classname='para'>
        Vishu institute of computer educations and technology Bhimavaram.
      </p>
      <img
        className='image'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
