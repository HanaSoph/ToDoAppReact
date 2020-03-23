import React from "react";
import "./Lists.css";

function Lists() {
    return (
        <section>
            <div className="row m-0 justify-content-center">
                <div className="col-sm-6 mr-sm-3">
                    <div class="todotitle">
                        <p> To Do (4)</p>
                    </div>

{/* TO DO TASK LIST */}

                    <div className="row d-flex p-0">
                        <div className="col-2 px-0 pt-1 pb-1">
                            <button type="button" class="btn">✔</button>
                        </div>
                        <div className="col-8 p-2 list-group-item">
                            Decide on flowers
                        </div>
                        <div className="col-2 px-0 pt-1 pb-1">
                            <button className="btn"><i class="fa fa-trash"></i></button>
                        </div>
                    </div>

                    <div className="row d-flex p-0">
                        <div className="col-2 px-0 pt-1 pb-1">
                            <button type="button" class="btn">✔</button>
                        </div>
                        <div className="col-8 p-2 list-group-item">
                            Book photographer
                        </div>
                        <div className="col-2 px-0 pt-1 pb-1">
                            <button className="btn"><i class="fa fa-trash"></i></button>
                        </div>
                    </div>

                    <div className="row d-flex p-0">
                        <div className="col-2 px-0 pt-1 pb-1">
                            <button type="button" class="btn">✔</button>
                        </div>
                        <div className="col-8 p-2 list-group-item">
                            Write guest list
                        </div>
                        <div className="col-2 px-0 pt-1 pb-1">
                            <button className="btn"><i class="fa fa-trash"></i></button>
                        </div>
                    </div>

                    <div className="row d-flex p-0">
                        <div className="col-2 px-0 pt-1 pb-1">
                            <button type="button" class="btn">✔</button>
                        </div>
                        <div className="col-8 p-2 list-group-item">
                            Design invitations
                        </div>
                        <div className="col-2 px-0 pt-1 pb-1">
                            <button className="btn"><i class="fa fa-trash"></i></button>
                        </div>
                    </div>
                </div>

{/* COMPLETED TASKS LISTS */}

                <div className="col-sm-5 mr-sm-2 pb-5">
                    <div className="todotitle pt-3 pt-sm-0">
                        <p> Complete</p>
                    </div>
                    <div className="row list-group-item disabled">
                        <s> Research photographers</s>
                    </div>

                    <div className="row list-group-item disabled">
                        <s>Book the venue</s>
                    </div>

                    <div className="row list-group-item disabled">
                        <s>Decide on theme</s>
                    </div>

                </div>
            </div>
        </section>

    )
}
export default Lists;