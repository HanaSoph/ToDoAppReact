import React from "react";
import "./Lists.css";

function Lists() {
    return (
        <section>

            <div className="d-flex">
                <div className="col mr-3">
                    <div class="todotitle">
                        <p> To Do</p>
                    </div>
                    <div className="row list-group-item d-flex">
                        <div className="col-1">
                            <button type="button" class="btn btn-warning">Done</button>
                        </div>
                        <div className="col-9">
                            Decide on flowers
                        </div>
                        <div className="col-1">
                            bin
                        </div>
                    </div>

                    <div className="row list-group-item">
                        Book photographer
                        </div>

                    <div className="row list-group-item">
                        Write guest list
                        </div>

                    <div className="row list-group-item">
                        Design invitations
                        </div>
                </div>

                <div className="col">
                    <div class="todotitle">
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



        // <div className="col-sm-6">
        //                 <div className="todotitle">
        //                     <p> To Do</p>
        //                 </div>
        //                 <ul className="list-group">
        //                     <li className="list-group-item">Decide on flowers</li>
        //                     <li className="list-group-item">Book photographer</li>
        //                     <li className="list-group-item">Write guest list</li>
        //                     <li className="list-group-item">Design invitations</li>
        //                 </ul>
        //             </div>


        //             <div className="col-sm-6">
        //                 <div className="todotitle">
        //                     <p> Complete</p>
        //                 </div>
        //                 <div className="list-group">
        //                     <a href="#" className="list-group-item disabled">Research photographers</a>
        //                     <a href="#" className="list-group-item disabled">Book the venue</a>
        //                     <a href="#" className="list-group-item disabled">Decide on theme</a>
        //                 </div>
        //             </div>
    )
}
export default Lists;