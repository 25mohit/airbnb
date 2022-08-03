import './UserOptions.scss';

const UserOptions = () => {
  return (
    <div className='user-option-main'>
            <div className="user-option-head">
                    <p className="user-signup-link">Sign up</p>
                    <p className="user-option">Log in</p>
            </div>
            <div className="user-option-footer">
                    <p className="user-option">Host your home</p>
                    <p className="user-option">Host an experience</p>
                    <p className="user-option">Help</p>
            </div>
    </div>
  )
}

export default UserOptions