import React from 'react';
import user from "../Images/user.png";
import './Profile.css';
const Product = () => {
    return (
        <div class="text-center py-5">
            {/* <h3 >Building Team</h3>
            <h4 class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, explicabo.</h4> */}
            <div class="row row-cols-1 row-cols-md-3 g-4 py-5 d-flex justify-content-center">
                <div class="col">
                    <div class="card profileCard">
                        <div>
                            <img src={user} alt="..." class="card-img-top"></img>
                        </div>
                        <div class="card-body mt-2">
                            <h5 class="card-title">Leanne Graham</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, neque.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;