// src/pages/Behind.jsx
import { useState } from "react";
import finishedCake from "../assets/finished-cake.jpeg";

export default function Behind() {
    const [active, setActive] = useState(null);       // controls showing text + button
    const [codeShown, setCodeShown] = useState(null); // controls showing code snippet

    const toggleText = (section) => {
        setActive(active === section ? null : section);
        setCodeShown(null); // hide code when switching sections
    };

    const toggleCode = (section) => {
        setCodeShown(codeShown === section ? null : section);
    };

    return (
        <div className="behind-container">
            <h1>Behind the Scenes</h1>
            <p className="behind-subtitle">
                A visual breakdown of the technical process behind my German Chocolate Cake
                digital heritage project.
            </p>
            <p className="behind-note">Click the cake images to reveal its contents!</p>

            {/* ---------- STEP 1 ---------- */}
            <div className="step">
                <img
                    src={finishedCake}
                    alt="Cake step 1"
                    className="circle-img"
                    onClick={() => toggleText(1)}
                />

                <h2>Handwritten Recipe ➜ Digital Form</h2>

                {active === 1 && (
                    <>
                        <p className="step-text fade-in">
                            The original recipe was photographed and transcribed into a structured
                            digital format for long-term preservation.
                        </p>

                        <button className="code-toggle" onClick={() => toggleCode(1)}>
                            {codeShown === 1 ? "Hide Code" : "Show Code"}
                        </button>

                        {codeShown === 1 && (
                            <pre className="code-snippet fade-in">
{`<!-- Sample XML -->
<recipe>
    <title>Grandma's German Chocolate Cake</title>
    <source>2005 handwritten recipe card</source>
</recipe>`}
                            </pre>
                        )}
                    </>
                )}
            </div>

            {/* ---------- STEP 2 ---------- */}
            <div className="step">
                <img
                    src={finishedCake}
                    alt="Cake step 2"
                    className="circle-img"
                    onClick={() => toggleText(2)}
                />

                <h2>XML Encoding</h2>

                {active === 2 && (
                    <>
                        <p className="step-text fade-in">
                            I encoded tools, ingredients, instructions, and photos in XML,
                            allowing the recipe’s structure to be machine-readable.
                        </p>

                        <button className="code-toggle" onClick={() => toggleCode(2)}>
                            {codeShown === 2 ? "Hide Code" : "Show Code"}
                        </button>

                        {codeShown === 2 && (
                            <pre className="code-snippet fade-in">
{`<equipment>
    <tool xml:id="mixer">Stand mixer</tool>
    <tool xml:id="cakepans">3 round cake pans</tool>
</equipment>`}
                            </pre>
                        )}
                    </>
                )}
            </div>

            {/* ---------- STEP 3 ---------- */}
            <div className="step">
                <img
                    src={finishedCake}
                    alt="Cake step 3"
                    className="circle-img"
                    onClick={() => toggleText(3)}
                />

                <h2>XSLT Transformation</h2>

                {active === 3 && (
                    <>
                        <p className="step-text fade-in">
                            Using XSLT, I transformed the XML into styled HTML pages for the website.
                        </p>

                        <button className="code-toggle" onClick={() => toggleCode(3)}>
                            {codeShown === 3 ? "Hide Code" : "Show Code"}
                        </button>

                        {codeShown === 3 && (
                            <pre className="code-snippet fade-in">
{`<xsl:template match="ingredient">
<li>
  <xsl:value-of select="item"/>
</li>
</xsl:template>`}
                            </pre>
                        )}
                    </>
                )}
            </div>

            {/* ---------- STEP 4 ---------- */}
            <div className="step">
                <img
                    src={finishedCake}
                    alt="Cake step 4"
                    className="circle-img"
                    onClick={() => toggleText(4)}
                />

                <h2>Schema Validation</h2>

                {active === 4 && (
                    <>
                        <p className="step-text fade-in">
                            I built a Relax NG schema to validate the XML’s structure, ensuring
                            the recipe follows rules for consistency and accuracy.
                        </p>

                        <button className="code-toggle" onClick={() => toggleCode(4)}>
                            {codeShown === 4 ? "Hide Code" : "Show Code"}
                        </button>

                        {codeShown === 4 && (
                            <pre className="code-snippet fade-in">
{`element recipe {
    element title { text },
    element ingredients { ingredient+ }
}`}
                            </pre>
                        )}
                    </>
                )}
            </div>

        </div>
    );
}
