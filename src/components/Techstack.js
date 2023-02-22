import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
} from "react-icons/di";
import {
    SiPytorch,
    SiFirebase,
    SiNextdotjs,
} from "react-icons/si";

function Techstack() {
    return (
        <div>
        <h2 className="text-center text-4xl text-gray-700 font-bold mb-6 mr-14 pt-20 pb-10">Compétences </h2>

    <Row className="container mx-auto grid grid-cols-5 " style={{ paddingBottom: "50px" }}>
        <Col></Col>
            <Col xs={4} md={2} className="tech-icons">
                <CgCPlusPlus className="center"/>

            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
            </Col>
        <Col></Col>

        <Col></Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs />
            </Col>
        <Col></Col>
        <Col></Col>

        <Col xs={4} md={2} className="tech-icons">
                <DiGit />

            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFirebase />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
            </Col>
        <Col></Col>
        <Col></Col>

        <Col xs={4} md={2} className="tech-icons">
                <SiPytorch />
            </Col>
        </Row>
        </div>

    );
}

export default Techstack;