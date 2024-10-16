import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Assets/CSS/Quizz.css";

function Quizz() {
  const [questions, setQuestions] = useState([]);  // Pour stocker les questions
  const [responses, setResponses] = useState({});  // Pour stocker les réponses regroupées par question
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Suivi de la question actuelle
  const [selectedResponse, setSelectedResponse] = useState(null); // Suivi de la réponse sélectionnée
  const [reponseClicked, setReponseClicked] = useState(false); // Activation du bouton Valider
  const [isCorrect, setIsCorrect] = useState(null); // Pour stocker si la réponse est correcte ou non
  const [loading, setLoading] = useState(true); // Suivi du chargement
  const [nextButtonEnabled, setNextButtonEnabled] = useState(false); // Contrôler le bouton "Suivant"

  // Charger les données des questions et réponses via l'API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const questionsResponse = await axios.get("http://127.0.0.1:8888/Quizz/AllQuestions");
        const responsesResponse = await axios.get("http://127.0.0.1:8888/Response/AllResponse");

        const groupedResponses = {};
        // Grouper les réponses par `UID`
        responsesResponse.data.forEach((response) => {
          if (!groupedResponses[response.UID]) {
            groupedResponses[response.UID] = [];
          }
          groupedResponses[response.UID].push(response);
        });

        setQuestions(questionsResponse.data);
        setResponses(groupedResponses);
        setLoading(false); // Les données sont prêtes
      } catch (error) {
        console.error("Erreur lors du chargement des données", error);
      }
    };

    fetchData();
  }, []);

  // Fonction pour gérer le clic sur une réponse
  const handleResponseClick = (index) => {
    setSelectedResponse(index); // Sélectionner la réponse
    setReponseClicked(true); // Activer le bouton Valider
  };

  // Fonction pour valider la réponse sélectionnée
  const handleValidateResponse = () => {
    const currentReponses = responses[questions[currentQuestionIndex].UID];
    const selectedAnswer = currentReponses[selectedResponse];
    // Vérifier si l'état de la réponse est 1 (correct)
    if (selectedAnswer.State === 1) {
      setIsCorrect(true); // La réponse est correcte
      setNextButtonEnabled(true); // Activer le bouton "Suivant"
    } else {
      setIsCorrect(false); // La réponse est incorrecte
      setNextButtonEnabled(false); // Garder le bouton "Suivant" désactivé
    }
  };

  // Fonction pour passer à la question suivante
  const handleNextQuestion = () => {
    setSelectedResponse(null); // Réinitialiser la sélection de réponse
    setReponseClicked(false); // Désactiver le bouton Valider
    setIsCorrect(null); // Réinitialiser le statut de la réponse (correct/incorrect)
    setNextButtonEnabled(false); // Désactiver le bouton "Suivant"
    setCurrentQuestionIndex(currentQuestionIndex + 1); // Passer à la prochaine question
  };

  // Vérifier si les données sont encore en train de charger
  if (loading) {
    return <p>Chargement des questions...</p>;
  }

  // Vérifier qu'il y a des questions disponibles
  if (questions.length === 0) {
    return <p>Aucune question disponible.</p>;
  }

  // Obtenir la question courante
  const currentQuestion = questions[currentQuestionIndex];

  // Obtenir les réponses associées à la question courante via son UID
  const currentReponses = responses[currentQuestion.UID];

  return (
    <div id="MainDiv">
      <p id="MainDiv-title"> SocialSafe </p>

      <div id="Questions">
        <div id="Question-title">
          {/* Afficher la question courante */}
          <p>{currentQuestion.Content}</p>
        </div>

        <div id="Response">
          {/* Afficher les réponses dynamiquement */}
          {currentReponses.map((response, index) => (
            <div
              key={index}
              className={`Response-item ${selectedResponse === index ? "selected" : ""}`} // Appliquer la classe 'selected' à la réponse cliquée
              onClick={() => handleResponseClick(index)}
            >
              <p>{response.Answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="BoutonDiv">
        {/* Le bouton Valider est désactivé tant qu'une réponse n'est pas sélectionnée */}
        <button onClick={handleValidateResponse} disabled={!reponseClicked}> Valider </button>
        <button onClick={handleNextQuestion} disabled={!nextButtonEnabled}> Suivant </button>
      </div>

      {/* Afficher un message en fonction du résultat de la validation */}
      {isCorrect === true && <p id="FlagCorrect">Bonne réponse !</p>}
      {isCorrect === false && <p id="FlagIncorrect">Mauvaise réponse. Réessayez !</p>}
    </div>
  );
}

export default Quizz;
