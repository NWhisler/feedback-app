import PropTypes from 'prop-types'

function Button({children, version, type, isDisabled}) {

    return <div>

                <button type={type} disabled={isDisabled} className={'btn-${version}'}>

                        {children}

                </button>

           </div>

}

Button.defaultProps = {

    version : 'primary',
    type : 'button',
    isDisabled : false,

}

Button.propTypes = {

    children : PropTypes.node,
    version : PropTypes.string,
    type : PropTypes.string,
    isDisabled : PropTypes.bool,

}

export default Button