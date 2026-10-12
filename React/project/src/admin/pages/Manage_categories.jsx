import React from 'react'

function Manage_categories() {
    return (
        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Manage Categories</h6>
                        <h1 className="mb-5">Manage Categories</h1>
                    </div>
                    <div className="row g-4">

                        <div className="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Category Name</th>
                                        <th>Image</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Developing</td>
                                        <td><img src="" alt="" /></td>
                                        <td>
                                            <button className='btn btn-danger'>Delete</button>
                                            <button className='btn btn-primary'>Edit</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Developing</td>
                                        <td><img src="" alt="" /></td>
                                        <td>
                                            <button className='btn btn-danger'>Delete</button>
                                            <button className='btn btn-primary'>Edit</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manage_categories