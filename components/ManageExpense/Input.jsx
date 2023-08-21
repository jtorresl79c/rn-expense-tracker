import { StyleSheet, Text, TextInput, View } from "react-native"
import { GlobalStyles } from "../../constants/styles"

function Input({label, textInputConfig}){

    let inputStyles = [styles.input]

    // const {multiline} = textInputConfig

    if(textInputConfig && textInputConfig.multiline){
        inputStyles.push(styles.inputMultiline)
    }

    return <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={inputStyles} {...textInputConfig}/>
    </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 16
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary700,
        padding: 6,
        borderRadius: 6,
        fontSize: 18
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
})

export default Input