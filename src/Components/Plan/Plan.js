import React, { Component } from "react";

import "./Plan.css";

class Plan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relax: [
        {
          id: "1",
          name: "Personal Assistant",
          color: "yes"
        },
        {
          id: "2",
          name: "Privacy of your phone number",
          color: "no"
        },
        {
          id: "3",
          name: "Property promotion",
          color: "yes"
        },
        {
          id: "4",
          name: "Rental Agreement - Home Delivered",
          color: "no"
        },
        {
          id: "5",
          name: "Facebook Marketing Of Property",
          color: "yes"
        }
      ],
      super: [
        {
          id: "1",
          name: "Showing house on your behalf",
          color: "yes"
        },
        {
          id: "2",
          name: "Personal field assistant",
          color: "no"
        },
        {
          id: "3",
          name: "Photoshoot of your property",
          color: "yes"
        },
        {
          id: "4",
          name: "Privacy of your phonr number",
          color: "no"
        },
        {
          id: "5",
          name: "Property promotion",
          color: "yes"
        },
        {
          id: "6",
          name: "Rental Agreement - Home delivered",
          color: "no"
        },
        {
          id: "7",
          name: "Facebook Marketing Of Property",
          color: "yes"
        }
      ]
    };
  }
  render() {
    const { relax } = this.state;
    return (
      <div className="container main">
        <div className="plan-title">
          <h4>
            Get Tenants Quickly.{" "}
            <span className="text-captilize">SAVE THOUSANDS</span> on brokerage.
          </h4>
          <h6>For assistance call us at 92430-09980</h6>
        </div>
        <div className="row">
          <div className="col">
            <div className="card text-center">
              <div className="card-header relax">
                <div className="row">
                  <div className="col plan-header one">
                    <h5>Relax plan</h5>
                  </div>
                  <div className="col plan-header two">
                    Rs.2,999
                    <p className="font-size-12">+ 18 % GST</p>
                  </div>
                </div>
              </div>
              <div className="card-body relax-body">
                <h6 className="card-title relax-body-title">
                  Lots of tenant choices. Super fast clousure. Zero unwanted
                  calls.
                </h6>
                <div className="relax-list">
                  {relax.map(list => (
                    <p
                      key={list.id}
                      className={
                        list.color === "yes" ? "jumbotron jumb-relax" : "normal"
                      }
                    >
                      {list.name}
                    </p>
                  ))}
                </div>
              </div>
              <div className="card-footer text-muted">
                {" "}
                <a href="#" className="btn btn-primary relax-buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <div className="card-header super">
                <div className="row">
                  <div className="col plan-header super-one">
                    <h6>Super Relax plan</h6>
                    <p className="font-size-12">* Bangalore only</p>
                  </div>
                  <div className="col plan-header two">
                    Rs.5,499
                    <p className="font-size-12">+ 18 % GST</p>
                  </div>
                </div>
              </div>
              <div className="card-body super-relax-plan-body">
                <h6 className="card-title super-relax-body-title">
                  Lots of tenant choices. Super fast clousure. Zero unwanted
                  calls.
                </h6>
                <div className="super-relax-list">
                  {this.state.super.map(list => (
                    <p
                      key={list.id}
                      className={
                        list.color === "yes"
                          ? "jumbotron jumb-super-relax"
                          : "normal"
                      }
                    >
                      {list.name}
                    </p>
                  ))}
                </div>
              </div>
              <div className="card-footer text-muted">
                <a href="#" className="btn btn-primary super-relax-buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Plan;
