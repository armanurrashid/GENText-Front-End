// import React from 'react';
import React, { useEffect } from 'react';
import './Dashboard.css';
const Dashboard = () => {

    useEffect(() => {

        let valueDisplays = document.querySelectorAll(".num");
        let interval = 2000;

        valueDisplays.forEach((valueDisplay) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));

            if (isNaN(endValue)) {
                console.error("Invalid data-val attribute:", valueDisplay);
                return;
            }

            let totalSteps = endValue - startValue;
            let duration = Math.floor(interval / totalSteps);

            let counter = setInterval(function () {
                startValue += 1;
                valueDisplay.textContent = startValue;

                if (startValue === endValue) {
                    clearInterval(counter);
                }
            }, duration);
        });
    }, []);

    return (
        <div>
            <div className='MainDiv'>
                <div className="wrapper">
                    <div className="containers">
                        <i className="fa-solid fa-circle-check"></i>
                        <span className="num" data-val="16">000</span>
                        <span className="text">Successful</span>
                    </div>
                    <div className="containers">
                        <i className="fa-solid fa-circle-exclamation"></i>
                        <span className="num" data-val="3">000</span>
                        <span className="text">Unsuccessful</span>
                    </div>

                    <div className="containers">
                        <i className="fa-solid fa-spinner"></i>
                        <span className="num" data-val="2">000</span>
                        <span className="text">Processing</span>
                    </div>

                    <div className="containers">
                        <i className="fa-solid fa-plus"></i>
                        <span className="num" data-val="21">000</span>
                        <span className="text">Total</span>
                    </div>
                </div>

            </div>

            <section>
                <h3 class="pt-5">Responsive Table</h3>
                <div class="table-responsive" id="no-more-tables">
                    <table class="table bg-white">
                        <thead class="bg-dark text-light">
                            <tr>
                                <th>File Name</th>
                                <th>Upload Date</th>
                                <th>Total Page</th>
                                <th>Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-title="file-name">Alisha</td>
                                <td data-title="upload-date">Roy</td>
                                <td data-title="total-page">20</td>
                                <td data-title="status">Kerala</td>

                            </tr>
                            <tr>
                                <td data-title="file-name">Barun</td>
                                <td data-title="upload-date">Basu</td>
                                <td data-title="total-page">24</td>
                                <td data-title="status">Goa</td>

                            </tr>
                            <tr>
                                <td data-title="First Name">Deena</td>
                                <td data-title="upload-date">Sharma</td>
                                <td data-title="total-page">22</td>
                                <td data-title="status">Bihar</td>

                            </tr>
                            <tr>
                                <td data-title="First Name">Suman</td>
                                <td data-title="upload-date">Kashyap</td>
                                <td data-title="total-page">26</td>
                                <td data-title="status">Assam</td>

                            </tr>
                            <tr>
                                <td data-title="First Name">Seema</td>
                                <td data-title="upload-date">Bose</td>
                                <td data-title="total-page">23</td>
                                <td data-title="status">Karnataka</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>

    );
};

export default Dashboard;
