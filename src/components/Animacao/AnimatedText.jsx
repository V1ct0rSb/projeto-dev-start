import { useState, useEffect } from "react";

const AnimatedText = () => {
  const texts = [
    "do zero, sem complicações",
    "com dicas práticas e diretas",
    "trilhando o seu próprio caminho",
    "passo a passo, no seu ritmo",
    "com guias que facilitam sua jornada",
    "de forma simples e eficiente",
    "desvendando o mundo da programação",
  ];

  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[index];
      setCurrentText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Espera antes de apagar
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length); // Vai para o próximo texto
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100); // Velocidade de digitação e exclusão
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, index]);

  // Alterna a visibilidade do cursor
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Alterna a cada 500ms

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span style={{ color: "#fff", fontWeight: "bold" }}>
      {currentText}
      <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </span>
  );
};

export default AnimatedText;
