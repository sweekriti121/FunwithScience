import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import "./Calculator.css";
import geometry_pair from "../../../Images/geometry_pair.png";
import geometry_tan from "../../../Images/geometry_tan.webp";
import { useParams } from "react-router-dom";
var Fraction = require("fractional").Fraction;

function Calculator() {
  let { topic } = useParams();
  // topics_data
  const Topics = [
    {
      topic: "Straight Line",
      details: `A straight line is an infinitely long line with no bends. A straight line can also be constructed between two locations, but both ends stretch to infinity. It might be horizontal, vertical, or inclined. If we draw an angle between any two locations on a straight line, we will always get a 180-degree angle.`,
      formula:
        "Two point form: (y2 - y1)x + (x1 - x2)y - (x1 * y2) + (x2 * y1) = 0 ",
      process: [
        "To find the equation of line using the two-point formula we will be needing co-ordinates of two points.",
        <br />,
      ],
      example1: [
        "Find the equation of a line passing through (-2, 4) and (3, 1).",
        <br />,
        <b>Solution: </b>,

        "Substituting the coordinates in the above two-point formula",
      ],
      example2: [
        "(1-4)x + (-2-3)y - (-2*1) + (3*4) = 0",
        <br />,
        "-3x + (-5)y - (-2) + (12) = 0",
        <br />,
        <b>3x + 5y -14=0 </b>,
        " Hence, this is the required equation of a line passing through the given points.",
      ],
    },
    {
      topic: "Parabola",
      details:
        "A parabola is a type of conic section, which is an open curve formed by the intersection of a plane and a right circular cone. It can be defined as the set of points which are equidistant from a fixed point (the focus) and a fixed line (the directrix). The axis of a parabola is the line which passes through the focus and is perpendicular to the directrix. The vertex is the point where the axis crosses the parabola.",
      formula: [
        " If vertex : (0,0) & focus : (a,0) then y²=4ax",
        <br />,
        " If vertex : (0,0) & focus : (-a,0) then y²=-4ax",
        <br />,
        " If vertex : (0,0) & focus : (0,a) then x²=4ay",
        <br />,
        " If vertex : (0,0) & focus : (0,-a) then x²=-4ay",
      ],
      process: [
        "The equation of parabola is given by",
        <br />,
        "(y-β)² = 4a(x-α) whose vertex is (α,β) and axis is parallel to the x-axis",
        <br />,
        "(x-α)² = 4a(y-β) whose vertex is (α,β) and axis is parallel to the y-axis",
        <br />,
      ],
      example1: [
        "Find the equation of the parabola given the vertex(2,3) and point(-1,6).",
        <br />,
        <b>Solution: </b>,
        <br />,
        "To find the equation of the parabola using the vertex and a point provided we can use :",
        <br />,
        <>
          <b>Note: </b>
          <span>
            Here we are assuming that it is a vertical parabola then the
            equation is given by
          </span>
        </>,
        <br />,
        "y = a(x-h)²+k",
        <br />,
        "where (h,k) is the vertex.",
        <br />,
        "Substituting the given vertex in the above formula. ",
      ],
      example2: [
        "y = a(x-2)²+3",
        <br />,
        "Knowing that (-1,6) lies on the parabola we can solve for 'a' by, ",
        <br />,
        "6 = a(-1-2)²+3",
        <br />,
        "6 = 9a+3",
        <br />,
        "a = 1/3",
        <br />,
        "Hence the required equation is : y = 1/3(x-2)²+3",
      ],
    },
    {
      topic: "Ellipse",
      details:
        "An ellipse is a set of points in a plane such that the total of the distances between any two points on the ellipse is constant. Each of the two spots is referred to as a focus. The singular form of focus is foci. It has a fixed line called the directrix, and the constant ratio is the ellipse's eccentricity. The eccentricity of an ellipse ranges from 0 to 1. 0≤e<1",
      formula: [
        "The standard form of the equation of an ellipse with center (h,k) and major axis which is",
        <br />,
        "Parallel to x-axis is:",
        <br />,
        "(x-h)²/a² + (y-k)²/b² = 1",
        <br />,
        "Parallel to y-axis is:",
        <br />,
        "(x-h)²/b² + (y-k)²/a² = 1",
      ],
      process: [
        "To find the equation of an ellipse in the standard form with center (h,k) we need two vertices and foci",
        <br />,
      ],
      example1: [
        "Find the equation of ellipse that has vertices (-2,-8) and (-2,2) and foci (-2,-7) and (-2,1),",
        <br />,
        "First we find out the center(h,k) which is halfway between the vertices,(-2,-8) and (-2,2).",
        <br />,
        "Applying midpoint formula,we get:",
        <br />,
        "(h,k) = ( (-2-2)/2,(-8+2)/2 ) = (-2,-3)",
        <br />,
        "Next we find a².The length of major axis is 2a.We solve for 'a' by finding the distance between y-coordinates of vertices: ",
        <br />,
        "2a = 2 - (-8)",
        <br />,
        "a = 5 So, a² = 25",
        <br />,
        "Now we find c². The foci are given as (h,k-c)=(-2,-7) and (h,k+c)=(-2,1).We substitute k=-3 in either of these points",
      ],
      example2: [
        "k+c=1",
        <br />,
        "-3+c=1",
        <br />,
        "c=4 So, c²=16",
        <br />,
        "Next, we get b² by using the equation c²=a²-b². After substituting a and c we get",
        <br />,
        "b²=9",
        <br />,
        "Finally after substituting all the values we found into the standard form we get:",
        <br />,
        "(x+2)²/9 + (y+3)²/25 = 1",
      ],
    },
    {
      topic: "Circle",
      details: `A circle is a closed curve in which the set of all the points in the plane are equidistant from a given point known as the “center” of a circle. Radius is the distance from the centre of the circle to the outer line while Diameter is the line that divides the circle into two equal parts and the relation between diameter and radius is, diameter is equal to twice of the radius (D = 2r). A circle is also a special kind of ellipse in which the the two foci are coincident and eccentricity is zero. e = 0`,
      formula: "The Equation of Circle : (x-h)² + (y-k)² = r²",
      process: [
        "To find the standard equation of a circle, we will be needing the coordinates of the center of the circle (h,k) and its radius (r).",
      ],
        example1:[
        <b>E.g. </b>,
        "Find the equation of a circle if point (1,2) is the center of the circle and it’s radius is equal to 4 cm.",
        <br />,
        <b>Solution: </b>,
        <br />,
        "(x-1)²+(y-2)² = 4²",
      ],
      example2: [
        "(x²−2x+1)+(y²−4y+4) =16",
        <br />,
        <b>x²+y²−2x−4y-11 = 0 </b>,
        <br />,
        "Hence, this is the required standard equation of the given circle."
        ]
      
    },
    {
      topic: "Hyperbola",
      details:
        "Hyperbola is defined as the set of points such that the difference between the distances to two focal points is constant. The transverse axis is the line passing through the two focal points and the center of the hyperbola. The eccentricity of a hyperbola is always greater than 1. (e>1) ",
      formula: [
        "The standard form of the equation of a hyperbola with center (h,k) and transverse axis",
        <br />,
        "Parallel to x-axis is:",
        <br />,
        "(x-h)²/a² - (y-k)²/b² = 1",
        <br />,
        "Parallel to y-axis is:",
        <br />,
        "(y-k)²/a² - (x-h)²/b² = 1",
      ],
      process: [
        "To find the equation of a hyperbola in the standard form with center (h,k) we need two vertices and foci.",
<<<<<<< HEAD
        <br />],
        example1:[
          "Find the standard form equation of the hyperbola that has vertices at (0,−2) and (6,−2) and foci at (−2,−2) and (8,−2)?",
=======
        <br />,
      ],
      example1: [
        "Find the standard form equation of the hyperbola that has vertices at (0,−2) and (6,−2) and foci at (−2,−2) and (8,−2)?",
>>>>>>> 534bc3c5fff27d0568fe7a861144af34a4ea5225
        <br />,
        "The y-coordinates of the vertices and foci are the same, so the transverse axis is parallel to the x-axis. Thus, the equation of the hyperbola will have the form",
        <br />,
        "(x-h)²/a² - (y-k)²/b² = 1",
        <br />,
        "First, we identify the center, (h,k). Applying the midpoint formula, (h,k) = (0+6/2,-2+(-2)/2) = (3,-2)",
        <br />,
        "Next, we find a². The length of the transverse axis, 2a, is bounded by the vertices. So, we can find a² by finding the distance between the x-coordinates of the vertices.",
        <br />,
<<<<<<< HEAD
        "2a = |0-6| => 2a = 6 => a = 3 => a² = 9"
        ],
        example2:[
=======
        "2a = |0-6| => 2a = 6 => a = 3 => a² = 9",
      ],
      example2: [
>>>>>>> 534bc3c5fff27d0568fe7a861144af34a4ea5225
        "Now we need to find c². The coordinates of the foci are (h±c,k). So, (h-c,k) = (-2,-2) and (h+c,k) = (8,-2)",
        <br />,
        "We can use the x-coordinate from either of these points to solve for c. Using the point (8,−2), and substituting h=3,",
        <br />,
        "h + c = 8 => 3 + c = 8 => c = 5 => c² = 25",
        <br />,
        "Next, solve for b² using the equation b² = c² − a²:",
        <br />,
        "b² = c² − a² => 25 - 9 = 16 ",
        <br />,
        "Finally, after substituting the values, the standard equation is :",
        <br />,
<<<<<<< HEAD
        <strong>(x-3)²/9 - (y+2)²/16 = 1</strong>
        ]
    }
=======
        <strong>(x-3)²/9 - (y+2)²/16 = 1</strong>,
      ],
    },
