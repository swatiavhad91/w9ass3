import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../store/actions/usersActions'

class Users extends Component {
    componentDidMount() {
        this.props.getUsers()

    }
    render() {
        const { users } = this.props.users
        console.log(users)


        return (
            <div>
                {users.map(u =>
                    <React.Fragment key={u.id}>
                        
                        <div className="card" style={{ width: "25%", textAlign: "center", marginLeft: "35%" }}>
                            <img src="https://th.bing.com/th/id/OIP.wBTCbT-C3Lpi15wsAAlItQHaKA?pid=ImgDet&rs=1" class="card-img-top img-fluid " style={{ height: "300px" }} alt="..." />
                            <div className="card-body">

                                <h5 className="card-title" style={{ fontWeight: "bold" }}>{u.name}</h5>
                                <p className="card-subtitle mb-2 text-muted">{u.email}</p>
                                <p className="card-text">{u.address.street},<br></br>
                                    {u.address.suite},
                                    {u.address.city},
                                    {u.address.zipcode}, Lat
                                    {u.address.geo.lat}, Lang-
                                    {u.address.geo.lng}</p>


                                <p className="card-text"><b>Phone :</b>{u.phone}<br></br>
                                    <b>Website : </b>{u.website}</p>
                                <p className="card-text" style={{ backgroundColor: "black", color: "white", fontWeight: "bolder" }}>Company : {u.company.name}<br></br>
                                    {u.company.catchPhrase}<br></br>
                                    {u.company.bs}</p>


                            </div>
                        </div>


                    </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ users: state.users })

export default connect(mapStateToProps, { getUsers })(Users)