import React, { useState } from "react";

import { Form, Button, Modal } from "react-bootstrap";
import '../../PysicsStyles/physicscalculator.css'
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import Solution from "../../Solution/Solution";
// import {constant} from '../../Solution/allConstants';
import { SI } from "../../Solution/allSIUnits";
import { useParams } from "react-router-dom";
// import Modal from "react-bootstrap/Modal";

function Calculator() {
  let { topic } = useParams();
  // topics_data
  const Topics = [
    {
      topic: "Brewster's Angle",
      formula: "θ = tan⁻¹(n₂/n₁)",
      siunit: "degree",
      process: `"θ = tan⁻¹(n₂/n₁)" This equation is known as Brewster's law, where 'θ' is a brewster's angle, 'n₁' is the refractive index of the first media through which light propagates (the "incidental medium"), and 'n₂' is the index of the other medium, and we can simply get the angle by plugging these numbers into the equation.`,
      details: `The reflected light will be linearly polarised if light strikes an interface at a 90ᴼ angle between the reflected and refracted rays. The polarisation direction (the direction in which the electric field vectors point) is parallel to the interface plane.
               The Brewster angle, θ., is a unique incidence angle that results in a 90ᴼ angle between the reflected and refracted rays. A quick calculation reveals that tan(θ) = n₂/n₁.`,
      dimension: "M⁰ L⁰ T⁰ ",
    },
    {
      topic: "Mirror Formula",
      formula: "(1/v) + (1/u) = 1/f ",
      siunit: "metre",
      process: `In order to find the focal length we should know the object distance(u) and image distance(v)`,
      details: `The relation of object distance and image distance with focal length is known as a mirror equation. It is also known as a mirror formula. (u) is the Object distance.(v) is the Image distance.(f) is the Focal Length. It follows laws of reflection.`,
      dimension: "L¹ ",
    },
    {
      topic: "Lens Formula",
      formula: "(1/v) - (1/u) = 1/f ",
      siunit: "metre",
      process: `In order to find the focal length we should know the object distance(u) and image distance(v)`,
      details: `The relation of object distance and image distance with focal length is known as a mirror equation. It is also known as a mirror formula. (u) is the Object distance.(v) is the Image distance.(f) is the Focal Length. It follows laws of refraction.`,
      dimension: "L¹ ",
    },
    {
      topic: "Magnification of Mirror",
      formula: "m = h2 / h1",
      siunit: "No unit",
      process: `In order to find the magnification(m) we must know the height of image(h2) and the height of object(h1)`,
      details: `The linear magnification of a mirror(m) can be defined as the ratio of the height of the image(h2) formed by the mirror to that of the height of the object(h1).`,
      dimension: "NA ",
    },
    {
      topic: "Magnification of Lens",
      formula: "m = h2 / h1",
      siunit: "No unit",
      process: `In order to find the magnification(m) we must know the height of image(h2) and the height of object(h1)`,
      details: `The linear magnification of a lens(m) can be defined as the ratio of the height of the image(h2) formed by the lens to that of the height of the object(h1).`,
      dimension: "NA ",
    },
    {
      topic: "Power of Lens",
      formula: "P = 1 / f ",
      siunit: ["meter", <sup>-1</sup>, ` or also known as "diopter"`],
      process: `In order to find the power of lens we need to know the focal lenght of the lens(f)`,
      details: `The power of a lens is defined as its ability to converge or diverge the beam of light that falls on it.`,
      dimension: "L¹",
    },
    {
      topic: "Refractive Index",
      formula: "μ = sin(i) / sin(r), where i is the Angle of Incidence and r is the Angle of Refraction",
      siunit: "No unit",
      process: `In order to find the Refractive-Index of a medium relative to vacuum, we must know the angle of Incidence(i) and the angle of Refraction(r).Using these values in Snell's Law,we can easily find the Refractive Index of the medium.`,
      details: `The Refractive-Index of a medium relative to vacuum, can be defined as the ratio of the speed of light in vacuum to the speed of light in the medium.Using Snell's Law of Refraction,it can be closely approximated to be equal to
      the ratio of sine of angle of Incidence to the sine of angle of Refraction.Snell's Law describes how light bends when traveling from one medium to the next.`,
      dimension: "NA ",
    },
  ];

  const page = Topics.filter((data) => data.topic === topic);
  const details = page[0];




  //Refractive index calculator
  const RefractiveIndex = () => {
    const [i, setI] = useState(null);
    const [n, setN] = useState(null);
    const [result, setResult] = useState(null);
    const [i1, setI1] = useState(null);
    const [r1, setR1] = useState(null);
    const [result2, setResult2] = useState(null);
    const [choice, setChoice] = useState("Refractive-Index");
    const [showSolution1, setShowSolution1] = useState(false);
    const [showSolution2, setShowSolution2] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const givenValues1 = {
      i: i1,
      r: r1,
    };

    const insertValues1 = `sin(${i1}) / sin(${r1})`;

    const givenValues2 = {
      i: i,
      refractiveIndex: n,
    };

    const insertValues2 = `${n} / sin(${i})`;

    function reset() {
      setResult(null);
      setI(null);
      setN(null);
      setResult2(null);
      setI1(null);
      setR1(null);
      setShowSolution1(false);
      setShowSolution2(false);
    }
    const handleChange=(e)=>{
      setChoice(e.target.value);
      reset(); 
    }
    const calcResult = () => {
      if(i !== null && n !== null){
        if (i > 90 || n < 1 || i < 0)
          alert("Please Enter valid values for Refractive Index and Angle of Incidence");
        else {
          var refraction_angle = Math.asin(Math.sin(i * 0.01745329) / n);
          setShowSolution1(true);
          setResult(57.29578 * refraction_angle);
        }
      }
      else{
        setShowModal(true);
      }      
    }
    const calcResult2 = () => {
      if(i1 !== null && r1 !== null){
        if (i1 > 90 || r1 > 90 || i1 < 0 || r1 < 0)
          alert("Please Enter valid values for Angle of Refraction and Angle of Incidence");
        else{        
          setShowSolution2(true);
          setResult2(Math.sin(0.01745329 * i1) / Math.sin(0.01745329 * r1));
        }
      }      
      else{
        setShowModal(true);
      } 
    }
    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header>
            Please Enter all values to get Proper answer
          </Modal.Header>
          <Modal.Footer>
            <Button
              onClick={() => setShowModal(false)}
              class="btn btn-primary btn-sm"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
         <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => handleChange(e)}
            >
              <option value="Refractive-Index">Refractive Index</option>
              <option value="Refractive-Angle">Angle Of Refraction</option>
            </Form.Control>
          </Form.Group>
        {choice === "Refractive-Angle" &&
          <>
            <Form>
              <Form.Group className="mb-4">
                <Form.Label>Angle Of Incidence</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter the Angle of Incidence in degrees"
                  onChange={(e) => setI(Number(e.target.value))}
                  value={i === null ? "" : i}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Refractive Index</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter the value of n"
                  onChange={(e) => setN(e.target.value)}
                  value={n === null ? "" : n}
                />
              </Form.Group>              
              
              {showSolution1 ? (
                <Form.Group className="mb-3" controlId="acceleration">
                  <Solution
                    givenValues={givenValues2}
                    formula="μ / sin(i)"
                    toFind="Angle of Refraction sin(r)"
                    insertValues={insertValues2}
                    result={result}
                    // constants={constants}
                  />
                </Form.Group>
              ) : null}

              <Form.Group className="mb-4">
                <Form.Label>Angle of Refraction</Form.Label>
                <Form.Control
                  readOnly
                  type="number"
                  placeholder={result === null ? "Result" : result}
                />
              </Form.Group>
            </Form>
            <div className="button-custom-grp">
              <Button variant="primary" onClick={calcResult}>
                Calculate
              </Button>

              <Button variant="dark" onClick={() => reset()} type="reset">
                Reset
              </Button>
            </div>
          </>
        }
        {choice === "Refractive-Index" &&
          <>
            <Form>
              <Form.Group className="mb-4">
                <Form.Label>Angle Of Incidence</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter the Angle of Incidence in degrees"
                  onChange={(e) => setI1(Number(e.target.value))}
                  value={i1 === null ? "" : i1}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Angle Of Refraction</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter the Angle of Refraction in degrees"
                  onChange={(e) => setR1(e.target.value)}
                  value={r1 === null ? "" : r1}
                />
              </Form.Group>

              {showSolution2 ? (
                <Form.Group className="mb-3" controlId="acceleration">
                  <Solution
                    givenValues={givenValues1}
                    formula="sin(i) / sin(r)"
                    toFind="Refractive Index (μ)"
                    insertValues={insertValues1}
                    result={result2}
                    // constants={constants}
                  />
                </Form.Group>
              ) : null}

              <Form.Group className="mb-4">
                <Form.Label>Refractive Index</Form.Label>
                <Form.Control
                  readOnly
                  type="number"
                  placeholder={result2 === null ? "Result" : result2}
                />
              </Form.Group>
            </Form>
            <div className="button-custom-grp">
              <Button variant="primary" onClick={calcResult2}>
                Calculate
              </Button>

              <Button variant="dark" onClick={() => reset()} type="reset">
                Reset
              </Button>
            </div>
          </>
        }

      </>
    )
  }








  //adding Brewster's Angle calcular
  const BrewsterAngle = () => {
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [result, setResult] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showSolution, setShowSolution] = useState(false);

    const givenValues = {
      n1: n1,
      n2: n2,
    };

    const insertValues = `tan−¹(${n2}/${n1})`;

    const reset = () => {
      setResult("");
      setN2("");
      setShowSolution(false);
      setN1("");
    };
    const calcResult = () => {
      if (n2 !== "" && n1 !== "") {
        let res;
        let r1 = n2 / n1;
        let r2 = Math.atan(r1);
        res = (r2 * 180) / Math.PI;
        setResult(res);
        setShowSolution(true);
      } else {
        setShowModal(true);
      }
    };
    return (
      <>
        <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header>
            Please Enter all values to get Proper answer
          </Modal.Header>
          <Modal.Footer>
            <Button
              onClick={() => setShowModal(false)}
              class="btn btn-primary btn-sm"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>refractive index of the initial medium (n₁)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of n1"
              onChange={(e) => setN1(e.target.value)}
              value={n1 === null ? "" : n1}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>the index of the other medium (n₂)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of n2"
              onChange={(e) => setN2(e.target.value)}
              value={n2 === null ? "" : n2}
            />
          </Form.Group>
          {showSolution ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="tan-¹(n2/n1)"
                toFind="Brewster's angle"
                insertValues={insertValues}
                result={result}
              // constants={constants}
              />
            </Form.Group>
          ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === "" ? "Result" : result + " degree"}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>

          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };
  //Mirror Formula
  const MirrorFormula = () => {
    const [n1, setN1] = useState(null);
    const [n2, setN2] = useState(null);
    const [result, setResult] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showSolution, setShowSolution] = useState(false);
    const reset = () => {
      setResult(null);
      setN2(null);
      setN1(null);
      setShowSolution(false);
    };
    const objDist = 1 / n1;
    const imgDist = 1 / n2;
    const calcResult = () => {
      if (n1 !== null && n2 !== null) {
        let res;
        res = (1 / (objDist + imgDist)).toFixed(2);
        setShowSolution(true);
        setResult(res);
      } else {
        setShowModal(true);
      }
    };

    const givenValues = {
      Object_Distance: n1,
      Image_Distance: n2,
    };
    const insertValues = `[(1 / ${n2}${SI["Distance"]}) + (1 / ${n1}${SI["Distance"]})]`;

    return (
      <>
        <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header>
            Please Enter all values to get Proper answer
          </Modal.Header>
          <Modal.Footer>
            <Button
              onClick={() => setShowModal(false)}
              class="btn btn-primary btn-sm"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Object distance(u)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of u in meter"
              onChange={(e) => setN1(e.target.value)}
              value={n1 === null ? "" : n1}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Image distance (v)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of v in meter"
              onChange={(e) => setN2(e.target.value)}
              value={n2 === null ? "" : n2}
            />
          </Form.Group>
          {showSolution ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="(1/v) + (1/u)"
                toFind="Focal Length"
                insertValues={insertValues}
                result={result}
              />
            </Form.Group>
          ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " m"}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>

          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  //Lens Formula
  const LensFormula = () => {
    const [n1, setN1] = useState(null);
    const [n2, setN2] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const reset = () => {
      setResult(null);
      setN2(null);
      setN1(null);
      setShowSolution(false);
    };
    const objDist = 1 / n1;
    const imgDist = 1 / n2;
    const calcResult = () => {
      if (n1 !== null && n2 !== null) {
        let res;
        res = (1 / (imgDist - objDist)).toFixed(2);
        setShowSolution(true);
        setResult(res);
      } else {
        setShowModal(true);
      }
    };

    const givenValues = {
      Object_Distance: n1,
      Image_Distance: n2,
    };
    const insertValues = `[(1 / ${n2}${SI["Distance"]}) - (1 / ${n1}${SI["Distance"]})]`;

    return (
      <>
        <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header>
            Please Enter all values to get Proper answer
          </Modal.Header>
          <Modal.Footer>
            <Button
              onClick={() => setShowModal(false)}
              class="btn btn-primary btn-sm"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Object distance(u)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of u in meter"
              onChange={(e) => setN1(e.target.value)}
              value={n1 === null ? "" : n1}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Image distance (v)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of v in meter"
              onChange={(e) => setN2(e.target.value)}
              value={n2 === null ? "" : n2}
            />
          </Form.Group>
          {showSolution ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="(1/v) - (1/u)"
                toFind="Focal Length"
                insertValues={insertValues}
                result={result}
              />
            </Form.Group>
          ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " m"}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>

          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  //Magnification of Mirror
  const MirrorMag = () => {
    const [n1, setN1] = useState(null);
    const [n2, setN2] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const reset = () => {
      setResult(null);
      setN2(null);
      setN1(null);
      setShowSolution(false);
    };

    const calcResult = () => {
      if (n1 !== null && n2 !== null) {
        let res = n1 / n2;
        setShowSolution(true);
        setResult(res);
      } else {
        setShowModal(true);
      }
    };

    const givenValues = {
      Object_Height: n2,
      Image_Height: n1,
    };

    const insertValues = `[${n1}${SI["Image_Height"]} / ${n2}${SI["Object_Height"]}]`;

    return (
      <>
        <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header>
            Please Enter all values to get Proper answer
          </Modal.Header>
          <Modal.Footer>
            <Button
              onClick={() => setShowModal(false)}
              class="btn btn-primary btn-sm"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Height of Image(h2)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of h2 in meter"
              onChange={(e) => setN1(e.target.value)}
              value={n1 === null ? "" : n1}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Height of Object(h1)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of h1 in meter"
              onChange={(e) => setN2(e.target.value)}
              value={n2 === null ? "" : n2}
            />
          </Form.Group>
          {showSolution ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="h2 / h1"
                toFind="Magnification"
                insertValues={insertValues}
                result={result}
              />
            </Form.Group>
          ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " "}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>

          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };
  //Magnification of Lens
  const LensMag = () => {
    const [n1, setN1] = useState(null);
    const [n2, setN2] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const reset = () => {
      setResult(null);
      setN2(null);
      setN1(null);
      setShowSolution(false);
    };
    const calcResult = () => {
      if (n1 !== null && n2 !== null) {
        let res = n1 / n2;
        setShowSolution(true);
        setResult(res);
      } else {
        setShowModal(true);
      }
    };

    const givenValues = {
      Object_Height: n2,
      Image_Height: n1,
    };

    const insertValues = `[${n1}${SI["Image_Height"]} / ${n2}${SI["Object_Height"]}]`;

    return (
      <>
        <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header>
            Please Enter all values to get Proper answer
          </Modal.Header>
          <Modal.Footer>
            <Button
              onClick={() => setShowModal(false)}
              class="btn btn-primary btn-sm"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Height of Image(h2)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of h2 in meter"
              onChange={(e) => setN1(e.target.value)}
              value={n1 === null ? "" : n1}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Height of Object(h1)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of h1 in meter"
              onChange={(e) => setN2(e.target.value)}
              value={n2 === null ? "" : n2}
            />
          </Form.Group>
          {showSolution ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="h2 / h1"
                toFind="Magnification"
                insertValues={insertValues}
                result={result}
              />
            </Form.Group>
          ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " "}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>

          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };
  //Power of Lens
  const PowerLens = () => {
    const [n1, setN1] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const reset = () => {
      setResult(null);
      setShowSolution(false);
      setN1(null);
    };

    const calcResult = () => {
      if (n1 !== null) {
        let res = 1 / n1;
        setShowSolution(true);
        setResult(res);
      } else {
        setShowModal(true);
      }
    };

    const givenValues = {
      Focal_Length: n1,
    };

    const insertValues = `[1 / ${n1}${SI["Focal_Length"]}]`;

    return (
      <>
        <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header>
            Please Enter all values to get Proper answer
          </Modal.Header>
          <Modal.Footer>
            <Button
              onClick={() => setShowModal(false)}
              class="btn btn-primary btn-sm"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Focal length of the lens(f)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of f in meter"
              onChange={(e) => setN1(e.target.value)}
              value={n1 === null ? "" : n1}
            />
          </Form.Group>

          {showSolution ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="1 / f"
                toFind="Power of Lens"
                insertValues={insertValues}
                result={result}
              />
            </Form.Group>
          ) : null}

          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " diopter"}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>

          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  //adding the calculators togather
  function calC(key) {
    let currentCall;
    switch (key) {
      case "Brewster's Angle":
        currentCall = BrewsterAngle();
        break;
      case "Refractive Index":
        currentCall = RefractiveIndex();
        break;
      case "Mirror Formula":
        currentCall = MirrorFormula();
        break;
      case "Lens Formula":
        currentCall = LensFormula();
        break;
      case "Magnification of Mirror":
        currentCall = MirrorMag();
        break;
      case "Magnification of Lens":
        currentCall = LensMag();
        break;
      case "Power of Lens":
        currentCall = PowerLens();
        break;
      default:
        break;
    }
    return currentCall;
  }
  return (
    <React.Fragment>
      <Navbar />
      <div className="Calculator__main">
        <Helmet>
          <title>{details.topic}</title>
          <meta name="description" content="{details.details}" />
          <meta
            name="keywords"
            content="Atomic, Physics, calculator, Atomic physics calculator, Tech n science, technscience, tech and science"
          />
        </Helmet>

        <div className="Calculator__header">
          <h1>{details.topic}</h1>
        </div>
        <div className="Calculator__details">
          <p>{details.details}</p>
        </div>
        <div className="Calculator__formula">
          <h3>Working Formula:</h3>
          <h3>{details.formula}</h3>
          <h3>S.I. Unit : {details.siunit}</h3>
          <h3>Dimension : {details.dimension}</h3>
        </div>
        <div className="Calculator__process">
          <h3> Process</h3>
          <p>{details.process}</p>
        </div>
        <div className="Calculator__calc">
          <h3>{details.topic} Calculator</h3>
          <hr />
          {calC(details.topic)}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Calculator;