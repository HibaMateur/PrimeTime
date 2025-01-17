import React, { Fragment, useState } from "react";
import Axios, * as others from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
const PopupCourses = () => {
  const [modal, setModal] = useState();
  const [activeTab, setActiveTab] = useState("1");

  const toggle = () => {
    setModal(!modal);
  };
  const [productName, setName] = useState("");
  const [slug, setslug] = useState("");
  const [description, setdescription] = useState("");
  const [categories, setcategories] = useState("");
  const [price, setprice] = useState("");
  const [size, setsize] = useState("");
  const [stockQuantity, setstockQuantity] = useState("");
  const [image, setimage] = useState("");
  
  
  
  const addProduct = () => {
    //{object}

    Axios.post("http://localhost:5000/products", {
        productName: productName,
    slug: slug,
    description: description,
    categories: categories,
    price: price,
    size: size,
    stockQuantity:stockQuantity,
    image: image
      

     
    }).then(() => {
      console.log("success");
    });
  };
  return (
    <Fragment>
      <Button className="fa fa-plus" onClick={toggle}>Add your Product</Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader
          toggle={toggle}
          className="modal-no-header close-right"
        ></ModalHeader>
        <ModalBody>
          <div className="modal-body login-modal">
            <Nav tabs className="nav nav-pills mb-5">
              <NavItem>
                <NavLink
                  className={activeTab == "1" ? "active" : ""}
                  onClick={() => setActiveTab("1")}
                >
                  Add Product
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent className="tab-content" activeTab={activeTab}>
              <TabPane
                tabId="1"
                aria-labelledby="pills-home-tab"
                className=""
                role="tabpanel"
              >
                <div className="form-row">
                  <FormGroup className="col-md-12">
                    <Label>ProductName</Label>
                    <Input
                      type="text"
                      name="name"
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    ></Input>
                  </FormGroup>
                  <FormGroup className="col-md-12">
                    <Label>slug</Label>
                    <Input
                      type="text"
                      name="slug"
                      onChange={(event) => {
                        setslug(event.target.value);
                      }}
                    ></Input>
                  </FormGroup>
                  <FormGroup className="col-md-12">
                    <Label>description</Label>
                    <Input
                      type="text"
                      name="description"
                      onChange={(event) => {
                        setdescription(event.target.value);
                      }}
                    ></Input>
                  </FormGroup>
                  <FormGroup className="col-md-12">
                    <Label>categories</Label>
                    <Input
                      type="text"
                      name="categories"
                      onChange={(event) => {
                        setcategories(event.target.value);
                      }}
                    ></Input>
                  </FormGroup>
                  <FormGroup className="col-md-12">
                    <Label>price</Label>
                    <Input
                      type="text"
                      name="price"
                      onChange={(event) => {
                        setprice(event.target.value);
                      }}
                    ></Input>
                  </FormGroup>
                  <FormGroup className="col-md-12">
                    <Label>size</Label>
                    <Input
                      type="text"
                      name="size"
                      onChange={(event) => {
                        setsize(event.target.value);
                      }}
                    ></Input>
                  </FormGroup>
                  <FormGroup className="col-md-12">
                    <Label>stockQuantity</Label>
                    <Input
                      type="text"
                      name="stockQuantity"
                      onChange={(event) => {
                        setstockQuantity(event.target.value);
                      }}
                    ></Input>
                  </FormGroup>
                  <FormGroup className="col-md-12">
                    <Label>image</Label>
                    <Input
                      type="text"
                      name="image"
                      onChange={(event) => {
                        setimage(event.target.value);
                      }}
                    ></Input>
                  </FormGroup>
                </div>
                <button
                  className="btn primary-btn btn-default text-uppercase"
                  onClick={addProduct}
                >
                  Add Product
                </button>
              </TabPane>
              <TabPane
                tabId="2"
                aria-labelledby="pills-profile-tab"
                className=""
                role="tabpanel"
              ></TabPane>
            </TabContent>
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default PopupCourses;