>>>>>>> 534bc3c5fff27d0568fe7a861144af34a4ea5225
  ];

  const page = Topics.filter((data) => data.topic === topic);
  const details = page[0];

  //Straight line
  const StraightLine = () => {
    const [x1, setX1] = useState("");
    const [x2, setX2] = useState(null);
    const [y1, setY1] = useState(null);
    const [y2, setY2] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setX1("");
      setX2("");
      setY1("");
      setY2("");

      setResult(null);
    };

    const suby = y2 - y1;
    const subx = x1 - x2;
    const mul1 = x1 * y2;
    const mul2 = x2 * y1;
    const mul = mul1 - mul2;
    const calcStraightLine = () => {
      let equation = `(${suby}x) + (${subx}y) - (${mul}) = 0`;
      setResult(equation);
    };

    return (
      <>
        <Form>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong> To find the equation of straight line</strong>
              <br />
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-4" controlId="text">
            <div className="straight_calc">
              <form name="first">
                <div className="group">
                  <div className="coordinate">
                    <label>
                      X<sub>1</sub>
                    </label>
                    <input
                      name="x1"
                      type="text"
                      className="easynumeric"
                      onChange={(e) => setX1(e.target.value)}
                      value={x1}
                    />
                  </div>

                  <div className="coordinate">
                    <label>
                      X<sub>2</sub>
                    </label>
                    <input
                      name="x2"
                      type="text"
                      className="easynumeric"
                      onChange={(e) => setX2(e.target.value)}
                      value={x2}
                    />
                  </div>
                </div>

                <div className="group clearfix">
                  <div className="coordinate">
                    <label>
                      Y<sub>1</sub>
                    </label>
                    <input
                      name="y1"
                      className="easynumeric"
                      value={y1}
                      onChange={(e) => setY1(e.target.value)}
                    />
                  </div>

                  <div className="coordinate">
                    <label>
                      Y<sub>2</sub>
                    </label>
                    <input
                      name="y2"
                      type="text"
                      className="easynumeric"
                      value={y2}
                      onChange={(e) => setY2(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </div>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " "}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp mb-5">
          <Button variant="primary" onClick={calcStraightLine}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
        <div className="formula-table mb-4">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3>Straight Lines </h3>
                </tr>
              </section>

              <tr>
                <th className="row-1 row-ID  "> Straight Lines</th>
                <th className="row-2 row-name ">Equation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Equation of a Straight Line</td>
                <td>
                  <b>ax + by + c = 0 </b>
                </td>
              </tr>
              <tr>
                <td>General form or Standard Form</td>
                <td>
                  <b>y = mx + c</b>
                </td>
              </tr>
              <tr>
                <td>Intercept Form</td>
                <td>
                  <b> x/a+ b/y =1</b>
                </td>
              </tr>
              <tr>
                <td>Point form</td>
                <td>
                  <b> y – y1 = m(x – x1 )</b>
                </td>
              </tr>
              <tr>
                <td>Point-Point form(Two-point form)</td>
                <td>
                  <b>(x - x1)/(x2 - x1) = (y - y1)/(y2 - y1)</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="formula-table">
          <table className="formulae">
            <thead>
              <section className="m-2">
                {" "}
                <tr>
                  <h3>Pair of Straight Lines </h3>
                </tr>
              </section>

              <tr>
                <th className="row-1 row-ID  ">Pair of Straight Lines</th>
                <th className="row-2 row-name ">Equation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Standard form</td>
                <td>
                  <b>
                    ax<sup>2</sup> + by<sup>2</sup> + 2hxy + 2gx + 2fy + c = 0{" "}
                  </b>
                </td>
              </tr>
              <tr>
                <td>Passing through Origin</td>
                <td>
                  <b>
                    {" "}
                    ax<sup>2</sup> + by<sup>2</sup> + 2hxy = 0
                  </b>
                </td>
              </tr>
              <tr>
                <td>Angle between two lines</td>
                <td>
                  <b>
                    <img
                      style={{ height: "3.5rem" }}
                      src={geometry_tan}
                      alt="angle_of_intersectioin"
                    />{" "}
                  </b>
                </td>
              </tr>
              <tr>
                <td>Point of intersection</td>
                <td>
                  <b>
                    {" "}
                    <img
                      style={{ height: "2.5rem" }}
                      src={geometry_pair}
                      alt="point_of_intersection"
                    />
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };

  //Parabola
  const Parabola = () => {
    const [h, setH] = useState("");
    const [k, setK] = useState(null);
    const [x, setX] = useState(null);
    const [y, setY] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setH("");
      setK("");
      setX("");
      setY("");

      setResult(null);
    };

    const calcParabola = () => {
      const nume = y - k;
      const denome = (x - h) * (x - h);
      const a = new Fraction(nume / denome);
      let equation = [
        `y=${a.toString()}(x-${h})² + ${k}`,
        `x=${a.toString()}(y-${k})² + ${h}`,
      ];
      setResult(equation);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong> To find the equation of Parabola</strong>
              <br />
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-4" controlId="text">
            <div className="straight_calc">
              <form name="first">
                <p>
                  <strong>Vertex: </strong>(h,k) &nbsp; <strong>Point:</strong>
                  (x,y)
                </p>
                <div className="group">
                  <div className="coordinate">
                    <label>h</label>
                    <input
                      name="x1"
                      type="text"
                      className="easynumeric"
                      onChange={(e) => setH(e.target.value)}
                      value={h}
                    />
                  </div>

                  <div className="coordinate">
                    <label>k</label>
                    <input
                      name="x2"
                      type="text"
                      className="easynumeric"
                      onChange={(e) => setK(e.target.value)}
                      value={k}
                    />
                  </div>
                </div>

                <div className="group clearfix">
                  <div className="coordinate">
                    <label>x</label>
                    <input
                      name="y1"
                      className="easynumeric"
                      value={x}
                      onChange={(e) => setX(e.target.value)}
                    />
                  </div>

                  <div className="coordinate">
                    <label>y</label>
                    <input
                      name="y2"
                      type="text"
                      className="easynumeric"
                      value={y}
                      onChange={(e) => setY(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </div>
          </Form.Group>

          <div className="input-group mb-4">
            <Form.Group className="mr-3" id="r1">
              <Form.Label>
                <b>
                  Standard Form1 (x<sup>2</sup>=4ay):
                </b>
              </Form.Label>
              <Form.Control
                readOnly
                type="number"
                placeholder={result === null ? "Result1" : result[0] + " "}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>
                <b>
                  Standard Form2 (y<sup>2</sup>=4ax):
                </b>
              </Form.Label>
              <Form.Control
                readOnly
                type="number"
                placeholder={result === null ? "Result2" : result[1] + " "}
              ></Form.Control>
            </Form.Group>
          </div>
        </Form>
        <div className="button-custom-grp mb-5">
          <Button variant="primary" onClick={calcParabola}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
        <div className="formula-table mb-4">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3> Parabola </h3>
                </tr>
              </section>

              <tr>
                <th>
                  <strong>Form:</strong>
                </th>
                <th>
                  <strong>
                    y<sup>2</sup> = 4ax
                  </strong>
                  <p>(Right-hand)</p>
                </th>
                <th>
                  <strong>
                    y<sup>2</sup> = &#x2013; 4ax
                  </strong>
                  <p>(Left-hand)</p>
                </th>
                <th>
                  <strong>
                    x<sup>2</sup> = 4ay
                  </strong>
                  <p>(Upward)</p>
                </th>
                <th>
                  <strong>
                    x<sup>2</sup> = &#x2013; 4ay{" "}
                  </strong>
                  <p>(Downward)</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Focus:</td>
                <td>(a, 0)</td>
                <td>(-a, 0)</td>
                <td>(0, a)</td>
                <td>(0, -a)</td>
              </tr>
              <tr>
                <td>Axis:</td>
                <td>y = 0</td>
                <td>y = 0</td>
                <td>x = 0</td>
                <td>x = 0</td>
              </tr>
              <tr>
                <td>Directrix:</td>
                <td>x = &#x2013; a</td>
                <td>x = a</td>
                <td>y = &#x2013; a</td>
                <td>y = a</td>
              </tr>
              <tr>
                <td>Vertex:</td>
                <td>(0, 0)</td>
                <td>(0,0)</td>
                <td>(0, 0)</td>
                <td>(0, 0)</td>
              </tr>
              <tr>
                <td>Focal distance of point (x,y)</td>
                <td>x+a</td>
                <td>a-x</td>
                <td>y+a</td>
                <td>a-y</td>
              </tr>
              <tr>
                <td>Tangent at the vertex:</td>
                <td>x = 0</td>
                <td>x = 0</td>
                <td>y = 0</td>
                <td>y = 0</td>
              </tr>
              <tr>
                <td>Length of latus rectum:</td>
                <td>4a</td>
                <td>4a</td>
                <td>4a</td>
                <td>4a</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="formula-table">
          <table className="formulae">
            <thead>
              <section className="m-2">
                {" "}
                <tr>
                  <h3>Properties of Parabola</h3>
                </tr>
              </section>

              <tr>
                <th>
                  <strong>Equation:</strong>
                </th>
                <th>
                  <strong>
                    y<sup>2</sup> = 4ax
                  </strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tangent</td>
                <td>
                  <b>
                    yy<sub>1</sub> = 2a(x+x<sub>1</sub>)
                  </b>
                </td>
              </tr>
              <tr>
                <td>Normal</td>
                <td>
                  <b>
                    {" "}
                    (y-y<sub>1</sub>)=(-y<sub>1</sub>/2a)(x-x<sub>1</sub>)
                  </b>
                </td>
              </tr>
              <tr>
                <td>Chord of contact</td>
                <td>
                  <b>
                    yy<sub>1</sub>=2x(x+x<sub>1</sub>){" "}
                  </b>
                </td>
              </tr>
              <tr>
                <td>Parametric Coordinates</td>
                <td>
                  <b>
                    (at<sup>2</sup>,2at)
                  </b>
                </td>
              </tr>
              <tr>
                <td>Pole and Polar</td>
                <td>
                  <b>
                    {" "}
                    yy<sub>1</sub>=2x(x+x<sub>1</sub>)
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };

  //Ellipse
  const Ellipse = () => {
    const [v1, setV1] = useState(null);
    const [v2, setV2] = useState(null);
    const [v3, setV3] = useState(null);
    const [v4, setV4] = useState(null);
    const [c1, setC1] = useState(null);
    const [c2, setC2] = useState(null);
    const [c3, setC3] = useState(null);
    const [c4, setC4] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setV1("");
      setV2("");
      setV3("");
      setV4("");
      setC1("");
      setC2("");
      setC3("");
      setC4("");

      setResult(null);
    };
    const calcEllipse = () => {
      // Converting the values into integers.
      let V1, V2, V3, V4, C1, C2, C4;
<<<<<<< HEAD
      [V1, V2, V3, V4, C1, C2, C4] = [v1, v2, v3, v4, c1, c2, c3, c4].map((varr) =>
        parseInt(varr)
=======
      [V1, V2, V3, V4, C1, C2, C4] = [v1, v2, v3, v4, c1, c2, c3, c4].map(
        (varr) => parseInt(varr)
>>>>>>> 534bc3c5fff27d0568fe7a861144af34a4ea5225
      );
      let major_xaxis = false;
      const [h, k] = [(V1 + V3) / 2, (V2 + V4) / 2];
      if (V2 === 0 && V4 === 0 && C2 === 0 && C4 === 0) {
        major_xaxis = true;
      }
      const a = major_xaxis ? Math.abs(V1) : (V4 - V2) / 2;
    const c = major_xaxis ? Math.abs(C1) : C4 - k;
    const [aSquare, cSquare] = [a * a, c * c];
    const bSquare = aSquare - cSquare;

      let equation = [
        `(x${h >= 0 ? "-" : "+"}${h < 0 ? -h : h})²/${aSquare} + (y${
          k >= 0 ? "-" : "+"
        }${k < 0 ? -k : k})²/${bSquare} = 1`,
        `(x${h >= 0 ? "-" : "+"}${h < 0 ? -h : h})²/${bSquare} + (y${
          k >= 0 ? "-" : "+"
        }${k < 0 ? -k : k})²/${aSquare} = 1`,
      ];
      setResult(equation);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong> To find the equation of Ellipse</strong>
              <br />
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-4" controlId="text">
            <div className="straight_calc">
              <form name="first">
                <p>
                  <strong>Vertices: </strong>v1,v2,v3,v4 &nbsp;{" "}
                  <strong>Foci:</strong>c1,c2,c3,c4
                </p>
                <div className="group">
                  <div className="coordinate mb-2">
                    <label>
                      v<sub>1</sub>
                    </label>
                    <input
                      name="x1"
                      type="text"
                      className="easynumeric"
                      onChange={(e) => setV1(e.target.value)}
                      value={v1}
                    />
                  </div>

                  <div className="coordinate mb-2">
                    <label>
                      v<sub>2</sub>
                    </label>
                    <input
                      name="x2"
                      type="text"
                      className="easynumeric"
                      onChange={(e) => setV2(e.target.value)}
                      value={v2}
                    />
                  </div>
                </div>

                <div className="group clearfix">
                  <div className="coordinate mb-2">
                    <label>
                      v<sub>3</sub>
                    </label>
                    <input
                      name="y1"
                      type="text"
                      className="easynumeric"
                      value={v3}
                      onChange={(e) => setV3(e.target.value)}
                    />
                  </div>

                  <div className="coordinate mb-2">
                    <label>
                      v<sub>4</sub>
                    </label>
                    <input
                      name="y2"
                      type="text"
                      className="easynumeric"
                      value={v4}
                      onChange={(e) => setV4(e.target.value)}
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="coordinate mb-2">
                    <label>
                      c<sub>1</sub>
                    </label>
                    <input
                      name="x1"
                      type="text"
                      className="easynumeric"
                      onChange={(e) => setC1(e.target.value)}
                      value={c1}
                    />
                  </div>

                  <div className="coordinate mb-2">
                    <label>
                      c<sub>2</sub>
                    </label>
                    <input
                      name="x2"
                      type="text"
                      className="easynumeric"
                      onChange={(e) => setC2(e.target.value)}
                      value={c2}
                    />
                  </div>
                </div>

                <div className="group clearfix">
                  <div className="coordinate">
                    <label>
                      c<sub>3</sub>
                    </label>
                    <input
                      name="y1"
                      type="text"
                      className="easynumeric"
                      value={c3}
                      onChange={(e) => setC3(e.target.value)}
                    />
                  </div>

                  <div className="coordinate">
                    <label>
                      c<sub>4</sub>
                    </label>
                    <input
                      name="y2"
                      type="text"
                      className="easynumeric"
                      value={c4}
                      onChange={(e) => setC4(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </div>
          </Form.Group>

          <div className="input-group mb-4">
            <Form.Group className="mr-3" id="r1">
              <Form.Label>
                <b>Standard Form1 [(x-h)²/a² + (y-k)²/b² = 1] :</b>
              </Form.Label>
              <Form.Control
                readOnly
                type="number"
                placeholder={result === null ? "Result1" : result[0] + " "}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>
                <b>Standard Form2 [(x-h)²/b² + (y-k)²/a² = 1] :</b>
              </Form.Label>
              <Form.Control
                readOnly
                type="number"
                placeholder={result === null ? "Result2" : result[1] + " "}
              ></Form.Control>
            </Form.Group>
          </div>
        </Form>
        <div className="button-custom-grp mb-5">
          <Button variant="primary" onClick={calcEllipse}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
        <div className="formula-table mb-4">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3> Ellipse </h3>
                </tr>
              </section>

              <tr>
                <th>
                  <strong>Equation</strong>
                </th>
                <th>
                  <strong>x²/a² + y²/b² = 1</strong>
                  <span> (a&gt;b)</span>
                </th>
                <th>
                  <strong>x²/a² + y²/b² = 1</strong>
                  <span> (a&lt;b)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Equation of Major axis</td>
                <td>y = 0</td>
                <td>x = 0</td>
              </tr>
              <tr>
                <td>Length of Major axis</td>
                <td>2a</td>
                <td>2b</td>
              </tr>
              <tr>
                <td>Equation of Minor axis</td>
                <td>x = 0</td>
                <td>y = 0</td>
              </tr>
              <tr>
                <td>Length of Minor axis</td>
                <td>2b</td>
                <td>2b</td>
              </tr>
              <tr>
                <td>Vertices</td>
                <td>(&#177;a,0)</td>
                <td>(0,&#177;b)</td>
              </tr>
              <tr>
                <td>Foci</td>
                <td>(&#177;ae,0)</td>
                <td>(0,&#177;be)</td>
              </tr>
              <tr>
                <td>Directrix</td>
                <td>x = &#177;(a/e)</td>
                <td>y = &#177;(b/e)</td>
              </tr>
              <tr>
                <td>Eccentricity</td>
                <td>
                  e = &#8730;1-(b<sup>2</sup>/a<sup>2</sup>)
                </td>
                <td>
                  e = &#8730;1-(a<sup>2</sup>/b<sup>2</sup>)
                </td>
              </tr>
              <tr>
                <td>Length of Latus-rectum</td>
                <td>
                  2b<sup>2</sup>/a
                </td>
                <td>
                  2a<sup>2</sup>/b
                </td>
              </tr>
              <tr>
                <td>Centre</td>
                <td>(0,0)</td>
                <td>(0,0)</td>
              </tr>
              <tr>
                <td>Focal distances of any point(x,y)</td>
                <td>a &#177; ex</td>
                <td>b &#177; ey</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="formula-table">
          <table className="formulae">
            <thead>
              <section className="m-2">
                {" "}
                <tr>
                  <h3>Formulas of Ellipse</h3>
                </tr>
              </section>

              <tr>
                <th>
                  <strong>Equation:</strong>
                </th>
                <th>
                  <strong>x²/a² + y²/b² = 1</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Area of Ellipse</td>
                <td>&pi;ab</td>
              </tr>
              <tr>
                <td>Perimeter of Ellipse</td>
                <td>
                  2&pi;&#8730;(a<sup>2</sup>+b<sup>2</sup>)/2
                </td>
              </tr>
              <tr>
                <td>Volume of Ellipse</td>
                <td>4/3&#215;&pi;&#215;a&#215;b&#215;c</td>
              </tr>
              <tr>
                <td>Circumference of Ellipse</td>
                <td>&pi;(a + b)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };

  //Circle
  const Circle = () => {
    const [h1, setH1] = useState("");
    const [k1, setK1] = useState(null);
    const [r1, setR1] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setH1("");
      setK1("");
      setR1("");

      setResult(null);
    };

    const calcCircle = () => {
      const sq = r1 * r1;
      let equation = `(x-${h1})² + (y-${k1})² = ${sq}`;
      setResult(equation);
    };

    return (
      <>
        <Form>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong> To find the equation of a circle</strong>
              <br />
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-4" controlId="text">
            <div className="straight_calc">
              <form name="first">
                <p>
                  <strong>Center: </strong>(h,k) &nbsp; <strong>Radius:</strong>
                  &nbsp; r
                </p>
                <div className="group">
                  <div className="coordinate">
                    <label>h</label>
                    <input
                      name="h1"
                      type="text"
                      className="easynumeric"
                      onChange={(e) => setH1(e.target.value)}
                      value={h1}
                    />
                  </div>

                  <div className="coordinate">
                    <label>k</label>
                    <input
                      name="k1"
                      type="text"
                      className="easynumeric"
                      onChange={(e) => setK1(e.target.value)}
                      value={k1}
                    />
                  </div>
                </div>

                <div className="group clearfix">
                  <div className="coordinate">
                    <label>r</label>
                    <input
                      name="r1"
                      className="easynumeric"
                      value={r1}
                      onChange={(e) => setR1(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </div>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>
              <b>
                Standard Form: (x - h)<sup>2</sup> + (y - k)<sup>2</sup>= r
                <sup>2</sup>
              </b>
            </Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " "}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp mb-5">
          <Button variant="primary" onClick={calcCircle}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
        <div className="formula-table mb-4">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3>Circles </h3>
                </tr>
              </section>

              <tr>
                <th className="row-1 row-ID  "> Circles</th>
                <th className="row-2 row-name ">Equation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Standard Equation of a Circle</td>
                <td>
                  <b>
                    (x - h)<sup>2</sup> + (y - k)<sup>2</sup> = r<sup>2</sup>
                  </b>
                </td>
              </tr>
              <tr>
                <td>General form</td>
                <td>
                  <b>
                    x<sup>2</sup> + y<sup>2</sup> + 2hx + 2ky + C = 0
                  </b>
                </td>
              </tr>
              <tr>
                <td>Parametric Equation</td>
                <td>
                  <b>
                    x<sup>2</sup> + y<sup>2</sup> + 2hx + 2ky + C = 0
                  </b>{" "}
                  <p>where, (x = -h + rcosθ, y = -k + rsinθ)</p>
                </td>
              </tr>
              <tr>
                <td>Polar Equation</td>
                <td>
                  <b>r = p</b>
                  <p>where, p is the radius of the circle</p>
                </td>
<<<<<<< HEAD
                </tr>
                <tr>
                <td>Tangent to the equation x<sup>2</sup>+ y<sup>2</sup>=a<sup>2</sup> at (x<sub>1</sub>, y<sub>1</sub>)</td>
                <td>
                  <strong>xx<sub>1</sub>+yy<sub>1</sub> = a<sup>2</sup></strong>
                </td>
                </tr>
                <tr>
                <td>Tangent to the equation x<sup>2</sup> + y<sup>2</sup> + 2gx + 2fy + c = 0 at (x<sub>1</sub>, y<sub>1</sub>)</td>
                <td>
                  <strong>xx<sub>1</sub> + yy<sub>1</sub> + g(x+x<sub>1</sub>) + f(y+y<sub>1</sub>) + c = 0</strong>
                </td>
                </tr>
                <tr>
                <td>Tangent to the equation x<sup>2</sup>+ y<sup>2</sup>=a<sup>2</sup> at (acosθ , asinθ)</td>
                <td>
                  <strong>xcosθ + ysinθ = a</strong>
                </td>
                </tr>
                <tr>
                <td>Tangent to the equation x<sup>2</sup>+ y<sup>2</sup>=a<sup>2</sup> for a line y = mx +c</td>
                <td>
                  <strong>y = mx ± a √[1+ m2]</strong>
                </td>
                </tr>
=======
              </tr>
              <tr>
                <td>
                  Tangent to the equation x<sup>2</sup>+ y<sup>2</sup>=a
                  <sup>2</sup> at (x<sub>1</sub>, y<sub>1</sub>)
                </td>
                <td>
                  <strong>
                    xx<sub>1</sub>+yy<sub>1</sub> = a<sup>2</sup>
                  </strong>
                </td>
              </tr>
              <tr>
                <td>
                  Tangent to the equation x<sup>2</sup> + y<sup>2</sup> + 2gx +
                  2fy + c = 0 at (x<sub>1</sub>, y<sub>1</sub>)
                </td>
                <td>
                  <strong>
                    xx<sub>1</sub> + yy<sub>1</sub> + g(x+x<sub>1</sub>) + f(y+y
                    <sub>1</sub>) + c = 0
                  </strong>
                </td>
              </tr>
              <tr>
                <td>
                  Tangent to the equation x<sup>2</sup>+ y<sup>2</sup>=a
                  <sup>2</sup> at (acosθ , asinθ)
                </td>
                <td>
                  <strong>xcosθ + ysinθ = a</strong>
                </td>
              </tr>
              <tr>
                <td>
                  Tangent to the equation x<sup>2</sup>+ y<sup>2</sup>=a
                  <sup>2</sup> for a line y = mx +c
                </td>
                <td>
                  <strong>y = mx ± a √[1+ m2]</strong>
                </td>
              </tr>
>>>>>>> 534bc3c5fff27d0568fe7a861144af34a4ea5225
            </tbody>
          </table>
        </div>
        <div className="formula-table">
          <table className="formulae">
            <thead>
              <section className="m-2">
                {" "}
                <tr>
                  <h3>Formulas of Circle</h3>
                </tr>
              </section>

              <tr>
                <th>
                  <strong>Equation</strong>
                </th>
                <th>
                  <strong>
                    (x - h)<sup>2</sup> + (y - k)<sup>2</sup> = r<sup>2</sup>
                  </strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Diameter of Circle</td>
                <td>
                  <b>2r</b>
                </td>
              </tr>
              <tr>
                <td>Area of Circle</td>
                <td>
                  <b>
                    &pi;r<sup>2</sup>
                  </b>
                </td>
              </tr>
              <tr>
                <td>Circumference of Circle</td>
                <td>
                  <b>2&pi;r</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };
<<<<<<< HEAD
//Hyperbola
const Hyperbola = () => {
  const [v11, setV11] = useState(null);
  const [v21, setV21] = useState(null);
  const [v31, setV31] = useState(null);
  const [v41, setV41] = useState(null);
  const [c11, setC11] = useState(null);
  const [c21, setC21] = useState(null);
  const [c31, setC31] = useState(null);
  const [c41, setC41] = useState(null);
  const [result, setResult] = useState(null);
  const reset = () => {
    setV11("");
    setV21("");
    setV31("");
    setV41("");
    setC11("");
    setC21("");
    setC31("");
    setC41("");
=======
  //Hyperbola
  const Hyperbola = () => {
    const [v11, setV11] = useState(null);
    const [v21, setV21] = useState(null);
    const [v31, setV31] = useState(null);
    const [v41, setV41] = useState(null);
    const [c11, setC11] = useState(null);
    const [c21, setC21] = useState(null);
    const [c31, setC31] = useState(null);
    const [c41, setC41] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setV11("");
      setV21("");
      setV31("");
      setV41("");
      setC11("");
      setC21("");
      setC31("");
      setC41("");

      setResult(null);
    };
    const calcHyperbola = () => {
      // Converting the values into integers.
      let V11, V21, V31, V41, C11, C21, C31, C41;
      [V11, V21, V31, V41, C11, C21, C31, C41] = [
        v11,
        v21,
        v31,
        v41,
        c11,
        c21,
        c31,
        c41,
      ].map((varr) => parseInt(varr));
      let major_xaxis = false;
      const [h, k] = [(V11 + V31) / 2, (V21 + V41) / 2];
      if (V21 === 0 && V41 === 0 && C21 === 0 && C41 === 0) {
        major_xaxis = true;
      }
      const a = major_xaxis ? Math.abs(V11) : (V11 - V31) / 2;
      const c = major_xaxis ? Math.abs(C11) : C31 - h;
      const [aSquare, cSquare] = [a * a, c * c];
      const bSquare = cSquare - aSquare;
      let equation = [
        `(x${h >= 0 ? "-" : "+"}${h < 0 ? -h : h})²/${aSquare} - (y${
          k >= 0 ? "-" : "+"
        }${k < 0 ? -k : k})²/${bSquare} = 1`,
        `(y${k >= 0 ? "-" : "+"}${k < 0 ? -k : k})²/${aSquare} - (x${
          h >= 0 ? "-" : "+"
        }${h < 0 ? -h : h})²/${bSquare} = 1`,
      ];
      setResult(equation);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong> To find the equation of Hyperbola</strong>
              <br />
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-4" controlId="text">
            <div className="straight_calc">
              <form name="first">
                <p>
                  <strong>Vertices: </strong>v1,v2,v3,v4 &nbsp;{" "}
                  <strong>Foci:</strong>c1,c2,c3,c4
                </p>
                <div className="group">
                  <div className="coordinate mb-2">
                    <label>
                      v<sub>1</sub>
                    </label>
                    <input
                      name="x1"
                      type="text"
                      className="easynumeric"
                      onChange={(e) => setV11(e.target.value)}
                      value={v11}
                    />
                  </div>

                  <div className="coordinate mb-2">
                    <label>
                      v<sub>2</sub>
                    </label>
                    <input
                      name="x2"
                      type="text"
                      className="easynumeric"
                      onChange={(e) => setV21(e.target.value)}
                      value={v21}
                    />
                  </div>
                </div>

                <div className="group clearfix">
                  <div className="coordinate mb-2">
                    <label>
                      v<sub>3</sub>
                    </label>
                    <input
                      name="y1"
                      type="text"
                      className="easynumeric"
                      value={v31}
                      onChange={(e) => setV31(e.target.value)}
                    />
                  </div>

                  <div className="coordinate mb-2">
                    <label>
                      v<sub>4</sub>
                    </label>
                    <input
                      name="y2"
                      type="text"
                      className="easynumeric"
                      value={v41}
                      onChange={(e) => setV41(e.target.value)}
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="coordinate mb-2">
                    <label>
                      c<sub>1</sub>
                    </label>
                    <input
                      name="x1"
                      type="text"
                      className="easynumeric"
                      onChange={(e) => setC11(e.target.value)}
                      value={c11}
                    />
                  </div>

                  <div className="coordinate mb-2">
                    <label>
                      c<sub>2</sub>
                    </label>
                    <input
                      name="x2"
                      type="text"
                      className="easynumeric"
                      onChange={(e) => setC21(e.target.value)}
                      value={c21}
                    />
                  </div>
                </div>

                <div className="group clearfix">
                  <div className="coordinate">
                    <label>
                      c<sub>3</sub>
                    </label>
                    <input
                      name="y1"
                      type="text"
                      className="easynumeric"
                      value={c31}
                      onChange={(e) => setC31(e.target.value)}
                    />
                  </div>

                  <div className="coordinate">
                    <label>
                      c<sub>4</sub>
                    </label>
                    <input
                      name="y2"
                      type="text"
                      className="easynumeric"
                      value={c41}
                      onChange={(e) => setC41(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </div>
          </Form.Group>

          <div className="input-group mb-4">
            <Form.Group className="mr-3" id="r1">
              <Form.Label>
                <b>Standard Form1 [(x-h)²/a² - (y-k)²/b² = 1] :</b>
              </Form.Label>
              <Form.Control
                readOnly
                type="number"
                placeholder={result === null ? "Result1" : result[0] + " "}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>
                <b>Standard Form2 [(y-k)²/a² - (x-h)²/b² = 1] :</b>
              </Form.Label>
              <Form.Control
                readOnly
                type="number"
                placeholder={result === null ? "Result2" : result[1] + " "}
              ></Form.Control>
            </Form.Group>
          </div>
        </Form>
        <div className="button-custom-grp mb-5">
          <Button variant="primary" onClick={calcHyperbola}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
        <div className="formula-table mb-4">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3> Hyperbola </h3>
                </tr>
              </section>

              <tr>
                <th>
                  <strong>Equation</strong>
                </th>
                <th>
                  <strong>x²/a² - y²/b² = 1</strong>
                  <span> (Hyperbola)</span>
                </th>
                <th>
                  <strong>-x²/a² + y²/b² = 1</strong>
                  <span> (Conjugate Hyperbola)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Equation of Transverse axis</td>
                <td>y = 0</td>
                <td>x = 0</td>
              </tr>
              <tr>
                <td>Length of Transverse axis</td>
                <td>2a</td>
                <td>2b</td>
              </tr>
              <tr>
                <td>Equation of Conjugate axis</td>
                <td>x = 0</td>
                <td>y = 0</td>
              </tr>
              <tr>
                <td>Length of Conjugate axis</td>
                <td>2b</td>
                <td>2a</td>
              </tr>
              <tr>
                <td>Vertices</td>
                <td>(&#177;a,0)</td>
                <td>(0,&#177;b)</td>
              </tr>
              <tr>
                <td>Foci</td>
                <td>(&#177;ae,0)</td>
                <td>(0,&#177;be)</td>
              </tr>
              <tr>
                <td>Directrix</td>
                <td>x = &#177;(a/e)</td>
                <td>y = &#177;(b/e)</td>
              </tr>
              <tr>
                <td>Eccentricity</td>
                <td>
                  e = &#8730;(a<sup>2</sup>+b<sup>2</sup>)/a<sup>2</sup>
                </td>
                <td>
                  e = &#8730;(b<sup>2</sup>+a<sup>2</sup>)/b<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Length of Latus-rectum</td>
                <td>
                  2b<sup>2</sup>/a
                </td>
                <td>
                  2a<sup>2</sup>/b
                </td>
              </tr>
              <tr>
                <td>Centre</td>
                <td>(0,0)</td>
                <td>(0,0)</td>
              </tr>
              <tr>
                <td>Focal distances of any point(x,y)</td>
                <td>ex &#177; a</td>
                <td>ey &#177; b</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="formula-table">
          <table className="formulae">
            <thead>
              <section className="m-2">
                {" "}
                <tr>
                  <h3>Formulas of Hyperbola</h3>
                </tr>
              </section>

              <tr>
                <th>
                  <strong>Equation</strong>
                </th>
                <th>
                  <strong>x²/a² - y²/b² = 1</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Equation of Rectangular Hyperbola</td>
                <td>ax² + 2hxy + by² + 2gx + 2fy + 2c = 0</td>
              </tr>
              <tr>
                <td>
                  Equation of Tangent at t<sub>1</sub>
                </td>
                <td>
                  x + yt<sub>1</sub>
                  <sup>2</sup> - 2ct<sub>1</sub> = 0
                </td>
              </tr>
              <tr>
                <td>Equation of Director Circle</td>
                <td>
                  x<sup>2</sup> + y<sup>2</sup> = a<sup>2</sup> - b<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Equation of Tangent at any point</td>
                <td>
                  xx<sub>1</sub>/a² - yy<sub>1</sub>/b² = 1
                </td>
              </tr>
              <tr>
                <td>Equation of Normal at any point</td>
                <td>
                  (a²x)/x<sub>1</sub> + (b²y)/y<sub>1</sub> = a² + b²
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };
>>>>>>> 534bc3c5fff27d0568fe7a861144af34a4ea5225

    setResult(null);
  };
  const calcHyperbola = () => {
    // Converting the values into integers.
    let V11, V21, V31, V41, C11, C21, C31, C41;
    [V11, V21, V31, V41, C11, C21, C31, C41] = [v11, v21, v31, v41, c11, c21, c31, c41].map((varr) =>
      parseInt(varr)
    );
    let major_xaxis = false;
    const [h, k] = [(V11 + V31) / 2, (V21 + V41) / 2];
    if (V21 === 0 && V41 === 0 && C21 === 0 && C41 === 0) {
      major_xaxis = true;
    }
    const a = major_xaxis ? Math.abs(V11) : (V11 - V31) / 2;
    const c = major_xaxis ? Math.abs(C11) : C31 - h;
    const [aSquare, cSquare] = [a * a, c * c];
    const bSquare = cSquare - aSquare;
    let equation = [
      `(x${h >= 0 ? "-" : "+"}${h < 0 ? -h : h})²/${aSquare} - (y${
        k >= 0 ? "-" : "+"
      }${k < 0 ? -k : k})²/${bSquare} = 1`,
      `(y${k >= 0 ? "-" : "+"}${k < 0 ? -k : k})²/${aSquare} - (x${h >= 0 ? "-" : "+"}${h < 0 ? -h : h})²/${bSquare} = 1`,
    ];
    setResult(equation);
  };
  return (
    <>
      <Form>
        <Form.Group className="mb-4" controlId="text">
          <Form.Text className="text">
            <strong> To find the equation of Hyperbola</strong>
            <br />
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-4" controlId="text">
          <div className="straight_calc">
            <form name="first">
              <p>
                <strong>Vertices: </strong>v1,v2,v3,v4 &nbsp;{" "}
                <strong>Foci:</strong>c1,c2,c3,c4
              </p>
              <div className="group">
                <div className="coordinate mb-2">
                  <label>
                    v<sub>1</sub>
                  </label>
                  <input
                    name="x1"
                    type="text"
                    className="easynumeric"
                    onChange={(e) => setV11(e.target.value)}
                    value={v11}
                  />
                </div>

                <div className="coordinate mb-2">
                  <label>
                    v<sub>2</sub>
                  </label>
                  <input
                    name="x2"
                    type="text"
                    className="easynumeric"
                    onChange={(e) => setV21(e.target.value)}
                    value={v21}
                  />
                </div>
              </div>

              <div className="group clearfix">
                <div className="coordinate mb-2">
                  <label>
                    v<sub>3</sub>
                  </label>
                  <input
                    name="y1"
                    type="text"
                    className="easynumeric"
                    value={v31}
                    onChange={(e) => setV31(e.target.value)}
                  />
                </div>

                <div className="coordinate mb-2">
                  <label>
                    v<sub>4</sub>
                  </label>
                  <input
                    name="y2"
                    type="text"
                    className="easynumeric"
                    value={v41}
                    onChange={(e) => setV41(e.target.value)}
                  />
                </div>
              </div>

              <div className="group">
                <div className="coordinate mb-2">
                  <label>
                    c<sub>1</sub>
                  </label>
                  <input
                    name="x1"
                    type="text"
                    className="easynumeric"
                    onChange={(e) => setC11(e.target.value)}
                    value={c11}
                  />
                </div>

                <div className="coordinate mb-2">
                  <label>
                    c<sub>2</sub>
                  </label>
                  <input
                    name="x2"
                    type="text"
                    className="easynumeric"
                    onChange={(e) => setC21(e.target.value)}
                    value={c21}
                  />
                </div>
              </div>

              <div className="group clearfix">
                <div className="coordinate">
                  <label>
                    c<sub>3</sub>
                  </label>
                  <input
                    name="y1"
                    type="text"
                    className="easynumeric"
                    value={c31}
                    onChange={(e) => setC31(e.target.value)}
                  />
                </div>

                <div className="coordinate">
                  <label>
                    c<sub>4</sub>
                  </label>
                  <input
                    name="y2"
                    type="text"
                    className="easynumeric"
                    value={c41}
                    onChange={(e) => setC41(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
        </Form.Group>

        <div className="input-group mb-4">
          <Form.Group className="mr-3" id="r1">
            <Form.Label>
              <b>Standard Form1 [(x-h)²/a² - (y-k)²/b² = 1] :</b>
            </Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result1" : result[0] + " "}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>
              <b>Standard Form2 [(y-k)²/a² - (x-h)²/b² = 1] :</b>
            </Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result2" : result[1] + " "}
            ></Form.Control>
          </Form.Group>
        </div>
      </Form>
      <div className="button-custom-grp mb-5">
        <Button variant="primary" onClick={calcHyperbola}>
          Calculate
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="dark" onClick={() => reset()} type="reset">
          Reset
        </Button>
      </div>
      <div className="formula-table mb-4">
        <table className="formulae">
          <thead>
            <section className="m-2">
              <tr>
                <h3> Hyperbola </h3>
              </tr>
            </section>

            <tr>
              <th>
                <strong>Equation</strong>
              </th>
              <th>
                <strong>x²/a² - y²/b² = 1</strong>
                <span> (Hyperbola)</span>
              </th>
              <th>
                <strong>-x²/a² + y²/b² = 1</strong>
                <span> (Conjugate Hyperbola)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Equation of Transverse axis</td>
              <td>y = 0</td>
              <td>x = 0</td>
            </tr>
            <tr>
              <td>Length of Transverse axis</td>
              <td>2a</td>
              <td>2b</td>
            </tr>
            <tr>
              <td>Equation of Conjugate axis</td>
              <td>x = 0</td>
              <td>y = 0</td>
            </tr>
            <tr>
              <td>Length of Conjugate axis</td>
              <td>2b</td>
              <td>2a</td>
            </tr>
            <tr>
              <td>Vertices</td>
              <td>(&#177;a,0)</td>
              <td>(0,&#177;b)</td>
            </tr>
            <tr>
              <td>Foci</td>
              <td>(&#177;ae,0)</td>
              <td>(0,&#177;be)</td>
            </tr>
            <tr>
              <td>Directrix</td>
              <td>x = &#177;(a/e)</td>
              <td>y = &#177;(b/e)</td>
            </tr>
            <tr>
              <td>Eccentricity</td>
              <td>
                e = &#8730;(a<sup>2</sup>+b<sup>2</sup>)/a<sup>2</sup>
              </td>
              <td>
                e = &#8730;(b<sup>2</sup>+a<sup>2</sup>)/b<sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Length of Latus-rectum</td>
              <td>
                2b<sup>2</sup>/a
              </td>
              <td>
                2a<sup>2</sup>/b
              </td>
            </tr>
            <tr>
              <td>Centre</td>
              <td>(0,0)</td>
              <td>(0,0)</td>
            </tr>
            <tr>
              <td>Focal distances of any point(x,y)</td>
              <td>ex &#177; a</td>
              <td>ey &#177; b</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="formula-table">
        <table className="formulae">
          <thead>
            <section className="m-2">
              {" "}
              <tr>
                <h3>Formulas of Hyperbola</h3>
              </tr>
            </section>

            <tr>
              <th>
                <strong>Equation</strong>
              </th>
              <th>
                <strong>x²/a² - y²/b² = 1</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Equation of Rectangular Hyperbola</td>
              <td>ax² + 2hxy + by² + 2gx + 2fy + 2c = 0</td>
            </tr>
            <tr>
              <td>Equation of Tangent at t<sub>1</sub></td>
              <td>
                x + yt<sub>1</sub><sup>2</sup> - 2ct<sub>1</sub> = 0
              </td>
            </tr>
            <tr>
              <td>Equation of Director Circle</td>
              <td>x<sup>2</sup> + y<sup>2</sup> = a<sup>2</sup> - b<sup>2</sup></td>
            </tr>
            <tr>
              <td>Equation of Tangent at any point</td>
              <td>xx<sub>1</sub>/a² - yy<sub>1</sub>/b² = 1</td>
            </tr>
            <tr>
              <td>Equation of Normal at any point</td>
              <td>(a²x)/x<sub>1</sub> + (b²y)/y<sub>1</sub> = a² + b²</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
  //adding the calculators togather
  function calC(key) {
    let currentCall;
    switch (key) {
      case "Straight Line":
        currentCall = StraightLine();
        break;
      case "Parabola":
        currentCall = Parabola();
        break;
      case "Ellipse":
        currentCall = Ellipse();
        break;
      case "Circle":
        currentCall = Circle();
        break;
      case "Hyperbola":
        currentCall = Hyperbola();
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
            content="Geometry, calculator, Geometry calculator, physics, Tech n science, technscience, tech and science"
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
        </div>
        <div className="Calculator__process">
          <h3> Process</h3>
          <p>{details.process}</p>
        </div>
        <div className="Calculator__example">
          <h3>Example</h3>
          <div className="row">
            <div className="col-sm-6 col-lg-6 ">
              <p>{details.example1}</p>
            </div>

            <div className="col-sm-6 col-lg-6 ">
              <p>{details.example2}</p>
            </div>
          </div>
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
