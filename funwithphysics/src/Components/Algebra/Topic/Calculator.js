import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import { useParams } from "react-router";
import "./Calculator.css";
import { useEffect } from "react";

function Calculator() {
  let { topic } = useParams();
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
      example1: [
        <span>
          <b>How many different teams(each having 5 members) can be formed from 12 students?</b>
          <br />
          Solution:
          There is nothing that indicates that the order in which the team members are selected is important
          <br />
          and therefore it is a combination problem. Hence the number of teams that can be formed
          is the number of
          <br />
          ways of choosing 5 objects out 12 given by:
          12 C 5 = 12! / [ (12 - 5)!5! ] = 792
          <br />
        </span>,
      ],
      example2: [
        <span>
          <b>How many 3 letter words can we make with the letters in the word ABCD(without repetition)?</b>
          <br />
          Solution: There are 4 letters in the word ABCD and the number of 3-letter words is similar to number of ways
          <br />
          of arranging 3 objects out of 4.Order is important here since ABC and CAB are different words.Hence after
          <br />
          choosing of 3 letters we need to arrange them.

          <br />
          The number of words is given by
          4 P 3 = 4! / (4 - 3)! = 24
        </span>,
      ],
    },

    {
      topic: "Progression",
      details: [
        `An Arithmetic Progression is a sequence of numbers in which the difference between any two subsequent terms is always the same.`,
        <br />,
        <br />,
        "The sequence of numbers is called a Geometric Progression if the ratio of two subsequent terms is always the same.",
      ],
      formula: ["AP = a + d * (n-1)", <br />, "GP = a * r ^ (n-1)"],
      process: [
        "To find the Arithmetic progression of nᵗʰ term, we use the formula a + d * (n-1) where, 'a' is the first term of the series and 'd' is the common difference between any two numbers in the series found by taking the difference. To find the Geometric progression of nᵗʰ term, we use the formula a + r ⁽ⁿ⁻¹⁾ where, 'a' is the first term of the series and 'r' is the common difference between any two numbers in the series found by taking the ratio.",
        <br />,
      ],
      example1: [
        "2,4,6,8.. is an AP because difference between any two consecutive terms in the series (common difference) is same (4 – 2 = 6 – 4 = 8 – 6 = 2).",
        <br />,
        "If ‘a’(2) is the first term and ‘d’(2) is the common difference,",
        <br />,
        "nth term of an AP = a + (n-1) d",
        <br />,
        "5th term of the AP = 2 + (5-1) * 2 = 10",
        <br />,
      ],
      example2: [
        <b>E.g. </b>,
        "2,4,8,16 is a GP because ratio of any two consecutive terms in the series (common difference) is same (4 / 2 = 8 / 4 = 16 / 8 = 2)",
        <br />,
        "If ‘a’(2) is the first term and ‘r’(2) is the common ratio,",
        <br />,
        "nth term of a GP = a rn-1",
        <br />,
        "5th term of the GP = 2 * 2 ^ (5-1) = 32",
      ],
    },
    {
      topic: "Statistics",
      details: `Statistics is the branch of science that studies and develops methods for gathering, analysing, interpreting, and interpreting empirical data.`,
      formula: "",
      process: [
        "To calculate the mean, median and mode, we have to use the formulae giving below",

        <br />,
      ],
      example1: [
        "Numbers given: 20 30 60 20 10 40 80 90",
        <br />,
        "Mean = Sum of all items/Total no. of items = 350/8 = 43.75",
        <br />,
        "Mode = 20 (as 20 occured most number of times in the given set of numbers)",
      ],
      example2: [
        "Standard deviation is calculated by deviations of each data point from the mean, and square the result of each whole divided by total number of samples minus 1.Hence it is , = 29.73",
        <br />,
        "Variance is square of standard deviation.Hence it is = 883.92",
        <br />,
      ],
    },
    {
      topic: "Complex Numbers",
      details: [
        "A complex number is an element of a number system that includes the real numbers as well as a specific element denoted i known as the imaginary unit, and satisfying the equation i² = -1. Furthermore, every complex number may be written as a + bi, where a and b are real values. René Descartes referred i as an imaginary number since no real number satisfies the above equation. The set of complex numbers is represented by the symbol C.",
      ],
      formula: [
        "Addition = (x1 + x2) + i (y1 + y2)",
        <br />,
        "Polar form = r(cosθ + isinθ)",
        <br />,
        "Cartesian form = a + bi",
      ],
      process: [
        `A number of the form x + iy, where x and y are real numbers, is called a complex number, x is called real part and y is called imaginary part of the complex number i.e. Re(Z) = x and Im(Z) = y.`,
        <br />,

        "A complex number Z = x + iy is a purely real if its imaginary part is 0, i.e. Im(z) = 0 and purely imaginary if its real part is 0 i.e. Re (z) = 0.",
        <br />,
      ],
      example1: [
        "z₁ = 2 + 3i is first complex number equation, ",

        "z₂ = 5 + 10i is second complex number equation",
        <br />,
        "Sum of two complex numbers is = (2 + 5) + i(3 + 10)",
        <br />,
        "Sum is = 7 + 13i",
        <br />,
        <b>E.g. </b>,
        "Polar Form: √17(cos(1.816) + isin(1.816))",
      ],
      example2: [
        "For Cartesian Form:",
        <br />,
        "z  =  (√17 × cos(1.816))  +  i(√17 × sin(1.816))",
        <br />,
        "z  =  -1.0009...  +  i3.9997...",
        <br />,
        "Which can be rounded to.",
        <br />,
        "z  =  -1 + i4",
      ],
    },
    {
      topic: "Exponents",
      details: [
        "Exponentiation refers to repeated multiplication of a given number with itself certain number of times. Square-Root of a given number is defined as the factor of the number which when multiplied with itself gives the given number. Cube-Root of a given number is the number which when multiplied thrice with itself gives the given number.",
      ],
      formula: ["(y)ⁿ=(y)*(y)*(y)*(y)...n times"],
      process: [
        "To find x raised to the power n we need to multiply x with itself n times.",
      ],
      example1: [
        "2 raised to the power 3 is simply 2*2*2=8",
        <br />,
        "Square Root of 16 is a number(say a) such that a*a=16 ,which on computation gives 4.",
        <br />,
        "Cube root of 125 is a number (say b) such that b*b*b=125, which on computation gives 5.",
      ],
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
      example1: [
        "Consider the Probability of First Event is P(A)=0.4 and that of the Second Event is P(B)=0.3.",
        <br />,
        "Also consider the Probability of occurence of either of them is P(A ∪ B)=0.5",
        <br />,
        "P(A') = 1-P(A) ,P(A')=1-0.4=0.6",
        <br />,
        "P(B') = 1-P(B) ,P(B')=1-0.3=0.7",
        <br />,
        "P(A ∩ B) = P(A)+P(B)-P(A ∪ B) ,P(E)=0.4+0.3-0.5=0.2",
        <br />,
        "P(only A) = P(A)-P(A ∩ B) ,P(E)=0.4-0.2=0.2",
        <br />,
        "P(only B) = P(B)-P(A ∩ B) ,P(E)=0.3-0.2=0.1",
        <br />,
      ],
    },
    {
      topic: "Quadratic Equation",
      details: [
        "Quadratic equations are polynomial equations of degree 2 in one variable of the form f(x) = ax² + bx + c, where a, b, c, ∈ R and a ≠ 0. It is the general form of a quadratic equation in which 'a' is referred to as the leading coefficient and 'c' is referred to as the absolute term of f(x). The roots of the quadratic equation (α,β) are the values of 'x' that fulfil the quadratic equation. There will always be two roots to the quadratic equation. The nature of roots might be either real or fictitious.",
        <br />,
        "When equated to zero, a quadratic polynomial forms a quadratic equation. The roots of the quadratic equation are the values of 'x' that satisfy the equation.",
      ],
      formula: [
        "For quadratic equation ax² +bx+c, the roots are",
        <br />,
        "x₁,x₂=[-b ± √(b² - 4ac)]/2a",
      ],
      process: [
        `The quadratic equation in its standard form is ax² + bx + c = 0.`,
        <br />,
        `The discriminant of the quadratic equation is D = b² - 4ac`,
        <br />,
        `For D > 0 the roots are real and distinct.`,
        <br />,
        `For D = 0 the roots are real and equal.`,
        <br />,
        `For D < 0 the roots do not exist, or the roots are imaginary.`,
      ],
      example1: [
        "Let the quadratic equation be x²-5x+6 = 0",
        <br />,
        "Comparing the equation with the general form ax² + bx + c = 0 gives ",
        <br />,
        "a = 1, b = -5 and c = 6",
        <br />,
        "Since D > 0, the roots are real and distinct",
        <br />,
        "Substitute the values in the quadratic formula",
        <br />,
        "x₁ = (-b + √b²-4ac)/2a",
      ],
      example2: [
        "⇒ (5 + 1)/2",
        <br />,
        " = 3",
        <br />,
        "x₂ = (-b – √b²-4ac)/2a",
        <br />,
        " ⇒ (5 – 1)/2",
        <br />,
        "= 2",
      ],
    },
    {
      topic: "Binomial",
      details: [
        <span>
         Binomial Theorem is an algebraic formula which is used to express the binomial expression raised to a certain power (i.e. (A + B)<sup>n</sup>) in the form of a series (called binomial expansion).
Binomial Expression is an expression which consistes of two terms. <br />
          Each term in a binomial expansion is associated with a numeric value which is called binomial coefficient.
          <br />
          <br />
         <h3><u>Important Points:</u></h3> 
          1. Total number of terms in the expansion of (A + B)<sup>n</sup>  are (n+1)  <br />
          2. <sup>n</sup>C<sub>0</sub>, <sup>n</sup>C<sub>1</sub>, <sup>n</sup>C<sub>2</sub>, ...., <sup>n</sup>C<sub>n</sub> are called binomial coefficients and also represented by C<sub>0</sub>, C<sub>1</sub>, C<sub>2</sub>, ..., C<sub>n</sub>  <br />
          3. Binomial coefficients which are equidistant from the beginning and from the ending are equal i.e. <sup>n</sup>C<sub>0</sub> = <sup>n</sup>C<sub>n</sub>, <sup>n</sup>C<sub>1</sub> = <sup>n</sup>C<sub>n-1</sub> , <sup>n</sup>C<sub>2</sub> = <sup>n</sup>C<sub>n-2</sub> ,.... etc.  <br />
        </span>
      ],
      formula: [
        <span>
          Binomial expansion of (A + B)<sup>n</sup> by using the binomial theorem is as follows,
          <br />
          <strong>   (A+B)<sup>n</sup> = (<sup>n</sup>C<sub>0</sub>)(A<sup>n</sup>)(B<sup>0</sup>) + (<sup>n</sup>C<sub>1</sub>)(A<sup>n-1</sup>)(B<sup>1</sup>) + (<sup>n</sup>C<sub>2</sub>)(A<sup>n-2</sup>)(B<sup>2</sup>) +......+ (<sup>n</sup>C<sub>n</sub>)(A<sup>0</sup>)(B<sup>n</sup>)
          </strong>
          <br />
          <br />
          where <sup>n</sup>C<sub>r</sub> = (n!) / ((n-r)! * (r)!)
          <br />
          <br />
          The general term of the binomial expansion is
          <br />
          <strong>T<sub>r+1</sub> = <sup>n</sup>C<sub>n-r</sub> (A<sup>n-r</sup>)(B<sup>n</sup>)</strong>
        </span>
      ],

      process: [
        <span>
          To find the binomial expansion, first identify the values of A, B and n.
          <br />
          Then apply the formula of binomial expansion i.e.  (A+B)<sup>n</sup> = (<sup>n</sup>C<sub>0</sub>)(A<sup>n</sup>)(B<sup>0</sup>) + (<sup>n</sup>C<sub>1</sub>)(A<sup>n-1</sup>)(B<sup>1</sup>) + (<sup>n</sup>C<sub>2</sub>)(A<sup>n-2</sup>)(B<sup>2</sup>) +......+ (<sup>n</sup>C<sub>n</sub>)(A<sup>0</sup>)(B<sup>n</sup>)
        </span>
      ],
      example1: [
        <span>
          <br />
          <strong>1. Find the Binomial Expansion of (√2 + 1)<sup>5</sup>.</strong>
          <br />
          <br />
          <strong><u>Solution:</u></strong>
          <br />
          A=√2, B=1 and n=5
          <br />
          Now apply the formula of binomial expansion i.e.
          <br />
          (A+B)<sup>n</sup> = (<sup>n</sup>C<sub>0</sub>)(A<sup>n</sup>)(B<sup>0</sup>) + (<sup>n</sup>C<sub>1</sub>)(A<sup>n-1</sup>)(B<sup>1</sup>) + (<sup>n</sup>C<sub>2</sub>)(A<sup>n-2</sup>)(B<sup>2</sup>) +......+ (<sup>n</sup>C<sub>n</sub>)(A<sup>0</sup>)(B<sup>n</sup>)
          <br /><br/>
          (√2 + 1)<sup>5</sup> = (<sup>5</sup>C<sub>0</sub>)(√2<sup>5</sup>)(1<sup>0</sup>) + (<sup>5</sup>C<sub>1</sub>)(√2<sup>4</sup>)(1<sup>1</sup>) + (<sup>5</sup>C<sub>2</sub>)(√2<sup>3</sup>)(1<sup>2</sup>) + (<sup>5</sup>C<sub>3</sub>)(√2<sup>2</sup>)(1<sup>3</sup>) + (<sup>5</sup>C<sub>4</sub>)(√2<sup>1</sup>)(1<sup>4</sup>) + (<sup>5</sup>C<sub>5</sub>)(√2<sup>5</sup>)(1<sup>5</sup>)
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;= (1)(4√2)(1) + (5)(4)(1) + (10)(2√2)(1) + (10)(2)(1) + (1)(1)(1)
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;= 4√2 + 20 + 20√2 + 20 + 1
        </span>
      ],
      example2: [
        <span>
         <br/>
          <strong>2. Find the Binomial Expansion of (3x + 4y)<sup>5</sup>.</strong>
          <br />
          <br />
          <strong><u>Solution:</u></strong>
          <br/>
          Apply the formula,
          <br/>
          (ax + by)<sup>n</sup> = (<sup>n</sup>C<sub>0</sub>)(ax)<sup>n</sup> (by)<sup>0</sup> + (<sup>n</sup>C<sub>1</sub>)(ax)<sup>n-1</sup> (by)<sup>1</sup> + (<sup>n</sup>C<sub>2</sub>)(ax)<sup>n-2</sup> (by)<sup>2</sup> + ... + (<sup>n</sup>C<sub>n</sub>)(ax)<sup>0</sup> (by)<sup>n</sup>
          <br/>
          <br/>
          (3x + 5y)<sup>4</sup> = (<sup>4</sup>C<sub>0</sub>)(3x)<sup>4</sup> (5y)<sup>0</sup> + (<sup>4</sup>C<sub>1</sub>)(3x)<sup>3</sup> (5y)<sup>1</sup> + (<sup>4</sup>C<sub>2</sub>)(3x)<sup>2</sup> (5y)<sup>2</sup> + (<sup>4</sup>C<sub>3</sub>)(3x)<sup>1</sup> (5y)<sup>3</sup> + (<sup>4</sup>C<sub>4</sub>)(3x)<sup>0</sup> (5y)<sup>4</sup>
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; = (1)(81x<sup>4</sup>)(1) + (4)(27x<sup>3</sup>)(5y) + (6)(9x<sup>2</sup>)(25y<sup>2</sup>) + (4)(3x)(125y<sup>3</sup>) + (1)(1)(625y<sup>4</sup>)
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; = 81x<sup>4</sup> + 540x<sup>3</sup>y + 1350x<sup>2</sup>y<sup>2</sup> + 1500xy<sup>3</sup> + 625y<sup>4</sup>
        </span>
      ]
    },
    {
      topic: "Matrices and Determinants",
      details: [
        "The matrix representation of a linear system is made by using all of the variable coefficients as element entries to construct the rectangular array of an appropriate size augmented matrix. Determinant is a scalar value that can be calculated from the elements of a square matrix. It is denoted as det A, det(A) or |A|. ",
      ],
      formula: [
        "For a 3x3 matrix, the determinant is :",
        <br />,
        "|A| = a(ei − fh) − b(di − fg) + c(dh − eg)",
        
      ],
      process: [
        `The determinant of a matrix is :`,
        <br />,
        `For a 2×2 matrix the determinant is : ad - bc`,
        <br />,
        `For a 3×3 matrix the determinant is :`,
        <br />,
        `|A| = a(ei − fh) − b(di − fg) + c(dh − eg)`,
      ],
      example1: [
        "Calculate the determinant of the 3 x 3 matrix.",
        <br />,
        "Given, a = 2, b = -3, c = 1 ,d = 2,",
        <br />,
        "e = 0, f = -1, g = 1, h = 4, i = 5",
        <br />,
        "Use the 3 x 3 determinant formula: ",
        <br />,
        "|A| = a(ei − fh) − b(di − fg) + c(dh − eg)"
        
      ],
      example2: [
        "On applying the formula,",
        <br />,
        "=> 2[ 0 – (-4)] + 3 [10 – (-1)] +1 [8-0]",
        <br />,
        "=> 2 (0+4) +3 (10 +1) + 1(8)",
        <br />,
        "=> 2(4) +3(11) + 8",
        <br />,
        "=> 8+33+8",
        <br />,
        <b>=&gt; 49</b>
      ],
    }
  ];

  const page = Topics.filter((data) => data.topic === topic);
  const details = page[0];


  //PnC calculator
  const PnC = () => {
    const [n, setN] = useState(null);
    const [r, setR] = useState(null);
    const [choice, setChoice] = useState("Permutation");
    const [choiceData, setChoiceData] = useState({
      name: "Permutation",
    });
    const [result, setResult] = useState(null);
    const handleChange = (e) => {
      reset();
      setChoice(e.target.value);
    }
    function reset() {
      setN(null);
      setR(null);
      setResult(null);
    }
    function factorial(x) {
      var result = 1;
      for (let i = 1; i <= x; i++)
        result *= i;
      return result;
    }
    const calcResult = () => {

      if (choice == "Permutation") {
        if (n >= r)
          setResult(factorial(n) / factorial(n - r));
        else
          alert("The value of n should not be less than r.Please enter valid values for n and r");
      }
      else if (choice == "Combination") {
        if (n >= r)
          setResult(factorial(n) / (factorial(r) * factorial(n - r)));
        else
          alert("The value of n should not be less than r.Please enter valid values for n and r");
      }
    }
    useEffect(() => {
      if (choice == "Permutation")
        setChoiceData({ name: "Permutation" });
      else
        setChoiceData({ name: "Combination" });
    }, [choice]);


    return (
      <>
        <Form>
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => handleChange(e)}
            >
              <option value="Permutation">Permutation</option>
              <option value="Combination">Combination</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                To find the {choiceData.name}, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value of N</Form.Label>
            <Form.Control
              onChange={(e) => setN(Number(e.target.value))}
              type="number"
              placeholder={"Enter the value of n"}
              value={n === null ? "" : n}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value of R</Form.Label>
            <Form.Control
              onChange={(e) => setR(Number(e.target.value))}
              type="number"
              placeholder={"Enter the value of r"}
              value={r === null ? "" : r}
            />
          </Form.Group>
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
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    )
  }







  //Pogression Calculator - AP/GP
  const Progression = () => {
    const [result, setResult] = useState(null);
    const [choice, setChoice] = useState("AP");
    const [n, setN] = useState(null);
    const [fr, setFR] = useState(null);
    const [nth, setNth] = useState(null);
    const [sum, setSum] = useState(null);
    function handleChange(e) {
      reset();
      setChoice(e.target.value);
      choiceData();
    }
    const calcResult = () => {
      let res, s;
      if (choice === "AP") {
        res = Number(n) + Number(fr * (nth - 1));
        s = (nth / 2) * (Number(2 * n) + Number(fr * (nth - 1)));
      } else if (choice === "GP") {
        res = Number(n) * Number(fr ** (nth - 1));
        s = (n * (fr ** nth - 1)) / (fr - 1);
      }
      setResult(res);
      setSum(s);
    };
    function reset() {
      setResult(null);
      setN(null);
      setFR(null);
      setNth(null);
      setSum(null);
    }
    const choiceData = () => {
      if (choice === "AP")
        return {
          name: "Arithmetic Progression",
          quantities: ["First Number", "Common diffrence"],
          disable: true,
        };
      else if (choice === "GP") {
        return {
          name: "Geometric Progression",
          quantities: ["First Number", "Common ratio"],
        };
      }
    };
    return (
      <>
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => handleChange(e)}
            >
              <option value="AP">Arethmetic Progression</option>
              <option value="GP">Geometric Progression</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                To find the {choiceData().name}, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[0]}</Form.Label>
            <Form.Control
              onChange={(e) => setN(e.target.value)}
              type="number"
              placeholder={"Enter the First Number"}
              value={n === null ? "" : n}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[1]}</Form.Label>
            <Form.Control
              onChange={(e) => setFR(e.target.value)}
              type="number"
              placeholder={"Enter the " + choiceData().quantities[1]}
              value={fr === null ? "" : fr}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>nth Number to obtain</Form.Label>
            <Form.Control
              onChange={(e) => setNth(e.target.value)}
              type="number"
              placeholder={"Enter the nth Number to obtain"}
              value={nth === null ? "" : nth}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Number at {nth ? nth : "nth"} position</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>
              Sum of numbers till {nth ? nth : "nth"} position
            </Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={sum === null ? "Result" : sum}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  //Exponential Calculator
  const Exponents = () => {
    const [result, setResult] = useState(null);
    const [choice, setChoice] = useState("Power");
    const [choiceData, setChoiceData] = useState({
      name: "Power",
      quantities: ["Base", "Exponent"],
      disabled: false,
    });
    const [x, setX] = useState(null);
    const [n, setN] = useState(null);

    useEffect(() => {
      if (choice === "Power") {
        return setChoiceData({
          name: "Power",
          quantities: ["Base", "Exponent"],
          disabled: false,
        });
      } else if (choice === "SquareRoot") {
        setN(0.5);
        setChoiceData({
          name: "Square-Root",
          quantities: ["Base", "Exponent"],
          disabled: true,
        });
      } else if (choice === "CubeRoot") {
        setN(0.3333);
        setChoiceData({
          name: "Cube-Root",
          quantities: ["Base", "Exponent"],
          disabled: true,
        });
      }
    }, [choice]);

    useEffect(() => { }, [choice, x, n, result]);

    const calcResult = () => {
      let res = 1;
      if (choice == "Power") res = Math.pow(x, n);
      else if (choice == "SquareRoot") res = Math.sqrt(x);
      else res = Math.cbrt(x);

      setResult(res);
    };

    const handleChange = (e) => {
      reset();
      setChoice(e.target.value);
    };

    function reset() {
      setResult(null);
      setX(null);
      if (choice == "Power") setN(null);
    }

    return (
      <>
        <Form>
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => handleChange(e)}
            >
              <option value="Power">Power</option>
              <option value="SquareRoot">Square Root</option>
              <option value="CubeRoot">Cube Root</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                To find the {choiceData.name}, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData.quantities[0]}</Form.Label>
            <Form.Control
              onChange={(e) => setX(e.target.value)}
              type="number"
              placeholder={"Enter the Base"}
              value={x === null ? "" : x}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData.quantities[1]}</Form.Label>
            <Form.Control
              onChange={(e) => setN(e.target.value)}
              type="number"
              placeholder={"Enter the Exponent"}
              value={n === null ? "" : n}
              disabled={choiceData.disabled}
            />
          </Form.Group>
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
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };


  //Probability Calculator
  const Probability = () => {
    const [a, setA] = useState();   //a is the probablity of first event.
    const [b, setB] = useState();   // b is the probablity of second event.
    const [union, setUnion] = useState();            //P(A | B)
    const [aNotOccuring, setaNotOccuring] = useState(null);  //P(A')
    const [bNotOccuring, setbNotOccuring] = useState(null);  //P(B')
    const [bothOccuring, setBothOccuring] = useState(null);   //P(A & B)
    const [onlyAOccurs, setOnlyAOccurs] = useState(null);
    const [onlyBOccurs, setOnlyBOccurs] = useState(null);
    function reset(){
      setA(null);
      setB(null);
      setUnion(null);
      setaNotOccuring(null);
      setbNotOccuring(null);
      setBothOccuring(null);
      setOnlyAOccurs(null);
      setOnlyBOccurs(null);
    }
   
   
    const calcResult = () => {
      if (union < Math.max(a, b))
        alert("The Probability of Occurence of either of 2 events should not be lesser than the Probaility of occurence of each of them");
      else {
        setaNotOccuring(parseFloat((1 - a).toFixed(10)));
        setbNotOccuring(parseFloat((1 - b).toFixed(10)));
        setBothOccuring(parseFloat((a + b - union).toFixed(10)));
        setOnlyAOccurs(parseFloat((union - b).toFixed(10)));
        setOnlyBOccurs(parseFloat((union - a).toFixed(10)));
      }
    }
    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Enter the Probablity of First Event</Form.Label>
            <Form.Control
              onChange={(e) => setA(Number(e.target.value))}
              type="number"
              value={a ==null ? "" : a}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Enter the Probablity of Second Event</Form.Label>
            <Form.Control
              onChange={(e) => setB(Number(e.target.value))}
              type="number"
              value={b ==null ? "" : b}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Enter the Probablity of Occurence of either of the events</Form.Label>
            <Form.Control
              onChange={(e) => setUnion(Number(e.target.value))}
              type="number"
              value={union ==null ? "" : union}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Probablity of Non-Occurence of First Event</Form.Label>
            <Form.Control
              type="number"
              disabled="true"
              value={aNotOccuring ==null ? "" : aNotOccuring}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Probablity of Non-Occurence of Second Event</Form.Label>
            <Form.Control
              type="number"
              disabled="true"
              value={bNotOccuring ==null ? "" : bNotOccuring}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Probability of Occurence of Both Events</Form.Label>
            <Form.Control
              type="number"
              disabled="true"
              value={bothOccuring ==null ? "" : bothOccuring}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Probability that only the first event occurs</Form.Label>
            <Form.Control
              type="number"
              disabled="true"
              value={onlyAOccurs ==null ? "" :onlyAOccurs}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Probability that only the second event occurs</Form.Label>
            <Form.Control
              type="number"
              disabled="true"
              value={onlyBOccurs ==null ? "" : onlyBOccurs}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={(e) =>reset()} type="reset">
            Reset
          </Button>
        </div>
        &nbsp; &nbsp;
        <div className="formula-table mb-4">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3>Probability Formulae</h3>
                </tr>
              </section>

              <tr>
                <th className="row-1 row-ID  "> Quantities</th>
                <th className="row-2 row-name ">Equation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>P(A')</td>
                <td>
                  <b>
                    1-P(A)
                  </b>{" "}
                  , where P(A) is probability of occurence of A.
                </td>
              </tr>
              <tr>
                <td>P(B')</td>
                <td>
                  <div>
                    <b>1-P(B)</b> , where P(B) is the probability of occurence of B.
                  </div>
                </td>
              </tr>
              <tr>
                <td>P(A ∩ B)</td>
                <td>
                  <b>P(A) + P(B) - P(A ∪ B)</b>, where A ∪ B represents occurence of either of the events
                </td>
              </tr>
              <tr>
                <td>P(only A occurs)</td>
                <td>
                  <b>
                    P(A)-P(A ∩ B)
                  </b>, where A ∩ B represents occurence of both events
                </td>
              </tr>
              <tr>
                <td>P(only B occurs)</td>
                <td>
                  <b>
                    P(B)-P(A ∩ B)
                  </b>, where A ∩ B represents occurence of both events
                </td>
              </tr>



            </tbody>
          </table>
        </div>
      </>);

  }


  // Statistics calculator
  const Statistics = () => {
    let numArr = [];
    let statOBJ = {
      sort: [],
      count: 0,
      sum: 0,
      largest: 0,
      smallest: 0,
      mean: 0,
      median: 0,
      mode: 0,
      stddeviation: "",
      variance: "",
    };
    const [number, setNum] = useState(0);
    const [statData, setStatData] = useState(statOBJ);

    const calcStat = () => {
      numArr = number.split(/[\s,]+/);
      numArr = numArr.sort();
      statOBJ.sort = numArr; //sorted numbers
      statOBJ.count = numArr.length; //Number of items
      statOBJ.smallest = numArr[1];
      numArr.map((item, index) => {
        statOBJ.sum += Number(item); //Sum of all items
        return <></>;
      });
      statOBJ.largest = numArr[statOBJ.count - 1]; //largest of all items
      statOBJ.smallest = numArr[0]; //smalles of all items
      statOBJ.mean = (statOBJ.sum / statOBJ.count).toFixed(2); //mean or average of all
      let med = 0;
      if (statOBJ.count % 2 === 0) {
        med = statOBJ.count / 2;
      } else {
        med = (statOBJ.count + 1) / 2;
      }
      statOBJ.median = numArr[med - 1]; //median of all items
      let repeatCount = 1;
      let modeIndex = 0;
      let maxRepeat = 0;
      for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] === numArr[i + 1]) {
          repeatCount = repeatCount + 1;
          if (repeatCount > maxRepeat) {
            maxRepeat = repeatCount;
            modeIndex = i;
          }
        } else {
          repeatCount = 0;
        }
      }
      statOBJ.mode = numArr[modeIndex]; //mode of all items

      let stddevnum = 0;
      for (let i = 0; i < numArr.length; i++) {
        stddevnum += (numArr[i] - statOBJ.mean) ** 2;
      }
      if (stddevnum > 0) {
        statOBJ.stddeviation = Math.sqrt(stddevnum / (numArr.length - 1));
        statOBJ.variance = stddevnum / (numArr.length - 1);
      } else {
        statOBJ.stddeviation = Math.sqrt(
          (-1 * stddevnum) / (numArr.length - 1)
        );
        statOBJ.variance = (-1 * stddevnum) / (numArr.length - 1);
      }
    };

    const resetStat = () => {
      setNum(0);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>Enter the following values</strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Enter numbers sparated by a space or comma</Form.Label>
            <Form.Control
              onChange={(e) => setNum(e.target.value)}
              type="text"
              placeholder={"Enter the First Number"}
              value={number === 0 ? "" : number}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Sorted Data</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={
                statData.count === 0
                  ? "Numbers in ascending order"
                  : statData.sort
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Total number of items</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={statData.count === 0 ? "Count" : statData.count}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Sum of all the items</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={statData.sum === 0 ? "Sum" : statData.sum}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Smallest of all the items</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={
                statData.smallest === 0 ? "Smallest" : statData.smallest
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Largest of all the items</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={
                statData.largest === 0 ? "Largest" : statData.largest
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Mean(average) of all the items</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={statData.mean === 0 ? "Mean" : statData.mean}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Median of all the items</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={statData.median === 0 ? "Median" : statData.median}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Mode of all the items</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={statData.mode === 0 ? "Mode" : statData.mode}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Standard deviation</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={
                statData.stddeviation === ""
                  ? "Standard deviation"
                  : statData.stddeviation.toFixed(2)
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Variance</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={
                statData.variance === ""
                  ? "Variance"
                  : statData.variance.toFixed(2)
              }
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button
            variant="primary"
            onClick={() => {
              calcStat();
              setStatData(statOBJ);
            }}
          >
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => resetStat()} type="reset">
            Reset
          </Button>
        </div>
        &nbsp; &nbsp;
        <div className="formula-table mb-4">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3>Statistical Formulae</h3>
                </tr>
              </section>

              <tr>
                <th className="row-1 row-ID  "> Measures</th>
                <th className="row-2 row-name ">Equation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mean</td>
                <td>
                  <b>
                    Σx<sub>i</sub> / N
                  </b>{" "}
                  , where N is total number of values
                </td>
              </tr>
              <tr>
                <td>Median</td>
                <td>
                  <b>
                    <div>
                      ((N+1)/2)<sup>th</sup> term, if N is odd
                    </div>
                    <div>
                      ((N/2)<sup>th</sup> term + (N/2+1)<sup>th</sup>term) / 2 ,
                      if N is even
                    </div>
                  </b>
                </td>
              </tr>
              <tr>
                <td>Mode</td>
                <td>
                  <b>The value which appears most frequently</b>
                </td>
              </tr>
              <tr>
                <td>Variance</td>
                <td>
                  <b>
                    (Σ(x - Mean)<sup>2</sup>) / N-1
                  </b>
                </td>
              </tr>
              <tr>
                <td>Standard Deviation</td>
                <td>
                  <b>
                    &radic; (Σ(x - Mean)<sup>2</sup>) / N-1
                  </b>
                </td>
              </tr>

              <tr>
                <td>Range</td>
                <td>
                  <b>Highest Value - Lowest Value in series</b>
                </td>
              </tr>
              <tr>
                <td>Mean Deviation</td>
                <td>
                  <b>
                    (Σ|x<sub>i</sub> - Mean|) / N
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };

  //Complex Number Calculator
  const ComplexNumbers = () => {
    const [result, setResult] = useState({ x: null, y: null });
    const [cartesianResult, setCartesianResult] = useState({
      x: null,
      y: null,
    });
    const [choice, setChoice] = useState("Add");
    const [valueX, setX] = useState({ x1: null, x2: null });
    const [valueY, setY] = useState({ y1: null, y2: null });
    const [polarθ, setPolarθ] = useState(null);

    const [polarR, setPolarR] = useState(null);

    function handleChange(e) {
      reset();
      setChoice(e.target.value);
      choiceData();
    }

    // Function for converting polar form into cartesian form
    const convertPolar = () => {
      let r, x, y;
      r = Number(polarR);
      x = Number(polarθ);
      y = Number(polarθ);

      x = Math.round(r * Math.cos((x * Math.PI) / 180));
      y = Math.round(r * Math.sin((y * Math.PI) / 180));

      setCartesianResult({ x: x, y: y });
    };

    function reset2() {
      setCartesianResult({ x: null, y: null });
      setPolarR(null);
      setPolarθ(null);
    }

    const calcComplexNumber = () => {
      let x, y, x1, x2, y1, y2;
      // Assigning values for code reabability
      x1 = Number(valueX.x1);
      x2 = Number(valueX.x2);
      y1 = Number(valueY.y1);
      y2 = Number(valueY.y2);

      if (choice === "Add") {
        x = x1 + x2;
        y = y1 + y2;
      } else if (choice === "Sub") {
        x = x1 - x2;
        y = y1 - y2;
      } else if (choice === "Product") {
        x = x1 * x2;
        y = y1 * y2;
      } else if (choice === "Divide") {
        x = Number((x1 * x2 + y1 * y2) / (x2 * x2 + (y1 + y2)));
        y = Number((x1 * x2 - y1 * y2) / (x2 * x2 + (y1 + y2)));
      }
      setResult({ x: x, y: y });
    };
    function reset() {
      setResult({ x: null, y: null });
      setX({ x1: null, x2: null });
      setY({ y1: null, y2: null });
    }
    const choiceData = () => {
      if (choice === "Add")
        return {
          name: "Addition",
          disable: true,
        };
      else if (choice === "Sub") {
        return {
          name: "Subtraction",
        };
      } else if (choice === "Product") {
        return {
          name: "Multiplication",
        };
      } else if (choice === "Div") {
        return {
          name: "Divide",
        };
      }
    };
    return (
      <>
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of algebraic calculation</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => handleChange(e)}
            >
              <option value="Add">Addition</option>
              <option value="Sub">Subtraction</option>
              <option value="Product">Multiplication</option>
              <option value="Div">Division</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                To find the {choiceData().name} of two Complex Numbers, Enter
                the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>

          {/* Equation One */}
          <Form.Group className="mb-4">
            <div className="complex-num-group">
              <input
                type="text"
                className="form-control"
                placeholder="Value of First real number(x1)"
                name="X1"
                value={valueX.x1 === null ? "" : valueX.x1}
                onChange={(e) => setX({ x1: e.target.value })}
              />

              <span className="group-txt">+ i</span>

              <input
                type="text"
                className="form-control"
                placeholder="Value of Second Real Number(y1)"
                name="Y1"
                value={valueY.y1 === null ? "" : valueY.y1}
                onChange={(e) => setY({ y1: e.target.value })}
              />
            </div>
          </Form.Group>

          {/* Equation two */}
          <Form.Group className="mb-4">
            <div className="complex-num-group">
              <input
                type="text"
                className="form-control"
                placeholder="Value of First real number(x2)"
                name="X2"
                value={valueX.x2 === null ? "" : valueX.x2}
                onChange={(e) => setX({ ...valueX, x2: e.target.value })}
              />

              <span className="group-txt">+ i</span>

              <input
                type="text"
                className="form-control"
                placeholder="Value of Second Real Number(y2)"
                name="Y2"
                value={valueY.y2 === null ? "" : valueY.y2}
                onChange={(e) => setY({ ...valueY, y2: e.target.value })}
              />
            </div>
          </Form.Group>

          {/* Result */}

          <Form.Group className="mb-4">
            <div className="complex-num-group">
              <input
                readOnly
                type="text"
                className="form-control"
                placeholder={result.x === null ? "Result of X" : result.x}
              />

              <span className="group-txt">+ i</span>

              <input
                readOnly
                type="text"
                className="form-control"
                placeholder={result.y === null ? "Result of Y" : result.y}
              />
            </div>
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcComplexNumber}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>

        {/* Conversion of Polar form to Cartesian form */}
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <br /> <br />
            <Form.Label>
              <strong>Conversion of Polar Form into Cartesian Form</strong>
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-4">
            <div className="complex-num-group">
              <input
                type="text"
                className="form-control"
                placeholder="Value of r"
                name="r"
                value={polarR === null ? "" : polarR}
                onChange={(e) => setPolarR(e.target.value)}
              />

              <span className="group-txt">θ =</span>
              <input
                type="text"
                className="form-control"
                placeholder="Value of θ"
                name="cosq"
                value={polarθ === null ? "" : polarθ}
                onChange={(e) => setPolarθ(e.target.value)}
              />
            </div>
          </Form.Group>
          {/* Result */}

          <Form.Group className="mb-4">
            <div className="complex-num-group">
              <input
                readOnly
                type="text"
                className="form-control"
                placeholder={
                  cartesianResult.x === null
                    ? "Cartesian Form of X"
                    : cartesianResult.x
                }
              />

              <span className="group-txt"></span>

              <input
                readOnly
                type="text"
                className="form-control"
                placeholder={
                  cartesianResult.y === null
                    ? "Cartesian Form of Y"
                    : cartesianResult.y
                }
              />
            </div>
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={convertPolar}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset2()} type="reset">
            Reset
          </Button>
        </div>

        <br></br>

        <div className="formula-table mb-4">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3>Properties of Addition </h3>
                </tr>
              </section>

              <tr>
                <th className="row-1 row-ID  "> Property Name</th>
                <th className="row-2 row-name ">Representation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Commutative</td>
                <td>
                  <b>z1 + z2 = z2 + z1</b>
                </td>
              </tr>

              <tr>
                <td>Associative</td>
                <td>
                  <b>z1 + (z2 + z3) = (z1 + z2) + z3</b>
                </td>
              </tr>

              <tr>
                <td>Additive identity</td>
                <td>
                  <b>z + 0 = z = 0 + z</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="formula-table">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3>Properties of Multiplication</h3>
                </tr>
              </section>

              <tr>
                <th className="row-1 row-ID  "> Property Name</th>
                <th className="row-2 row-name ">Representation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Commutative</td>
                <td>
                  <b>z1z2 = z2z1</b>
                </td>
              </tr>

              <tr>
                <td>Associative</td>
                <td>
                  <b>z1(z2z3) = (z1z2)z3</b>
                </td>
              </tr>

              <tr>
                <td>Multiplicative identity</td>
                <td>
                  <b>z . 1 = z = 1 . z</b>
                </td>
              </tr>

              <tr>
                <td>Distributive law</td>
                <td>
                  <b>z1(z2 + z3) = z1z2 + z1z3</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <br></br>
        <div className="formula-table">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3>Algebraic Identities </h3>
                </tr>
              </section>
              <tr>
                <th className="row-1 row-ID  "> Identity</th>
                <th className="row-2 row-name ">Representation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  (z1 + z2)<sup>2</sup>
                </td>
                <td>
                  <b>
                    z1<sup>2</sup> + 2z1z2 + z2<sup>2</sup>
                  </b>
                </td>
              </tr>

              <tr>
                <td>
                  (z1 - z2)<sup>2</sup>
                </td>
                <td>
                  <b>
                    z1<sup>2</sup> - 2z1z2 + z2<sup>2</sup>
                  </b>
                </td>
              </tr>

              <tr>
                <td>
                  (z1 + z2)<sup>3</sup>
                </td>
                <td>
                  <b>
                    z1<sup>3</sup> + 3z1<sup>2</sup>z2 + 3z1z2<sup>2</sup> + z2
                    <sup>3</sup>
                  </b>
                </td>
              </tr>

              <tr>
                <td>
                  (z1 - z2)<sup>3</sup>
                </td>
                <td>
                  <b>
                    z1<sup>3</sup> - 3z1<sup>2</sup>z2 + 3z1z2<sup>2</sup> - z2
                    <sup>3</sup>
                  </b>
                </td>
              </tr>

              <tr>
                <td>(z1 + z2)(z1 - z2)</td>
                <td>
                  <b>
                    z1<sup>2</sup> - z2<sup>2</sup>
                  </b>
                </td>
              </tr>

              <tr>
                <td>
                  (z1 +z2 + z3)<sup>2</sup>
                </td>
                <td>
                  <b>
                    z1<sup>2</sup> + z2<sup>2</sup> + z3<sup>2</sup> + 2z1z2 +
                    2z2z3 +2z3z1
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };
  //Quadratic Equation Calculator
  const QuadraticEquation = () => {
    const [a, seta] = useState(null);
    const [b, setb] = useState(null);
    const [c, setc] = useState(null);
    const [x1, setx1] = useState(null);
    const [x2, setx2] = useState(null);
    const [result, setResult] = useState(null);
    const [equation, setEquation] = useState(null);
    const reset = () => {
      seta(null);
      setb(null);
      setc(null);
      setResult(null);
    };
    const reset2 = () => {
      setx1(null);
      setx1(null);
      setEquation(null);
    };
    function discriminant(A, B, C) {
      const D = B * B - 4 * A * C;
      // console.log(D);
      if (D < 0) return 0;
      return 1;
    }
    const calcQuadratic = () => {
      if (a == 0) {
        setResult("Value of a cannot be zero.");
        return;
      }
      const isValid = discriminant(a, b, c);
      console.log(isValid);
      if (!isValid) {
        setResult("Roots are imaginary.");
      } else {
        let d = b * b - 4 * a * c;
        d = Math.sqrt(d);
        let x1 = (-b + d) / (2 * a);
        let x2 = (-b - d) / (2 * a);
        console.log(x1, x2);
        setResult("Roots are " + x1 + " and " + x2);
      }
    };

    const generateEquation = () => {
      let sum = parseFloat(x1) + parseFloat(x2);
      sum = sum * -1;
      let product = parseFloat(x1) * parseFloat(x2);
      // console.log(sum,product);
      const eq =
        "x^2" +
        (sum > 0 ? "+" : "") +
        sum +
        "x" +
        (product > 0 ? "+" : "") +
        product;
      setEquation("Equation for the provided roots is " + eq);
    };

    return (
      <>
        <Form>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                {" "}
                To find the roots of the quadratic equation, Enter the following
                values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value of a </Form.Label>
            <Form.Control
              onChange={(e) => seta(e.target.value)}
              type="number"
              placeholder={"Enter the value of a"}
              value={a === null ? "" : a}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value of b</Form.Label>
            <Form.Control
              onChange={(e) => setb(e.target.value)}
              type="number"
              placeholder={"Enter the value of b"}
              value={b === null ? "" : b}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value of c</Form.Label>
            <Form.Control
              onChange={(e) => setc(e.target.value)}
              type="number"
              placeholder={"Enter the value of c"}
              value={c === null ? "" : c}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " "}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcQuadratic}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>

        <div
          style={{ fontWeight: "bold", margin: "50px", textAlign: "center" }}
        >
          OR
        </div>

        <Form>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                {" "}
                Generate the quadraic equation by providing the roots.
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value of x₁ </Form.Label>
            <Form.Control
              onChange={(e) => setx1(e.target.value)}
              type="number"
              placeholder={"Enter the value of x₁"}
              value={x1 === null ? "" : x1}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value of x₂</Form.Label>
            <Form.Control
              onChange={(e) => setx2(e.target.value)}
              type="number"
              placeholder={"Enter the value of x₂"}
              value={x2 === null ? "" : x2}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={equation === null ? "Equation" : equation + " "}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={generateEquation}>
            Generate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset2()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };


  //Binomial Calculator
  const Binomial = () => {
    const [a, setA] = useState(null);
    const [x, setX] = useState(null);
    const [n, setN] = useState(null);
    const [result, setResult] = useState([]);
    const reset = () => {
      setA(null);
      setX(null);
      setN(null);
      setResult([]);
    };

    const calcBinomial = () => {
      let term = Math.pow(a, n);
      let results = [...result, term];

      for (var i = 1; i <= n; i++) {
        term = term * x * (n - i + 1) / (i * a);
        results.push(term);
      }
      setResult(results);
      console.log(result);
    };


    const [xValue, setXValue] = useState(null);
    const [yValue, setYValue] = useState(null);
    const [expo, setExpo] = useState(null);
    const [resultExp, setResultExp] = useState(null);
    const resetExpression = () => {
      setXValue(null);
      setYValue(null);
      setExpo(null);
      setResultExp(null);
    };

    function factrial(n) {
      if (n === 0 || n === 1)
        return 1;
      else
        return n * factrial(n - 1);
    }

    function combination(n, r) {
      return factrial(n) / (factrial(r) * factrial(n - r));
    }

    function coefficient(x, y, n, r) {
      let ret = x * y * combination(n, r);
      if (ret === 1) return ''; // if coefficient is 1 return nothing because we dont usually put 1 as coeffocient
      else
        return ret;
    }

    function Binomial_Sigma(x, y, n) {
      let x_co;
      let y_co;
      let x_coeffcient = [];
      let y_coeffcient = [];
      let coefficients = [];
      let result = [];
      let x_power = [];
      let y_power = [];
      let ans = '';

      n = Number(n); // converts n to an integer

      if (x === 0) {
        y_co = Math.pow(y, n);
        let yPower = 'y^{' + n + '}';
        return y_co + yPower;
      }

      else if (y === 0) {
        x_co = Math.pow(x, n);
        let xPower = 'x^{' + n + '}';
        return x_co + xPower;
      }

      for (let j = 0; j < n + 1; j++) {
        if (x !== 1) { // x is not 1
          x_co = Math.pow(x, n - j);
          x_coeffcient.push(x_co);
        }
        else {
          x_coeffcient.push(1);
        }
        if (y !== 1) { // y is not 1
          y_co = Math.pow(y, j);
          y_coeffcient.push(y_co);
        }
        else {
          y_coeffcient.push(1);
        }
        x_power.push(n - j);
        y_power.push(j);
        coefficients.push(coefficient(x_coeffcient[j], y_coeffcient[j], n, j));
      }

      for (let i = 0; i < y_power.length; i++) { // convert it to latex syntax
        let term, x, y;
        if (x_power[i] === 0) x = "";
        else if (x_power[i] === 1) x = "x";
        else x = "x^" + '{' + x_power[i] + '}';
        if (y_power[i] === 0) y = "";
        else if (y_power[i] === 1) y = "y";
        else y = "y^" + '{' + y_power[i] + '}';
        let Coefficient = coefficient(x_coeffcient[i], y_coeffcient[i], n, i); // caluclates coefficient. Could use toFixed(0) but need to consoder a case where coefficient is ''
        let operator = '';
        if (Coefficient > 1) operator = '+'; // for positive values, use +


        if (i === 0) { // first term 
          if (operator === '+') operator = '';
          result.push(operator + Coefficient + x);
        }

        else if (i === y_power.length - 1) { // last term
          result.push(operator + Coefficient + y);
        }
        else { // terms in the middle
          result.push(operator + Coefficient + x + y);
        }
        ans += result[i];
      }
      return ans;
    }

    const calcBinomialExp = () => {
      const answer = Binomial_Sigma(xValue, yValue, expo);
      console.log(Binomial_Sigma(xValue, yValue, expo));
      setResultExp(answer);
      console.log(answer);
    }

    return (
      <>
        <div>
          <div>
            <Form>
              <Form.Group className="mb-4" controlId="text">
                <Form.Text className="text">
                  <strong>
                    {" "}

                    To find the Binomial Expansion of the form (A + B)<sup>n</sup>, Enter the following values
                  </strong>
                  <br />
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Value of A from the expression (A + B)<sup>n</sup> where A is interger or float</Form.Label>
                <Form.Control
                  onChange={(e) => setA(e.target.value)}
                  type="number"
                  placeholder={"Enter the value of A e.g. 3 or 1.414"}
                  value={a === null ? "" : a}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Value of B from the expression (A + B)<sup>n</sup> where B is interger or float</Form.Label>
                <Form.Control
                  onChange={(e) => setX(e.target.value)}
                  type="number"
                  placeholder={"Enter the value of B e.g. 5 or 1.732"}
                  value={x === null ? "" : x}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Value of n from the expression (A + B)<sup>n</sup> where n is interger or float</Form.Label>
                <Form.Control
                  onChange={(e) => setN(e.target.value)}
                  type="number"
                  placeholder={"Enter the value of n e.g. 6 or 2.5"}
                  value={n === null ? "" : n}
                />
              </Form.Group>
              <br />
              <Form.Group className="mb-3">
                <Form.Label >Binomial Expansion Terms of the expression (A + B)<sup>n</sup></Form.Label>
                {
                  <div className="binomial_result">
                    <p> <strong>{result.length === 0 ? "Result" : result.map((res) => (
                      <span>{res}&nbsp;&nbsp;</span>
                    ))}</strong> </p>
                  </div>
                }
              </Form.Group> <br /> <br />
            </Form>
            <div className="button-custom-grp">
              <Button variant="primary" onClick={calcBinomial}>
                Calculate
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button variant="dark" onClick={() => reset()} type="reset">
                Reset
              </Button>
            </div>
          </div>
          <br /><br /><br /><br />
          <div>
            <Form>
              <Form.Group className="mb-4" controlId="text">
                <Form.Text className="text">
                  <strong>
                    {" "}

                    To find the Binomial Expansion of the form (ax + by)<sup>n</sup>, Enter the following values
                  </strong>
                  <br />
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Coefficient of x from the expression (ax + by)<sup>n</sup></Form.Label>
                <Form.Control
                  onChange={(e) => setXValue(e.target.value)}
                  type="number"
                  placeholder={"Enter the value of a"}
                  value={xValue === null ? "" : xValue}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Coefficient of y from the expression (ax + by)<sup>n</sup></Form.Label>
                <Form.Control
                  onChange={(e) => setYValue(e.target.value)}
                  type="number"
                  placeholder={"Enter the value of b"}
                  value={yValue === null ? "" : yValue}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Value of n from the expression (ax + by)<sup>n</sup></Form.Label>
                <Form.Control
                  onChange={(e) => setExpo(e.target.value)}
                  type="number"
                  placeholder={"Enter the value of n"}
                  value={expo === null ? "" : expo}
                />
              </Form.Group>
              <br />
              <Form.Group className="mb-3">
                <Form.Label >Binomial Expansion of the expression (ax + by)<sup>n</sup></Form.Label>
                {
                  <div className="binomial_result">
                    <p> <strong>{resultExp === null ? "Result" : resultExp}</strong> </p>
                  </div>
                }
              </Form.Group>
            </Form><br /><br />
            <div className="button-custom-grp">
              <Button variant="primary" onClick={calcBinomialExp}>
                Calculate
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button variant="dark" onClick={() => resetExpression()} type="reset">
                Reset
              </Button>
            </div>
          </div>
          <br /><br />
          <div className="formula-table">
            <table className="formulae">
              <thead>
                <section className="m-2">
                  <tr>
                    <h3>Some Useful Expansions</h3>
                  </tr>
                </section>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>1. (x + y)<sup>n</sup> + (x − y)<sup>n</sup> =</strong> 2[C<sub>0</sub> x<sup>n</sup> + C<sub>2</sub> x<sup>n-1</sup> y<sup>2</sup> + C<sub>4</sub> x<sup>n-4</sup> y<sup>4</sup> + ...]
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>2. (x + y)<sup>n</sup> – (x − y)<sup>n</sup> =</strong> 2[C<sub>1</sub> x<sup>n-1</sup> y + C<sub>3</sub> x<sup>n-3</sup> y<sup>3</sup> + C<sub>5</sub> x<sup>n-5</sup> y<sup>5</sup> + ...]
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>3. (1 + x)<sup>n</sup>  =</strong> <sup>n</sup>Σ<sub>r-0</sub> <sup>n</sup>C<sub>r</sub> . x<sup>r</sup> = [C<sub>0</sub> + C<sub>1</sub> x + C<sub>2</sub> x<sup>2</sup> + … C<sub>n</sub> x<sub>n</sub>]
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>4. (1 + x)<sup>n</sup> + (1 − x)<sup>n</sup> =</strong>  2[C<sub>0</sub> + C<sub>2</sub> x<sup>2</sup>+C<sub>4</sub> x<sup>4</sup> + ...]
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>5. (1 + x)<sup>n</sup> − (1 − x)<sup>n</sup> =</strong> 2[C<sub>1</sub> x + C<sub>3</sub> x<sup>3</sup> + C<sub>5</sub> x<sup>5</sup> + ...]
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>6. </strong>Number of terms in the expansion of (x + a)<sup>n</sup> + (x − a)<sup>n</sup> are <strong>(n+2)/2 if “n” is even</strong> or <strong>(n+1)/2 if “n” is odd</strong>.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>7. </strong>Number of terms in the expansion of (x + a)<sup>n</sup> − (x − a)<sup>n</sup>  are <strong>(n/2) if “n” is even</strong> or <strong>(n+1)/2 if “n” is odd</strong>.
                  </td>
                </tr>
              </tbody>
              <br />
            </table>
          </div>
          <br /> <br />
          <div className="formula-table">
            <table className="formulae">
              <thead>
                <section className="m-2">
                  <tr>
                    <h3>Properties of Binomial Coefficients</h3>
                  </tr>
                </section>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>1. </strong> C<sub>0</sub> + C<sub>1</sub> + C<sub>2</sub> + ... + C<sub>n</sub> = <strong>2<sup>n</sup></strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>2. </strong> C<sub>0</sub> + C<sub>2</sub> + C<sub>4</sub> + ... = C<sub>1</sub> + C<sub>3</sub> + C<sub>5</sub> + ... = <strong>2<sup>n-1</sup></strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>3. </strong> C<sub>0</sub> – C<sub>1</sub> + C<sub>2</sub> – C<sub>3</sub> + ... +(−1)<sup>n</sup> . nC<sub>n</sub> = <strong>0</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>4. </strong>  <sup>n</sup>C<sub>1</sub> + 2.<sup>n</sup>C<sub>2</sub> + 3.<sup>n</sup>C<sub>3</sub> + ... + n.<sup>n</sup>C<sub>n</sub> = <strong>n.2<sup>n-1</sup></strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>5. </strong> C<sub>1</sub> − 2C<sub>2</sub> + 3C<sub>3</sub> − 4C<sub>0</sub> + ... +(−1)<sup>n-1</sup> Cn<sub>n</sub> = <strong>0</strong> for n &gt; 1
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>6. </strong>C<sub>0</sub><sup>2</sup> + C<sub>1</sub><sup>2</sup> + C<sub>2</sub><sup>2</sup> + ..... C<sub>n</sub><sup>2</sup> =  <strong>[(2n)!/ (n!)<sup>2</sup>]</strong>
                  </td>
                </tr>
              </tbody>
              <br />
            </table>
          </div>
        </div>
      </>
    );
  };
  //Matrices and Determinants
  const MatricesDeterminants = () => {
    const [a1,setA1] = useState(null);
    const [a2,setA2] = useState(null);
    const [a3,setA3] = useState(null);
    const [b1,setB1] = useState(null);
    const [b2,setB2] = useState(null);
    const [b3,setB3] = useState(null);
    const [c1,setC1] = useState(null);
    const [c2,setC2] = useState(null);
    const [c3,setC3] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setA1(null);
      setA2(null);
      setA3(null);
      setB1(null);
      setB2(null);
      setB3(null);
      setC1(null);
      setC2(null);
      setC3(null);
      setResult(null);
    };
   
    const calcMatricesDeterminant = () => {
      const r = ((a1*b2*c3) - (a1*b3*c2) - (a2*b1*c3) + (a2*b3*c1) + (a3*b1*c2) - (a3*b2*c1));
      let equation = [
        `${r}`
      ];
      setResult(equation);
    };

    return (
      <>
        <Form>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                {" "}
                To find the determinant of a 3x3 matrix, Enter the following
                values
              </strong>
              <br />
            </Form.Text>
            </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value of a1 </Form.Label>
            <Form.Control
              onChange={(e) => setA1(e.target.value)}
              type="number"
              placeholder={"Enter the value of a1"}
              value={a1 === null ? "" : a1}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value of a2 </Form.Label>
            <Form.Control
              onChange={(e) => setA2(e.target.value)}
              type="number"
              placeholder={"Enter the value of a2"}
              value={a2 === null ? "" : a2}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value of a3 </Form.Label>
            <Form.Control
              onChange={(e) => setA3(e.target.value)}
              type="number"
              placeholder={"Enter the value of a3"}
              value={a3 === null ? "" : a3}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value of b1</Form.Label>
            <Form.Control
              onChange={(e) => setB1(e.target.value)}
              type="number"
              placeholder={"Enter the value of b1"}
              value={b1 === null ? "" : b1}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value of b2</Form.Label>
            <Form.Control
              onChange={(e) => setB2(e.target.value)}
              type="number"
              placeholder={"Enter the value of b2"}
              value={b2 === null ? "" : b2}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value of b3</Form.Label>
            <Form.Control
              onChange={(e) => setB3(e.target.value)}
              type="number"
              placeholder={"Enter the value of b3"}
              value={b3=== null ? "" : b3}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value of c1</Form.Label>
            <Form.Control
              onChange={(e) => setC1(e.target.value)}
              type="number"
              placeholder={"Enter the value of c1"}
              value={c1 === null ? "" : c1}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value of c2</Form.Label>
            <Form.Control
              onChange={(e) => setC2(e.target.value)}
              type="number"
              placeholder={"Enter the value of c2"}
              value={c2 === null ? "" : c2}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value of c3</Form.Label>
            <Form.Control
              onChange={(e) => setC3(e.target.value)}
              type="number"
              placeholder={"Enter the value of c3"}
              value={c3=== null ? "" : c3}
            />
          </Form.Group>
          <Form.Group className="mb-4">
          <Form.Label><b>Determinant of 3x3 matrix</b></Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " "}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcMatricesDeterminant}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
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
      case "Permutation And Combination":
        currentCall = PnC();
        break;
      case "Probability":
        currentCall = Probability();
        break;
      case "Progression":
        currentCall = Progression();
        break;
      case "Statistics":
        currentCall = Statistics();
        break;
      case "Complex Numbers":
        currentCall = ComplexNumbers();
        break;
      case "Exponents":
        currentCall = Exponents();
        break;
      case "Quadratic Equation":
        currentCall = QuadraticEquation();
        break;
      case "Binomial":
        currentCall = Binomial();
        break;
      case "Matrices and Determinants":
        currentCall = MatricesDeterminants();
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
            content="Algebra, calculator, Algebra calculator, physics, Tech n science, technscience, tech and science"
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
          <h5>{details.formula}</h5>
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
