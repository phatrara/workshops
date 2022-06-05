// import PropTypes from 'prop-types';



function Item_d (props){
    const {sex,firstName,lastName,numberId,phone,address,note}= props
    return (
    <li>{sex}{firstName}<span></span>{lastName}{numberId}{phone}{address}{note}</li>
    )
}

export default Item_d;