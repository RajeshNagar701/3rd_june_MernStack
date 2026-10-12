import React from 'react'

function Add_categories() {
    return (
        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Add Categories</h6>
                        <h1 className="mb-5">Add Categories</h1>
                    </div>
                    <div className="row g-4">

                        <div className="offset-md-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="email" placeholder="Email" />
                                            <label htmlFor="Email">Categories Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="file" className="form-control" id="subject" placeholder="Password" />
                                            <label htmlFor="Password">Upload Image</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Add</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add_categories