import { React, useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

function index() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc(`Seu IMC é igual a:`);
      setTextButton("Calcular novamente");
      return;
    }

    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e a altura");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          value={height}
          style={styles.textInput}
        ></TextInput>
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          placeholder="Ex. 75.98"
          keyboardType="numeric"
          value={weight}
          style={styles.textInput}
        ></TextInput>
        <TouchableOpacity
          onPress={() => {
            validationImc();
          }}
          style={styles.buttonCalculator}
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc}></ResultImc>
    </View>
  );
}

export default index;
