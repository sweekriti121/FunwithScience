import React from "react";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Algebra() {
  // topics_data
  const Topics = [
    {
      topic: "Permutation And Combination",
      details: [`A permutation of a set is a loosely defined organisation of its members into a sequence or linear order, or a rearranging of its elements if the set is already sorted.
      The word "permutation" also refers to the act or process of changing the linear order of an ordered set.It is denoted by nPr.`,
        <br />,
        `On the other hand,Combination is a mathematical technique for determining the number of possible arrangements in a group of objects where the order of the items is irrelevant. Selecting r objects out of the given n objects is given by using the factorials. It is denoted by nCr.`
      ],
      formula: [`nPr = n!/(n-r)!`,
        <br />,
        `nCr = n!/r!(n-r)!`
      ],

      process: [
        "To find the permutation, first we need to find the value of n factorial and n - r factorial, then we need to devide them.",
        <br />,
        "To calculate combinations, we will use the formula nCr = n! / (r! * (n - r)!), where n represents the number of items, and r represents the number of items being chosen at a time.",
        <br />,
      ],
    },
    {
      topic: "Progression",
      details: `A combination is a mathematical technique for determining the number of possible arrangements in a group of objects where the order of the items is irrelevant. Selecting r objects out of the given n objects is given by using the factorials. It is denoted by nCr.`,
      formula: "AP = N + d * (n-1) <br> GP = N * r ^ (n-1)",
      process:
        "To calculate combinations, we will use the formula nCr = n! / (r! * (n - r)!), where n represents the number of items, and r represents the number of items being chosen at a time.",
    },
    {
      topic: "Statistics",
      details: `A combination is a mathematical technique for determining the number of possible arrangements in a group of objects where the order of the items is irrelevant. Selecting r objects out of the given n objects is given by using the factorials. It is denoted by nCr.`,
      formula: "AP = N + d * (n-1) <br> GP = N * r ^ (n-1)",
      process:
        "To calculate combinations, we will use the formula nCr = n! / (r! * (n - r)!), where n represents the number of items, and r represents the number of items being chosen at a time.",
    },
    {
      topic: "Binomial",
      details:"The binomial theorem states the principle for expanding the algebraic expression (x + y)<sup>n</sup> and expresses it as a sum of the terms involving individual exponents of variables x and y.",
    },
    {
      topic: "Mathematical Induction",
    },
    {
      topic: "Probability",
      details: [`The probability of an event represents the likelihood of the occurence of the event.

          For an unbiased event(where all outcomes are equally likely to occur), the probability of the event E is the number of outcomes in E divided by the number of outcomes in the Sample Space. 
          The probability of an event is a number between 0 and 1, where  0 indicates impossibility of the occurence of the event and 1 indicates that the event will surely occur.     
      
            `],
      formula: [`P(E) = n(E)/n(S)`,
        <br />,
        `where n(E) is the number of times the event E occurs and n(S) is the total possible occurence`],
      process: ["To calculate the probability of occurence of an equally-likely event,",
        <br />, "we need to determine the following quantities:",
        <br />, "n(E): Number of outcomes favoring the occurence of the event",
        <br />, "n(S): Total Number of outcomes",
        <br />, "Probability of occurence then becomes P(E)=n(E)/n(S)"
      ],
    },
    {
      topic: 'Complex Numbers',
      details: `A number of the form x + iy, where x and y are real numbers, is called a complex number, x is called real part and y is called imaginary part of the complex number i.e. Re(Z) = x and Im(Z) = y.`,
      formula: 'Z = x + iy',
      process:
        'Addition = (x1 + x2) + i (y1 + y2)',
    },
    {
      topic: "Exponents",
      details: [
        "Exponentiation refers to repeated multiplication of a given number with itself certain number of times.Square-Root of a given number is defined as the factor of the number which when multiplied with itself gives the given number.Cube-Root of a given number is the number which when multiplied thrice with itself gives the given number."
      ],
      formula: [
        "(y)^n=(y)*(y)*(y)*(y)...n times"
      ],
      process: [
        "To find x raised to the power n we need to multiply x with itself n times."
      ],
    },
    {
      topic: "Quadratic Equation",
      details: `Quadratic equations are second-degree algebraic expressions and are of the form ax2 + bx + c = 0.`,
      formula: "For quadratic equation ax^2 +bx+c, the roots are <br/> x1,x2=[-b ± √(b² - 4ac)]/2a",
      process: `The quadratic equation in its standard form is ax2 + bx + c = 0.
      The discriminant of the quadratic equation is D = b^2 - 4ac
      For D > 0 the roots are real and distinct.
      For D = 0 the roots are real and equal.
      For D < 0 the roots do not exist, or the roots are imaginary.`,
    },
    {
      topic: "Matrices and Determinants",
      details: `The matrix representation of a linear system is made by using all of the variable coefficients found, and use them as element entries to construct the rectangular array of an appropriate size augmented matrix.`,
      formula: "For a 3x3 matrix, the determinant is |A| = a(ei − fh) − b(di − fg) + c(dh − eg)",
      process:`The determinant of a matrix is :
      The discriminant of the quadratic equation is D = b^2 - 4ac
      For a 2×2 matrix the determinant is : ad - bc
      For a 3×3 matrix the determinant is :
      |A| = a(ei − fh) − b(di − fg) + c(dh − eg)`,
    }
  ];

  return (
    <>
      <div className="mech__main">
        <Helmet>
          <title>Algebra | Math | Tech N Science</title>
          <meta name="description" content="Explore the Algebra calculator" />
          <meta name="keywords" content="Algebra" />
        </Helmet>
        <div className="mech__header">
          <h1>Algebra-Topics</h1>
        </div>
        <div className="mech__topics-card">
          {Topics.map((data) => (
            <React.Fragment key={data.topic}>
              <Card key={data.topic} style={{ width: "18rem" }}>
                <Card.Body>
                  {data.details === undefined ? (
                    <Link
                      className="btn"
                      disabled={true}
                      to={`/algebra/calc/${data.topic}`}
                      variant="outline-dark"
                    >
                      {" "}
                      {data.topic}
                    </Link>
                  ) : (
                    <Link
                      className="btn"
                      to={`/algebra/calc/${data.topic}`}
                      variant="outline-dark"
                    >
                      {" "}
                      {data.topic}
                    </Link>
                  )}
                  <div style={{ padding: "0.3em" }}>
                    {data.details === undefined ? (
                      <Card.Text>
                        {" "}
                        Will be{" "}
                        <span style={{ fontWeight: "bold", color: "#19165b" }}>
                          available
                        </span>{" "}
                        soon...
                      </Card.Text>
                    ) : (
                      <Card.Text> </Card.Text>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
