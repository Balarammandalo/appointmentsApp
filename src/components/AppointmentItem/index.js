// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentsItem, startToggle} = props
  const {id, title, date, isStarted} = appointmentsItem

  const starFilledImg = isStarted
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onStartChange = () => {
    startToggle(id)
  }

  return (
    <li className="starFilledContainer">
      <div className="header-container">
        <p className="title">{title}</p>
        <button
          data-testid="star"
          type="button"
          className="start-button"
          onClick={onStartChange}
        >
          <img src={starFilledImg} alt="star" className="star" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}

export default AppointmentItem
