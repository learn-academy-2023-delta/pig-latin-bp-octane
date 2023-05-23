import React, { useState } from "react"
import "./App.css"
import butcherPigImage from "./assets/butcherPig.jpeg"

const App = () => {
  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState(
    "apple through queen squeal fry fluent"
  )
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {
    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!
      // if each word starts with a vowel, add "way" at the end.
      if(eachWord[0] === vowelsArray[0]) {
        return eachWord + "way"
      } 

      //Pseudo Code: Story 1.
      // 1. Make a conditional so that each word starting index sees if it is a vowel.
      // 2. If it is a vowel add "way" to the end of the word.
      // 3. Checks every index of the word with correlation to every index of the vowels.

      // ACTION ITEM: this return will be the output of your Pig Latin'd code

      else if(eachWord.includes("squ")) {
      return eachWord.slice(3) + eachWord.slice(0,3)+ "ay"
      }
      else if(eachWord.includes("qu")) {
        return eachWord.slice(2) + eachWord.slice(0,2) + "ay"
      }
      //PseudoCode: Story 2.
      // 1. Make a conditional of each word to see if it has "squ" or "qu".
      // 2. Use .includes with what we are looking for.
      // 3. Return the slice of the word after what we are looking for, add the slice off the beginning, add "ay".


      else if(eachWord[0] !== vowelsArray[0] && eachWord.includes("y")) {
        return eachWord.charAt(2) + eachWord.slice(0, 2) + "ay"
      }
      //Pseudo Code:
      // 1. Make a conditional that states if each word strictly does not have a vowel and has "y" within the word.
      // 2. return eachWord with .charAt that returns the specific index of that location, add the slice of index 0-1 to the end of the word, added with "y".


      return eachWord
    })

    //PseudoCode: Story 2.
    // 1. Make a conditional of each word to see if it has "squ" or "qu".
    // 2. Use .includes with what we are looking for.
    // 3. Return the slice of the word after what we are looking for, add the slice off the beginning, add "ay".
      
    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2023 | Coded by: Your Names Here!</footer>
    </div>
  )
}

export default App
